import { ConsoleLogger } from '@/shared/logger/console-logger'
import { Request, Response } from 'express'
import { obtenerObrasSociales } from '../services/obtener-obras-sociales'
import { procesarObrasSociales } from '../services/procesar-obras-sociales'

export const getObrasSociales = async (req: Request, res: Response) => {
    try {
        // Obtengo las obras sociales
        const obrasSociales = await obtenerObrasSociales()
        const obrasSocialesProcesadas = procesarObrasSociales(obrasSociales)

        // Respondo con las obras sociales procesadas
        res.status(200).json(obrasSocialesProcesadas)
    } catch (error) {
        // Si hay un error, lo muestro en consola
        const logger = new ConsoleLogger()
        logger.info(`Error en GET /api/obras-sociales/`, error)

        // Respondo con un error 500
        res.status(500).json({ error: (error as Error).message })
    }
}
