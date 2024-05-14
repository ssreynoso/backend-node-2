import prismadb from '@/lib/prismadb'
import { ObraSocial } from '../types'
import { selectObraSocial } from '../lib/database-select'

export const obtenerObrasSociales = async (): Promise<ObraSocial[]> => {
    const obraSocial: ObraSocial[] = await prismadb.oBRASOCIAL.findMany({
        select: selectObraSocial
    })

    return obraSocial
}
