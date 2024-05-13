import prismadb from '@/lib/prismadb'
import { Internacion } from '@/modules/internaciones/types'
import { selectInternacion } from '../lib/database-select'

export const obtenerInternacion = async (interacionId: number | null): Promise<Internacion | null> => {
    let internacion: Internacion | null = null
    if (interacionId) {
        internacion = await prismadb.iNTERNAD.findUnique({
            where: { INNumInt: interacionId },
            select: selectInternacion
        })
    }
    return internacion
}
