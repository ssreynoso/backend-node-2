import prismadb from '@/lib/prismadb'
import { Internacion, InternacionResponse } from '@/modules/internaciones/types'
import { InternacionSelect } from '../lib/database-select'
import { procesarInternacion } from './procesar-internacion'
import { NULL_DATE } from '@/types/utils'

type Response = Promise<InternacionResponse[]>

export const obtenerInternacionesVigentes = async (limit: number, offset: number): Response => {
    const internaciones: Internacion[] = await prismadb.iNTERNAD.findMany({
        take: limit,
        skip: offset,
        select: InternacionSelect,
        where: {
            INNumero: { gt: 0 },
            INFechaEgreso: NULL_DATE
        }
    })

    const internacionesProcesadas = await Promise.all(
        internaciones.map(internacion => procesarInternacion(internacion))
    )

    return internacionesProcesadas
}
