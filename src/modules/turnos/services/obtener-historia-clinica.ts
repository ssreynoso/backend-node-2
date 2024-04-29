import prismadb from '@/lib/prismadb'
import { HistoriaClinica } from '@/modules/turnos/types'

export const obtenerHistoriaClinica = async (historiaClinicaId: number | null): Promise<HistoriaClinica | null> => {
    let historiaClinica: HistoriaClinica | null = null

    if (historiaClinicaId) {
        historiaClinica = await prismadb.hISTORIAS.findUnique({
            where: { HCNumIng: historiaClinicaId },
            select: {
                HCNumero: true,
                HCNombre: true,
                HCApeSol: true,
                HCFechaNacim: true,
                HCSexo: true
            }
        })
    }

    return historiaClinica
}
