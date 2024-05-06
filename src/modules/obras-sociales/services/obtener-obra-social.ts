import prismadb from '@/lib/prismadb'
import { ObraSocial } from '../types'
import { obtenerPlan } from '@/modules/plan/services/obtener-plan'

export const obtenerObraSocial = async (
    obraSocialId: number | null,
    planId: string | null
): Promise<ObraSocial | null> => {
    let obraSocial: ObraSocial | null = null

    if (obraSocialId) {
        const OS = await prismadb.oBRASOCIAL.findUnique({
            where: { OSCodigo: obraSocialId },
            select: {
                OSCodigo: true,
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
