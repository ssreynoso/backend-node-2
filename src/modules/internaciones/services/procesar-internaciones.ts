import { Internacion, InternacionResponse } from '../types'
import { procesarInternacion } from './procesar-internacion'

export const procesarInternaciones = async (internaciones: Internacion[]): Promise<InternacionResponse[]> => {
    const internacionesProcesadas = await Promise.all(
        internaciones.map(internacion => procesarInternacion(internacion))
    )

    return internacionesProcesadas
}
