import prismadb from '@/lib/prismadb'
import { selectMedico } from '../lib/database-select'
import { Medico } from '../types'

export const obtenerMedicos = async (limit: number, offset: number): Promise<Medico[]> => {
    const medicos: Medico[] = await prismadb.mEDICOS.findMany({
        take: limit,
        skip: offset,
        select: selectMedico,
        where: {
            MECodigo: { not: 0 }
        }
    })

    return medicos
}
