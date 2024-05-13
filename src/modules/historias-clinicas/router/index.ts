import express from 'express'
import { getHistoriasClinicas } from '../handlers/get-historias-clinicas'
import { getHistoriasClinicasFiltradas } from '../handlers/get-historias-clinicas-filtradas'
import { getHistoriaClinica } from '../handlers/get-historia-clinica'

const router = express.Router()

// /api/historias-clinicas
router.get('/', getHistoriasClinicas)

// /api/historias-clinicas/filter
router.get('/filtrar', getHistoriasClinicasFiltradas)

// /api/historias-clinicas/:id
router.get('/:id', getHistoriaClinica)

export default router
