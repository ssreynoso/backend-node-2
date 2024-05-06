import prismadb from '@/lib/prismadb'
import { Plan } from '../types'

export const obtenerPlan = async (obraSocialId: number, planId: string | null): Promise<Plan | null> => {
    let plan: Plan | null = null
    if (planId) {
        const temp = await prismadb.cONTRATO.findMany({
            where: {
                OSCodigo: obraSocialId,
                CoPlan: planId
            },
            select: {
                CoPlan: true,
                CoNomPlan: true
            }
        })
        plan = temp[0]
    }

    return plan
}
