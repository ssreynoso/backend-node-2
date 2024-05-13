import { ConsoleLogger } from '@/shared/logger/console-logger'
import { Request, Response } from 'express'
import { obtenerHistoriaClinica } from '../services/obtener-historia-clinica'
import { procesarHistoriaClinica } from '../services/procesar-historia-clinica'

export const getHistoriaClinica = async (req: Request, res: Response) => {
    const numeroHistoria = Number.parseInt(req.params.id)

    try {
        // Obtengo las internaciones
        const historiaClinica = await obtenerHistoriaClinica({ numeroHistoria: numeroHistoria })
        const historiaClinicaProcesada = await procesarHistoriaClinica(historiaClinica)

        // Respondo con las internaciones
        res.status(200).json(historiaClinicaProcesada)
    } catch (error) {
        // Si hay un error, lo muestro en consola
        const logger = new ConsoleLogger()
        logger.info(`Error en GET /api/historias-clinicas/${numeroHistoria}`, error)

        // Respondo con un error 500
        res.status(500).json({ error: (error as Error).message })
    }
}
