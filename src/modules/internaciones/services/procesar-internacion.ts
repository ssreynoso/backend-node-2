import { procesarHistoriaClinica } from '@/modules/historias-clinicas/services/procesar-historia-clinica'
import { Internacion, InternacionResponse } from '../types'
import { obtenerHistoriaClinica } from '@/modules/historias-clinicas/services/obtener-historia-clinica'
import { obtenerObraSocialConPlan } from '@/modules/obras-sociales/services/obtener-obra-social-con-plan'
import { procesarObraSocialConPlan } from '@/modules/obras-sociales/services/procesar-obra-social-con-plan'

export const procesarInternacion = async (internacion: Internacion): Promise<InternacionResponse> => {
    // Historia clínica
    const historiaClinica = await obtenerHistoriaClinica({ historiaClinicaId: internacion.INHCNumIng || 0 })
    const historiaClinicaProcesada = await procesarHistoriaClinica(historiaClinica, {
        documento: true,
        nroHistoria: true,
        paciente: true,
        edad: true,
        sexo: true
    })

    // Obra social
    const obraSocial = await obtenerObraSocialConPlan(internacion.INObraSocial, internacion.INPlan)
    const obraSocialProcesada = procesarObraSocialConPlan(obraSocial)

    const internacionProcesada: InternacionResponse = {
        id: internacion.INNumInt,
        numeroInternacion: internacion.INNumero!,
        habitacion: internacion.INHabitacion!,
        cama: internacion.INCama!,
        acompaniante: internacion.INAcomp?.trim() === 'S',
        aislado: internacion.INAislado?.trim() === 'S',
        fechaIngreso: internacion.INFechaIngreso,
        horaIngreso: internacion.INHoraIngreso || '',
        diagnosticoIngreso: internacion.INDiagIngreso || '',
        historiaClinica: historiaClinicaProcesada,
        obraSocial: obraSocialProcesada,
        numeroAfiliado: internacion.INNumAfiliado!
    }

    return internacionProcesada
}
