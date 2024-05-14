import { ObraSocialConPlan, ObraSocialConPlanResponse } from '../types'
import { procesarPlan } from '@/modules/plan/services/procesar-plan'

export const procesarObraSocialConPlan = (obraSocial: ObraSocialConPlan | null): ObraSocialConPlanResponse | null => {
    if (!obraSocial) return null

    const planProcesado = procesarPlan(obraSocial.plan)

    return {
        id: obraSocial.OSCodigo,
        razonSocial: obraSocial.OSRazonSocial?.trim() || '',
        plan: planProcesado
    }
}
