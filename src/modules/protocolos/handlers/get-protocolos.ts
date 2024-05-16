import { ConsoleLogger } from '@/shared/logger/console-logger'
import { Request, Response } from 'express'
import { obtenerProtocolos } from '../services/obtener-protocolos'
import { procesarProtocolos } from '../services/procesar-protocolos'

export const getProtocolos = async (req: Request, res: Response) => {
    try {
        // Obtengo los protocolos
        const protocolos = await obtenerProtocolos()
        const protocolosProcesados = procesarProtocolos(protocolos)

        // Respondo con los protocolos
        res.status(200).json(protocolosProcesados)
    } catch (error) {
        // Si hay un error, lo muestro en consola
        const logger = new ConsoleLogger()
        logger.info(`Error en GET /api/protocolos`, error)

        // Respondo con un error 500
        res.status(500).json({ error: (error as Error).message })
    }
}
