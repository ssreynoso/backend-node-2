import { ConsoleLogger } from '@/shared/logger/console-logger'
import { obtenerSala } from '../services/obtener-sala'
import { Request, Response } from 'express'

export const getSalaById = async (req: Request, res: Response) => {
    const salaId = Number.parseInt(req.params.salaId)
    try {
        // Obtengo la sala
        const sala = await obtenerSala(salaId)

        // Respondo con la sala
        res.status(200).json({ sala })
    } catch (error) {
        // Si hay un error, lo muestro en consola
        const logger = new ConsoleLogger()
        logger.info(`Error en GET /api/salas/${salaId}`, error)

        // Respondo con un error 500
        res.status(500).json({ error: (error as Error).message })
    }
}
