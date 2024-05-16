import { ConsoleLogger } from '@/shared/logger/console-logger'
import { Request, Response } from 'express'
import { obtenerSeccion } from '../services/obtener-seccion'
import { procesarSeccion } from '../services/procesar-seccion'

export const getSeccion = async (req: Request, res: Response) => {
    const seccionId = Number.parseInt(req.params.seccionId)
    try {
        // Obtengo la seccion
        const seccion = await obtenerSeccion(seccionId)
        const seccionProcesada = seccion ? procesarSeccion(seccion) : null

        // Respondo con la seccion
        res.status(200).json(seccionProcesada)
    } catch (error) {
        // Si hay un error, lo muestro en consola
        const logger = new ConsoleLogger()
        logger.info(`Error en GET /api/secciones/${seccionId}`, error)

        // Respondo con un error 500
        res.status(500).json({ error: (error as Error).message })
    }
}
