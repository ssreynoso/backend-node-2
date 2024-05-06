import { Plan, PlanResponse } from '@/modules/plan/types'
import { OBRASOCIAL } from '@prisma/client'

export type ObraSocial = Pick<OBRASOCIAL, 'OSCodigo' | 'OSRazonSocial'> & { plan: Plan }

export interface ObraSocialResponse {
    id: number
    razonSocial: string
    plan: PlanResponse | null
}
