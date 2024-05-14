import { HistoriaClinicaResponse } from '@/modules/historias-clinicas/types'
import { ObraSocialResponse } from '@/modules/obras-sociales/types'
import { INTERNAD } from '@prisma/client'

export type Internacion = Pick<
    INTERNAD,
    | 'INNumInt'
    | 'INNumero'
    | 'INHabitacion'
    | 'INCama'
    | 'INAcomp'
    | 'INAislado'
    | 'INHCNumIng'
    | 'INFechaIngreso'
    | 'INHoraIngreso'
    | 'INDiagIngreso'
    | 'INFechaEgreso'
    | 'INProtocolo'
    | 'INFecProtocolo'
    | 'INFinFecProtocolo'
    | 'INLugar'
    | 'INObraSocial'
    | 'INPlan'
    | 'INNumAfiliado'
>

export interface InternacionResponse {
    id: number
    numeroInternacion: number
    habitacion: number
    cama: number
    acompaniante: boolean
    aislado: boolean
    fechaIngreso: Date | null
    horaIngreso: string
    diagnosticoIngreso: string
    historiaClinica: HistoriaClinicaResponse
    obraSocial: ObraSocialResponse | null
    numeroAfiliado: string
}
