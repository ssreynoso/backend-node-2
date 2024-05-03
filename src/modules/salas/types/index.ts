import { SALAS } from '@prisma/client'

export type Sala = SALAS

export interface HorarioDeQuirofano {
    horaInicio: number | null
    minutoInicio: number | null
    horaFin: number | null
    minutoFin: number | null
}

export interface DiaDeQuirofano {
    disponible: boolean
    dia: string
    id: number
    horarios: HorarioDeQuirofano
}

export interface SalaResponse {
    id: number
    nombre: string
    duracionTurno: number | null
    diasYHorarios: DiaDeQuirofano[]
}
