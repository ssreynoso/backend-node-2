import prismadb from '@/lib/prismadb'
import { selectProtocoloQuirofano } from '../lib/select-protocolo-quirofano'
import { ProtocoloQuirofano } from '../types'

export const obtenerProtocolos = async (): Promise<ProtocoloQuirofano[]> => {
    const protocolos = prismadb.pROTOCOLOSQUIRO.findMany({
        select: selectProtocoloQuirofano
    })

    return protocolos
}
