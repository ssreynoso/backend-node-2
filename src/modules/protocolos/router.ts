import express from 'express'
import { getProtocolos } from './handlers/get-protocolos'
import { getProtocolo } from './handlers/get-protocolo'

const router = express.Router()

// GET /api/protocolos
router.get('/', getProtocolos)

// GET /api/protocolos/:protocoloId
router.get('/:protocoloId', getProtocolo)

export default router
