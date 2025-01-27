import { getSalaById } from '@/modules/salas/handlers/get-sala-by-id'
import { getSalas } from '@/modules/salas/handlers/get-salas'
import { getTurnosSala } from '@/modules/salas/handlers/get-turnos-sala'
import express from 'express'
import { getTurnosSemana } from '../handlers/get-turnos-semana'

const router = express.Router()

// /api/salas
router.get('/', getSalas)

// /api/salas/:salaId
router.get('/:salaId', getSalaById)

// /api/salas/:salaId/turnos
router.get('/:salaId/turnos', getTurnosSala)

// /api/salas/:salaId/turnos/semana
router.get('/:salaId/turnos/semana', getTurnosSemana)

export default router
