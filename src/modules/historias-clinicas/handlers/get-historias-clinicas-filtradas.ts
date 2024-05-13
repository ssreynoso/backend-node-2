import { getPagination, getRequestQueryParameter } from '@/lib/request'
import { ConsoleLogger } from '@/shared/logger/console-logger'
import { Request, Response } from 'express'
import { filtrarHistoriasClinicas } from '../services/filtrar-historias-clinicas'

export const getHistoriasClinicasFiltradas = async (req: Request, res: Response) => {
    try {
        const { limit, offset } = getPagination(req)
        const filter = getRequestQueryParameter(req, 'filter')

        // Obtengo las internaciones
        const historiasClinicas = await filtrarHistoriasClinicas(filter, limit, offset)

        // Respondo con las internaciones
        res.status(200).json(historiasClinicas)
    } catch (error) {
        // Si hay un error, lo muestro en consola
        const logger = new ConsoleLogger()
        logger.info('Error en GET /api/internaciones', error)

        // Respondo con un error 500
        res.status(500).json({ error: (error as Error).message })
    }
}
