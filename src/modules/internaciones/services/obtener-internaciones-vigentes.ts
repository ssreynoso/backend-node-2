import prismadb from '@/lib/prismadb'
import { Internacion } from '@/modules/internaciones/types'
import { selectInternacion } from '../lib/database-select'
import { NULL_DATE } from '@/types/utils'

type Response = Promise<Internacion[]>

export const obtenerInternacionesVigentes = async (limit: number, offset: number): Response => {
    const internaciones: Internacion[] = await prismadb.iNTERNAD.findMany({
        take: limit,
        skip: offset,
        select: selectInternacion,
        where: {
            INNumero: { gt: 0 },
            INFechaEgreso: NULL_DATE
        }
    })

    return internaciones
}
