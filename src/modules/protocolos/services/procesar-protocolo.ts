import { ProtocoloQuirofano, ProtocoloQuirofanoResponse } from '../types'

export const procesarProtocolo = (protocolo: ProtocoloQuirofano): ProtocoloQuirofanoResponse => {
    return {
        codigo: protocolo.PRCodigo,
        nombre: protocolo.PRNombre,
        estado: protocolo.PREstado,
        diasProcAnterior: protocolo.PRDiasProcAnterior,
        siglaServicio: protocolo.PRSiglaServicio,
        servicioCodigo: protocolo.PRSeCodigo,
        siglas: protocolo.PRSiglas,
        nombreLargo: protocolo.PRNombreLargo,
        duracion: protocolo.PRDuracion
    }
}
