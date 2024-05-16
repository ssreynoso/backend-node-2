import { ProtocoloQuirofano, ProtocoloQuirofanoResponse } from '../types'
import { procesarProtocolo } from './procesar-protocolo'

export const procesarProtocolos = (protocolos: ProtocoloQuirofano[]): ProtocoloQuirofanoResponse[] => {
    const protocolosProcesados = protocolos.map(protocolo => procesarProtocolo(protocolo))
    return protocolosProcesados
}
