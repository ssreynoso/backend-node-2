import { ConsoleLogger } from '@/shared/logger/console-logger'
import { Request, Response } from 'express'
import { procesarMedico } from '../services/procesar-medico'
import { obtenerMedico } from '../services/obtener-medico'

export const getMedico = async (req: Request, res: Response) => {
    const medicoId = Number.parseInt(req.params.medicoId)
    try {
        // Obtengo los medico
        const medico = await obtenerMedico(medicoId)

        // Si no existe, respondo con un error 404
        if (!medico) {
            res.status(404).json({ error: 'Medico no encontrado' })
            return
        }

        const medicoProcesado = await procesarMedico(medico)

        // Respondo con los medico
        res.status(200).json(medicoProcesado)
    } catch (error) {
        // Si hay un error, lo muestro en consola
        const logger = new ConsoleLogger()
        logger.info(`Error en GET /api/medicos/${medicoId}`, error)

        // Respondo con un error 500
        res.status(500).json({ error: (error as Error).message })
    }
}
