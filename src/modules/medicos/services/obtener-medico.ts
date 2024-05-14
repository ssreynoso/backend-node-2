import prismadb from '@/lib/prismadb'
import { selectMedico } from '../lib/database-select'
import { Medico } from '../types'

export const obtenerMedico = async (medicoId: Medico['MECodigo']): Promise<Medico | null> => {
    const medico: Medico | null = await prismadb.mEDICOS.findFirst({
        select: selectMedico,
        where: {
            MECodigo: medicoId
        }
    })

    return medico
}
