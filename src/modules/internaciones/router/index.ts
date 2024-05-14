import express from 'express'
import { getInternaciones } from '../handlers/get-internaciones'
import { getInternacionesFiltradas } from '../handlers/get-internaciones-filtradas'
import { getInternacion } from '../handlers/get-internacion'

const router = express.Router()

// /api/internaciones
router.get('/vigentes', getInternaciones)

// /api/internaciones/vigentes/filter
router.get('/vigentes/filtrar', getInternacionesFiltradas)

// /api/internaciones/historia-clinica/:historiaClinica
router.get('/:numeroInternacion', getInternacion)

export default router
