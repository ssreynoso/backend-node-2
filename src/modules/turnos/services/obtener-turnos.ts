import prismadb from '@/lib/prismadb'
import { TurnoPrisma, TurnoResponse } from '@/modules/turnos/types'
import { TURNOS } from '@prisma/client'
import { procesarTurnos } from './procesar-turno'

type Where = { where: { [K in keyof TURNOS]?: TURNOS[K] } }

export const obtenerTurnos = async ({ where }: Where): Promise<TurnoResponse[]> => {
    const turnos: TurnoPrisma[] = await prismadb.tURNOS.findMany({
        where,
        select: {
            TurID: true,
            TurSala: true,
            Turfecha: true,
            TurEstado: true,
            TurDNIPte: true,
            TurNroIntInter: true,
            TurOsCodigo: true,
            TurOSPlan: true,
            TurMedEstudio: true,
            TurHoraIni: true,
            TurHoraFin: true,
            TurObservaciones: true,
            TurSiglasEstudio: true
        }
    })

    const turnosProcesados = await procesarTurnos(turnos)

    return turnosProcesados
}
