import prismadb from '@/lib/prismadb'
import { selectSeccion } from '../lib/database-select'
import { Seccion } from '../types'

export const obtenerSecciones = async (): Promise<Seccion[]> => {
    const secciones = await prismadb.sECCIONES.findMany({
        select: selectSeccion
    })
    return secciones
}
