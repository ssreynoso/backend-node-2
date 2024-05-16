import prismadb from '@/lib/prismadb'
import { ProtocoloQuirofano } from '../types'

type Response = Promise<ProtocoloQuirofano | null>

export const obtenerProtocolo = (protocoloCodigo: ProtocoloQuirofano['PRCodigo']): Response => {
    const protocolo = prismadb.pROTOCOLOSQUIRO.findUnique({
        where: { PRCodigo: protocoloCodigo }
    })

    return protocolo
}
