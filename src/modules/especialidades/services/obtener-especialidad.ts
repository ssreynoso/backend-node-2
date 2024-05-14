import prismadb from '@/lib/prismadb'
import { Especialidad } from '../types'
import { selectEspecialidad } from '../lib/database-select'

export const obtenerEspecialidad = async (codigo: Especialidad['ESCodigo']): Promise<Especialidad | null> => {
    const especialidad = await prismadb.eSPECIALIDADES.findUnique({
        where: {
            ESCodigo: codigo
        },
        select: selectEspecialidad
    })

    return especialidad
}
