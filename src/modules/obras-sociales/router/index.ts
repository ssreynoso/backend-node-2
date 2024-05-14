import express from 'express'
import { getObrasSociales } from '../handlers/get-obras-sociales'

const router = express.Router()

// /api/obras-sociales/
router.get('/', getObrasSociales)

export default router
