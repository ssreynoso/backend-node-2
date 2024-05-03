import { DiaDeQuirofano, Sala, SalaResponse } from '../types'
import { procesarDia } from './procesar-dia'

export const procesarSala = (sala: Sala): SalaResponse => {
    const diasYHorarios: DiaDeQuirofano[] = []

    diasYHorarios.push(
        // Domingo
        procesarDia({
            id: 0,
            nombre: 'Domingo',
            habilitada: sala.SaDomingo,
            horaDesde: sala.SaHoraDesde,
            horaHasta: sala.SaHoraHasta
        }),
        // Lunes
        procesarDia({
            id: 1,
            nombre: 'Lunes',
            habilitada: sala.SaLunes,
            horaDesde: sala.SaHoraDesdeLun,
            horaHasta: sala.SaHoraHastaLun
        }),
        // Martes
        procesarDia({
            id: 2,
            nombre: 'Martes',
            habilitada: sala.SaMartes,
            horaDesde: sala.SaHoraDesdeMar,
            horaHasta: sala.SaHoraHastaMar
        }),
        // Miércoles
        procesarDia({
            id: 3,
            nombre: 'Miércoles',
            habilitada: sala.SaMiercoles,
            horaDesde: sala.SaHoraDesdeMier,
            horaHasta: sala.SaHoraHastaMier
        }),
        // Jueves
        procesarDia({
            id: 4,
            nombre: 'Jueves',
            habilitada: sala.SaJueves,
            horaDesde: sala.SaHoraDesdeJue,
            horaHasta: sala.SaHoraHastaJue
        }),
        // Viernes
        procesarDia({
            id: 5,
            nombre: 'Viernes',
            habilitada: sala.SaViernes,
            horaDesde: sala.SaHoraDesdeVie,
            horaHasta: sala.SaHoraHastaVier
        }),
        // Sábado
        procesarDia({
            id: 6,
            nombre: 'Sábado',
            habilitada: sala.SaSabado,
            horaDesde: sala.SaHoraDesdeSab,
            horaHasta: sala.SaHoraHastaSab
        })
    )

    return {
        id: sala.SaCodigo,
        nombre: sala.SaNombre ? sala.SaNombre.trim() : '',
        duracionTurno: sala.SaDuraTurno,
        diasYHorarios
    }
}
