import { ConsoleLogger } from '@/shared/logger/console-logger'
import { Request, Response } from 'express'
import { obtenerInternacion } from '../services/obtener-internacion'
import { procesarInternacion } from '../services/procesar-internacion'

export const getInternacion = async (req: Request, res: Response) => {
    const numeroInternacion = Number.parseInt(req.params.numeroInternacion)
    try {
        // Obtengo la internacion
        const internacion = await obtenerInternacion(numeroInternacion)
        const internacionProcesada = internacion ? await procesarInternacion(internacion) : null

        // Respondo con las internaciones
        res.status(200).json(internacionProcesada)
    } catch (error) {
        // Si hay un error, lo muestro en consola
        const logger = new ConsoleLogger()
        logger.info(`Error en GET /api/internaciones/${numeroInternacion}`, error)

        // Respondo con un error 500
        res.status(500).json({ error: (error as Error).message })
    }
}
