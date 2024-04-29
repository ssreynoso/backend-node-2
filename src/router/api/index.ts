import express, { Application } from 'express'
import generalRouter from '@/router/api/general.router'
import salasRouter from '@/modules/salas/router'
import turnosRouter from '@/modules/turnos/router'

export const routerApi = function (app: Application) {
    const router_api = express.Router()

    app.use('/', generalRouter)
    app.use('/api', router_api)

    router_api.use('/salas', salasRouter)
    router_api.use('/turnos', turnosRouter)

    // router_api_v1.use('/<entity>', entity_router);
}
