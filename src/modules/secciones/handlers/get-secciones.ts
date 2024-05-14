import { ConsoleLogger } from '@/shared/logger/console-logger'
import { Request, Response } from 'express'
import { obtenerSecciones } from '../services/obtener-secciones'
import { procesarSecciones } from '../services/procesar-secciones'

export const getSecciones = async (req: Request, res: Response) => {
    try {
        // Obtengo las secciones
        const secciones = await obtenerSecciones()
        const seccionesProcesadas = procesarSecciones(secciones)

        // Respondo con las secciones
        res.status(200).json(seccionesProcesadas)
    } catch (error) {
        // Si hay un error, lo muestro en consola
        const logger = new ConsoleLogger()
        logger.info('Error en GET /api/secciones', error)

        // Respondo con un error 500
        res.status(500).json({ error: (error as Error).message })
    }
}
