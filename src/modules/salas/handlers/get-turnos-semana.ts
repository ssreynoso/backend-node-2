import { Request, Response } from 'express'
import { addDays, format } from 'date-fns'
import { obtenerTurnos } from '@/modules/turnos/services/obtener-turnos'
import { ConsoleLogger } from '@/shared/logger/console-logger'
import { TurnoResponse } from '@/modules/turnos/types'

export const getTurnosSemana = async (req: Request, res: Response) => {
    const defaultDate = format(new Date(), 'yyyy-MM-dd')
    const salaId = Number.parseInt(req.params.salaId)
    const baseDate = (req.query.date as string) || defaultDate

    try {
        // Obtengo los turnos de la semana
        const turnos: TurnoResponse[] = []
        for (let i = -3; i <= 3; i++) {
            const currentDate = addDays(baseDate, i)
            const turnosDia = await obtenerTurnos({
                where: {
                    TurSala: salaId,
                    Turfecha: currentDate
                }
            })

            turnos.push(...turnosDia)
        }

        res.status(200).json({ turnos })
    } catch (error) {
        // Si hay un error, lo muestro en consola
        const logger = new ConsoleLogger()
        logger.info(`Error en GET /api/salas/${salaId}/turnos/semana`, error)

        // Respondo con un error 500
        res.status(500).json({ error: (error as Error).message })
    }
}
