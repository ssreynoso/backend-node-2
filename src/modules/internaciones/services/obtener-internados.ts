import prismadb from '@/lib/prismadb'
import { Internacion, InternacionResponse } from '@/modules/internaciones/types'
import { InternacionSelect } from '../lib/database-select'

type Response = Promise<Internacion[]>
export const obtenerInternaciones = async (limit: number, offset: number): Response => {
    const internaciones: Internacion[] = await prismadb.iNTERNAD.findMany({
        take: limit,
        skip: offset,
        select: InternacionSelect,
        where: {
            INNumero: { gt: 0 }
            // INFechaEgreso:
        }
    })

    return internaciones
}
