import { ConsoleLogger } from '@/shared/logger/console-logger'
import { Request, Response } from 'express'
import { obtenerMedicos } from '../services/obtener-medicos'
import { procesarMedicos } from '../services/procesar-medicos'
import { getPagination } from '@/lib/request'

export const getMedicos = async (req: Request, res: Response) => {
    try {
        const { limit, offset } = getPagination(req)

        // Obtengo los medicos
        const medicos = await obtenerMedicos(limit, offset)
        const medicosProcesados = await procesarMedicos(medicos)

        // Respondo con los medicos
        res.status(200).json(medicosProcesados)
    } catch (error) {
        // Si hay un error, lo muestro en consola
        const logger = new ConsoleLogger()
        logger.info(`Error en GET /api/medicos`, error)

        // Respondo con un error 500
        res.status(500).json({ error: (error as Error).message })
    }
}
