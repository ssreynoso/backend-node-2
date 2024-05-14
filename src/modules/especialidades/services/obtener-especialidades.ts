import prismadb from '@/lib/prismadb'
import { Especialidad } from '../types'
import { selectEspecialidad } from '../lib/database-select'

export const obtenerEspecialidades = async (): Promise<Especialidad[]> => {
    const especialidades = await prismadb.eSPECIALIDADES.findMany({
        select: selectEspecialidad
    })

    return especialidades
}
