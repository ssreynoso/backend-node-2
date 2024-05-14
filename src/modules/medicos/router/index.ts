import express from 'express'
import { getMedicos } from '../handlers/get-medicos'
import { getMedico } from '../handlers/get-medico'

const router = express.Router()

// /api/medicos
router.get('/', getMedicos)

// /api/medicos/:medicoId
router.get('/:medicoId', getMedico)

export default router
