import { procesarHora } from '@/core/lib/procesar-hora'
import { DiaDeQuirofano } from '../types'

type Params = {
    id: number
    nombre: string
    habilitada: string | null
    horaDesde: string | null
    horaHasta: string | null
}

export const procesarDia = ({ horaDesde, horaHasta, habilitada, id, nombre }: Params): DiaDeQuirofano => {
    const horaInicio = procesarHora(horaDesde)
    const horaFin = procesarHora(horaHasta)
    return {
        id,
        dia: nombre,
        disponible: habilitada === 'S',
        horarios: {
            horaInicio: horaInicio.hora,
            minutoInicio: horaInicio.minuto,
            horaFin: horaFin.hora,
            minutoFin: horaFin.minuto
        }
    }
}
