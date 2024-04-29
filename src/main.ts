import '@/core/config/load-env-vars'

import { Server } from './server'

const server = new Server()

server.start().catch(handleError)

function handleError(error: unknown) {
    // eslint-disable-next-line no-console
    console.error(error)

    // eslint-disable-next-line unicorn/no-process-exit
    process.exit(1)
}

process.on('uncaughtException', handleError)
