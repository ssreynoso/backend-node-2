import { Turno, TurnoPrisma, TurnoResponse } from '@/modules/turnos/types'
import { formatZone } from '@/lib/date'
import { getEstadoColor } from '@/lib/monitor'
import { obtenerEstado } from './obtener-estado'
import { obtenerHistoriaClinica } from '../../historias-clinicas/services/obtener-historia-clinica'
import { obtenerObraSocial } from '../../obras-sociales/services/obtener-obra-social'
import { obtenerMedico } from './obtener-medico'
import { obtenerInternacion } from '@/modules/internaciones/services/obtener-internacion'
import { procesarHistoriaClinica } from '../../historias-clinicas/services/procesar-historia-clinica'

export const procesarTurno = function (item: Turno | null): TurnoResponse | undefined {
    if (!item) return undefined

    let horaIni = new Date((item.TurHoraIni as Date) || new Date()).getUTCHours()
    let horaFinal = new Date((item.TurHoraFin as Date) || new Date()).getUTCHours()
    const minutosIni = new Date((item.TurHoraIni as Date) || new Date()).getUTCMinutes()
    const minutosFin = new Date((item.TurHoraFin as Date) || new Date()).getUTCMinutes()
    if (minutosIni === 30) horaIni += 0.5
    if (minutosFin === 30) horaFinal += 0.5

    const historiaClinica = item.historiaClinica

    // Horarios
    const horaInicio = item.TurHoraIni ? formatZone(new Date(item.TurHoraIni)) : ''
    const horaFin = item.TurHoraFin ? formatZone(new Date(item.TurHoraFin)) : ''

    // Paciente
    const { paciente, edad, sexo, nroHistoria } = procesarHistoriaClinica(historiaClinica)

    // Habitación
    const habitacion = item.internacion?.INHabitacion
    const cama = item.internacion?.INCama

    // Obra social
    // const obraSocialId  = item.obraSocial.OSCodigo
    const obraSocial = item.obraSocial?.OSRazonSocial
    const planCobertura = item.obraSocial?.plan.CoNomPlan

    // Medico
    const medico = item.medico
    const medicoNombre = medico?.MENombre
    const medicoEspecialidad = medico?.especialidad?.ESDescripcion?.trim()

    // Observaciones
    const observaciones = item.TurObservaciones

    // Cirugía
    const cirugia = item.TurSiglasEstudio

    // Estado
    const estado = item.estado?.EstTQDsc
    const estadoColor = getEstadoColor((item.estado?.EstTQCod as string) || '')

    return {
        id: item.TurID,
        sala: item.TurSala as number,
        fecha: item.Turfecha,
        horaIni,
        horaFinal,
        horaInicio,
        horaFin,
        paciente,
        edad,
        sexo,
        nroHistoria: nroHistoria || 0,
        habitacion: habitacion || 0,
        cama: cama || 0,
        obraSocial: obraSocial ? obraSocial.trim() : '',
        planCobertura: planCobertura ? planCobertura.trim() : '',
        medicoNombre: medicoNombre ? medicoNombre.trim() : '',
        medicoEspecialidad: medicoEspecialidad ? medicoEspecialidad.trim() : '',
        observaciones: observaciones ? observaciones.trim() : '',
        cirugia: cirugia ? cirugia.trim() : '',
        estado: estado ? estado.trim() : '',
        estadoColor
    }
}

const procesarTurnoInterno = async (turno: TurnoPrisma) => {
    // Obtengo estado
    const estado = await obtenerEstado(turno.TurEstado)

    // Obtengo Historia clínica
    const historiaClinica = await obtenerHistoriaClinica(turno.TurDNIPte)

    // Obtengo internación
    const internacion = await obtenerInternacion(turno.TurNroIntInter)

    // Obtengo Obra social
    const obraSocial = await obtenerObraSocial(turno.TurOsCodigo, turno.TurOSPlan)

    // Obtengo médico
    const medico = await obtenerMedico(turno.TurMedEstudio)

    const item: Turno = {
        ...turno,
        estado,
        historiaClinica,
        internacion,
        obraSocial,
        medico
    }

    return procesarTurno(item)
}

export const procesarTurnos = async (turnos: TurnoPrisma[]): Promise<TurnoResponse[]> => {
    // Proceso los turnos
    const response = await Promise.all(turnos.map(async turno => procesarTurnoInterno(turno)))

    // Filtro los turnos que no tienen internación o estado
    const filtered = response.filter(turno => {
        if (!turno) return false
        // if (!turno.habitacion || !turno.estado) return false // ¿Por qué filtro los turnos que no tienen habitación o estado?
        return true
    }) as unknown as TurnoResponse[]

    return filtered
}
