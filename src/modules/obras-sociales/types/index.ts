import { Plan, PlanResponse } from '@/modules/plan/types'
import { OBRASOCIAL } from '@prisma/client'

export type ObraSocial = Pick<OBRASOCIAL, 'OSCodigo' | 'OSRazonSocial'>
export type ObraSocialConPlan = ObraSocial & { plan: Plan }

export interface ObraSocialResponse {
    id: number
    razonSocial: string
}
export interface ObraSocialConPlanResponse extends ObraSocialResponse {
    plan: PlanResponse | null
}
