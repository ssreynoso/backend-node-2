import cors from 'cors'
import http, { Server as HttpServer } from 'node:http'
import express, { Application, Request, Response } from 'express'

import { routerApi } from '@/router/api'

import { config } from '@/core/config/config'

import { ConsoleLogger } from '@/shared/logger/console-logger'
import { AddressInfo } from 'node:net'

export class Server {
    private app: Application
    private httpServer: HttpServer
    private logger: ConsoleLogger

    constructor() {
        this.app = express()
        this.httpServer = http.createServer(this.app)

        // Logger
        this.logger = new ConsoleLogger()

        this.middlewares()
        this.routes()
        this.notFoundMiddleware()
    }

    private middlewares() {
        // CORS
        // this.app.use(cors({ origin: ['https://appv2.flexichatbot.com'] }))
        this.app.use(cors())
        this.app.use(express.json())
    }

    private routes() {
        routerApi(this.app)
    }

    private notFoundMiddleware() {
        this.app.use((req: Request, res: Response) => {
            res.status(404).json({ error: 'not found' })
        })
    }

    async start(): Promise<void> {
        return new Promise(resolve => {
            this.httpServer = this.app.listen(config.server.port, () => {
                const { port } = this.httpServer?.address() as AddressInfo
                this.logger.info(`App is ready and listening on port ${port} 🚀`)
                resolve()
            })
        })
    }

    async stop(): Promise<void> {
        return new Promise((resolve, reject) => {
            if (this.httpServer) {
                this.httpServer.close(error => {
                    if (error) {
                        return reject(error)
                    }
                    return resolve()
                })
            }

            return resolve()
        })
    }

    getHttpServer(): http.Server | undefined {
        return this.httpServer
    }
}
