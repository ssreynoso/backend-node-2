import { Request, Response } from 'express'
import { format } from 'date-fns'
import { obtenerTurnos } from '@/modules/turnos/services/obtener-turnos'
import { ConsoleLogger } from '@/shared/logger/console-logger'

export const getTurnosSala = async (req: Request, res: Response) => {
    const defaultDate = format(new Date(), 'yyyy-MM-dd')
    const date = (req.query.date as string) || defaultDate
    const salaId = Number.parseInt(req.params.salaId)
    try {
        // Obtengo los turnos de la sala
        const turnos = await obtenerTurnos({
            where: {
                TurSala: salaId,
                Turfecha: new Date(date)
            }
        })

        res.status(200).json({ turnos })
    } catch (error) {
        // Si hay un error, lo muestro en consola
        const logger = new ConsoleLogger()
        logger.info(`Error en GET /api/salas/${salaId}/turnos`, error)

        // Respondo con un error 500
        res.status(500).json({ error: (error as Error).message })
    }
}
