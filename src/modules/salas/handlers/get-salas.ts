import { ConsoleLogger } from '@/shared/logger/console-logger'
import { obtenerSalas } from '../services/obtener-salas'
import { Request, Response } from 'express'

export const getSalas = async (req: Request, res: Response) => {
    try {
        // Obtengo las salas
        const salas = await obtenerSalas()

        // Respondo con las salas
        res.status(200).json({ salas })
    } catch (error) {
        // Si hay un error, lo muestro en consola
        const logger = new ConsoleLogger()
        logger.info('Error en GET /api/salas', error)

        // Respondo con un error 500
        res.status(500).json({ error: (error as Error).message })
    }
}
