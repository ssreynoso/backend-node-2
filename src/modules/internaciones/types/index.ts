import { INTERNAD } from '@prisma/client'

export type Internacion = Pick<
    INTERNAD,
    | 'INNumInt'
    | 'INNumero'
    | 'INHabitacion'
    | 'INCama'
    | 'INHCNumIng'
    | 'INFechaIngreso'
    | 'INFechaEgreso'
    | 'INProtocolo'
    | 'INFecProtocolo'
    | 'INFinFecProtocolo'
    | 'INLugar'
    | 'INObraSocial'
    | 'INNumAfiliado'
>

export interface InternacionResponse {
    id: number
}
