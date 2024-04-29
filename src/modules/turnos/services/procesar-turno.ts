import { Turno, TurnoPrisma, TurnoResponse } from '@/modules/turnos/types'
import { formatZone } from '@/lib/date'
import { getEstadoColor } from '@/lib/monitor'
import { obtenerEstado } from './obtener-estado'
import { obtenerHistoriaClinica } from './obtener-historia-clinica'
import { obtenerInternacion } from './obtener-internacion'
import { obtenerObraSocial } from './obtener-obra-social'
import { obtenerMedico } from './obtener-medico'

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
    const nombrePaciente = historiaClinica?.HCNombre?.trim()
    const apellidoPaciente = historiaClinica?.HCApeSol?.trim()
    const paciente = `${apellidoPaciente} ${nombrePaciente}`
    const edad = historiaClinica?.HCFechaNacim
        ? new Date().getFullYear() - new Date(historiaClinica.HCFechaNacim).getFullYear()
        : undefined
    const sexo = historiaClinica?.HCSexo === 'M' ? 'Masculino' : 'Femenino'
    const nroHistoria = historiaClinica?.HCNumero

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
        obraSocial: obraSocial || '',
        planCobertura: planCobertura || '',
        medicoNombre: medicoNombre || '',
        medicoEspecialidad: medicoEspecialidad || '',
        observaciones: observaciones || '',
        cirugia: cirugia || '',
        estado: estado || '',
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
        if (!turno.habitacion || !turno.estado) return false
        return true
    }) as unknown as TurnoResponse[]

    return filtered
}
