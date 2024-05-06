import express from 'express'
import { getInternaciones } from '../handlers/get-internaciones'

const router = express.Router()

// /api/internaciones
router.get('/vigentes', getInternaciones)

export default router
