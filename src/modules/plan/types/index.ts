import { CONTRATO } from '@prisma/client'

export type Plan = Pick<CONTRATO, 'CoPlan' | 'CoNomPlan'>

export interface PlanResponse {
    id: string
    nombre: string
}
