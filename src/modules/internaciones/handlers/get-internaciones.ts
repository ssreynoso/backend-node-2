import { ConsoleLogger } from '@/shared/logger/console-logger'
import { Request, Response } from 'express'
import { obtenerInternacionesVigentes } from '../services/obtener-internaciones-vigentes'
import { getPagination } from '@/lib/request'
import { procesarInternaciones } from '../services/procesar-internaciones'

export const getInternaciones = async (req: Request, res: Response) => {
    try {
        const { limit, offset } = getPagination(req)

        // Obtengo las internaciones
        const internacionesVigentes = await obtenerInternacionesVigentes(limit, offset)
        const internacionesProcesadas = await procesarInternaciones(internacionesVigentes)

        // Respondo con las internaciones
        res.status(200).json(internacionesProcesadas)
    } catch (error) {
        // Si hay un error, lo muestro en consola
        const logger = new ConsoleLogger()
        logger.info('Error en GET /api/internaciones', error)

        // Respondo con un error 500
        res.status(500).json({ error: (error as Error).message })
    }
}
