import express from 'express'
import { getSecciones } from '../handlers/get-secciones'
import { getSeccion } from '../handlers/get-seccion'

const router = express.Router()

// /api/secciones
router.get('/', getSecciones)

// api/secciones/:seccionId
router.get('/:seccionId', getSeccion)

export default router
