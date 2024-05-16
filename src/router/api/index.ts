import express, { Application } from 'express'
import generalRouter from '@/router/api/general.router'
import salasRouter from '@/modules/salas/router'
import turnosRouter from '@/modules/turnos/router'
import internacionesRouter from '@/modules/internaciones/router'
import historiasClinicasRouter from '@/modules/historias-clinicas/router'
import obrasSocialesRouter from '@/modules/obras-sociales/router'
import medicosRouter from '@/modules/medicos/router'
import seccionesRouter from '@/modules/secciones/router'
import protocolosRouter from '@/modules/protocolos/router'

export const routerApi = function (app: Application) {
    const router_api = express.Router()

    app.use('/', generalRouter)
    app.use('/api', router_api)

    router_api.use('/salas', salasRouter)
    router_api.use('/turnos', turnosRouter)
    router_api.use('/internaciones', internacionesRouter)
    router_api.use('/historias-clinicas', historiasClinicasRouter)
    router_api.use('/obras-sociales', obrasSocialesRouter)
    router_api.use('/medicos', medicosRouter)
    router_api.use('/secciones', seccionesRouter)
    router_api.use('/protocolos', protocolosRouter)

    // router_api_v1.use('/<entity>', entity_router);
}
