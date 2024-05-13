import { Internacion } from '../types'

type SelectInternacion = {
    [key in keyof Internacion]: boolean
}

export const selectInternacion: SelectInternacion = {
    INNumInt: true,
    INNumero: true,
    INHabitacion: true,
    INCama: true,
    INAcomp: true,
    INAislado: true,
    INHCNumIng: true,
    INFechaIngreso: true,
    INFechaEgreso: true,
    INProtocolo: true,
    INFecProtocolo: true,
    INFinFecProtocolo: true,
    INLugar: true,
    INObraSocial: true,
    INPlan: true,
    INNumAfiliado: true
}
