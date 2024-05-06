import { Plan, PlanResponse } from '../types'

export const procesarPlan = (plan: Plan | null): PlanResponse | null => {
    if (!plan) return null

    return {
        id: plan.CoPlan.trim(),
        nombre: plan.CoNomPlan?.trim() || ''
    }
}
