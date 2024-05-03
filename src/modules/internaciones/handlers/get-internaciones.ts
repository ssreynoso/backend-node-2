import { ConsoleLogger } from '@/shared/logger/console-logger'
import { Request, Response } from 'express'
import { obtenerInternaciones } from '../services/obtener-internados'

export const getInternaciones = async (req: Request, res: Response) => {
    try {
        const limit = req.query.limit ? Number.parseInt(req.query.limit as string) : 10
        const offset = req.query.offset ? Number.parseInt(req.query.offset as string) : 10

        // Obtengo las internaciones
        const internaciones = await obtenerInternaciones(limit, offset)

        // Respondo con las internaciones
        res.status(200).json({ internaciones })
    } catch (error) {
        // Si hay un error, lo muestro en consola
        const logger = new ConsoleLogger()
        logger.info('Error en GET /api/internaciones', error)

        // Respondo con un error 500
        res.status(500).json({ error: (error as Error).message })
    }
}
