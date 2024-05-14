import prismadb from '@/lib/prismadb'
import { ObraSocialConPlan } from '../types'
import { obtenerPlan } from '@/modules/plan/services/obtener-plan'
import { selectObraSocial } from '../lib/database-select'

export const obtenerObraSocialConPlan = async (
    obraSocialId: number | null,
    planId: string | null
): Promise<ObraSocialConPlan | null> => {
    let obraSocial: ObraSocialConPlan | null = null

    if (obraSocialId) {
        const OS = await prismadb.oBRASOCIAL.findUnique({
            where: { OSCodigo: obraSocialId },
            select: selectObraSocial
        })

        if (!OS) return null

        const plan = await obtenerPlan(obraSocialId, planId)

        if (!plan) return null

        obraSocial = { ...OS, plan }
    }

    return obraSocial
}
