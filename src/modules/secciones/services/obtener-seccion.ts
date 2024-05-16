import prismadb from '@/lib/prismadb'
import { selectSeccion } from '../lib/database-select'
import { Seccion } from '../types'

export const obtenerSeccion = async (seccionId: Seccion['SeCodigo']): Promise<Seccion | null> => {
    const seccion = await prismadb.sECCIONES.findFirst({
        select: selectSeccion,
        where: { SeCodigo: seccionId }
    })
    return seccion
}
