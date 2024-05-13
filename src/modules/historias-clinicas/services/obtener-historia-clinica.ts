import prismadb from '@/lib/prismadb'
import { HistoriaClinica } from '../types'
import { selectHistoriaClinica } from '../lib/database-select'

type Params = {
    historiaClinicaId?: HistoriaClinica['HCNumIng']
    numeroHistoria?: HistoriaClinica['HCNumero']
}

export const obtenerHistoriaClinica = async (params: Params): Promise<HistoriaClinica | null> => {
    const { historiaClinicaId, numeroHistoria } = params
    let historiaClinica: HistoriaClinica | null = null

    if (historiaClinicaId !== 0) {
        historiaClinica = await prismadb.hISTORIAS.findFirst({
            where: {
                HCNumIng: historiaClinicaId,
                HCNumero: numeroHistoria
            },
            select: selectHistoriaClinica
        })
    }

    return historiaClinica
}
