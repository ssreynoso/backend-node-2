import prismadb from '@/lib/prismadb'
import { ObraSocial, Plan } from '@/modules/turnos/types'

const obtenerPlan = async (obraSocialId: number, planId: string | null): Promise<Plan | null> => {
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

export const obtenerObraSocial = async (
    obraSocialId: number | null,
    planId: string | null
): Promise<ObraSocial | null> => {
    let obraSocial: ObraSocial | null = null

    if (obraSocialId) {
        const OS = await prismadb.oBRASOCIAL.findUnique({
            where: { OSCodigo: obraSocialId },
            select: {
                OSRazonSocial: true
            }
        })

        if (!OS) return null

        const plan = await obtenerPlan(obraSocialId, planId)

        if (!plan) return null

        obraSocial = { ...OS, plan }
    }

    return obraSocial
}
