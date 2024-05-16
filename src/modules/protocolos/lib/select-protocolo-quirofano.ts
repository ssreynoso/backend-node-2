import { ProtocoloQuirofano } from '../types'

type SelectProtocoloQuirofano = {
    [key in keyof ProtocoloQuirofano]: boolean
}

export const selectProtocoloQuirofano: SelectProtocoloQuirofano = {
    PRCodigo: true,
    PRNombre: true,
    PREstado: true,
    PRDiasProcAnterior: true,
    PRSiglaServicio: true,
    PRSeCodigo: true,
    PRSiglas: true,
    PRNombreLargo: true,
    PRDuracion: true
}
