import { procesarHistoriaClinica } from '@/modules/historias-clinicas/services/procesar-historia-clinica'
import { Internacion, InternacionResponse } from '../types'
import { obtenerHistoriaClinica } from '@/modules/historias-clinicas/services/obtener-historia-clinica'
import { obtenerObraSocial } from '@/modules/obras-sociales/services/obtener-obra-social'
import { procesarObraSocial } from '@/modules/obras-sociales/services/procesar-obra-social'

export const procesarInternacion = async (internacion: Internacion): Promise<InternacionResponse> => {
    // Historia clínica
    const historiaClinica = await obtenerHistoriaClinica(internacion.INHCNumIng)
    const historiaClinicaProcesada = procesarHistoriaClinica(historiaClinica)

    // Obra social
    const obraSocial = await obtenerObraSocial(internacion.INObraSocial, internacion.INPlan)
    const obraSocialProcesada = procesarObraSocial(obraSocial)

    const internacionProcesada: InternacionResponse = {
        id: internacion.INNumInt,
        numeroInternacion: internacion.INNumero!,
        habitacion: internacion.INHabitacion!,
        cama: internacion.INCama!,
        acompaniante: internacion.INAcomp?.trim() === 'S',
        aislado: internacion.INAislado?.trim() === 'S',
        fechaIngreso: internacion.INFechaIngreso,
        historiaClinica: historiaClinicaProcesada,
        obraSocial: obraSocialProcesada,
        numeroAfiliado: internacion.INNumAfiliado!
    }

    return internacionProcesada
}
