import { Request, Response } from 'express'
import { format } from 'date-fns'
import { obtenerTurnos } from '@/modules/turnos/services/obtener-turnos'
import { ConsoleLogger } from '@/shared/logger/console-logger'

export const getTurnos = async (req: Request, res: Response) => {
    const defaultDate = format(new Date(), 'yyyy-MM-dd')
    const date = new Date((req.query.date as string) || defaultDate)
    const logger = new ConsoleLogger()

    try {
        const turnos = await obtenerTurnos({
            where: { Turfecha: date }
        })
        res.status(200).json({ turnos })
    } catch (error) {
        // Si hay un error, lo muestro en consola
        logger.info('Error en GET /api/turnos', error)

        // Devuelvo un error 500 con el mensaje del error
        res.status(500).json({ error: (error as Error).message })
    }
}
