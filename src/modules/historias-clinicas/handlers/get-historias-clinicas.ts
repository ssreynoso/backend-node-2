import { ConsoleLogger } from '@/shared/logger/console-logger'
import { Request, Response } from 'express'
import { obtenerHistoriasClinicas } from '../services/obtener-historias-clinicas'
import { getPagination } from '@/lib/request'

export const getHistoriasClinicas = async (req: Request, res: Response) => {
    try {
        const { limit, offset } = getPagination(req)

        // Obtengo las internaciones
        const historiasClinicas = await obtenerHistoriasClinicas(limit, offset)

        // Respondo con las internaciones
        res.status(200).json(historiasClinicas)
    } catch (error) {
        // Si hay un error, lo muestro en consola
        const logger = new ConsoleLogger()
        logger.info('Error en GET /api/historias-clinicas', error)

        // Respondo con un error 500
        res.status(500).json({ error: (error as Error).message })
    }
}
