import { ObraSocial, ObraSocialResponse } from '../types'
import { procesarPlan } from '@/modules/plan/services/procesar-plan'

export const procesarObraSocial = (obraSocial: ObraSocial | null): ObraSocialResponse | null => {
    if (!obraSocial) return null

    const planProcesado = procesarPlan(obraSocial.plan)

    return {
        id: obraSocial.OSCodigo,
        razonSocial: obraSocial.OSRazonSocial?.trim() || '',
        plan: planProcesado
    }
}
