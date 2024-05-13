import express from 'express'
import { getInternaciones } from '../handlers/get-internaciones'
import { getInternacionesFiltradas } from '../handlers/get-internaciones-filtradas'

const router = express.Router()

// /api/internaciones
router.get('/vigentes', getInternaciones)

// /api/internaciones/vigentes/filter
router.get('/vigentes/filtrar', getInternacionesFiltradas)

export default router
