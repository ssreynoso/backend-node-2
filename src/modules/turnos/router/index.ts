import express from 'express'
import { getTurnos } from '../handlers/get-turnos'

const router = express.Router()

router.get('/', getTurnos)

export default router
