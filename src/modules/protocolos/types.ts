import { PROTOCOLOSQUIRO } from '@prisma/client'

export type ProtocoloQuirofano = Pick<
    PROTOCOLOSQUIRO,
    | 'PRCodigo'
    | 'PRNombre'
    | 'PREstado'
    | 'PRDiasProcAnterior'
    | 'PRSiglaServicio'
    | 'PRSeCodigo'
    | 'PRSiglas'
    | 'PRNombreLargo'
    | 'PRDuracion'
>

export interface ProtocoloQuirofanoResponse {
    codigo: ProtocoloQuirofano['PRCodigo']
    nombre: ProtocoloQuirofano['PRNombre']
    estado: ProtocoloQuirofano['PREstado']
    diasProcAnterior: ProtocoloQuirofano['PRDiasProcAnterior']
    siglaServicio: ProtocoloQuirofano['PRSiglaServicio']
    servicioCodigo: ProtocoloQuirofano['PRSeCodigo']
    siglas: ProtocoloQuirofano['PRSiglas']
    nombreLargo: ProtocoloQuirofano['PRNombreLargo']
    duracion: ProtocoloQuirofano['PRDuracion']
}
