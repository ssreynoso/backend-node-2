import { ConsoleLogger } from '@/shared/logger/console-logger'
import { Request, Response } from 'express'
import { procesarProtocolo } from '../services/procesar-protocolo'
import { obtenerProtocolo } from '../services/obtener-protocolo'

export const getProtocolo = async (req: Request, res: Response) => {
    const protocoloId = Number.parseInt(req.params.protocoloId)
    try {
        // Obtengo el protocolo
        const protocolo = await obtenerProtocolo(protocoloId)

        // Si no existe, respondo con un error 404
        if (!protocolo) {
            res.status(404).json({ error: 'Protocolo no encontrado' })
            return
        }

        const protocoloProcesado = procesarProtocolo(protocolo)

        // Respondo con el protocolo
        res.status(200).json(protocoloProcesado)
    } catch (error) {
        // Si hay un error, lo muestro en consola
        const logger = new ConsoleLogger()
        logger.info(`Error en GET /api/protocolos/${protocoloId}`, error)

        // Respondo con un error 500
        res.status(500).json({ error: (error as Error).message })
    }
}
