import express from 'express'
import { getSecciones } from '../handlers/get-secciones'

const router = express.Router()

// /api/secciones
router.get('/', getSecciones)

export default router
