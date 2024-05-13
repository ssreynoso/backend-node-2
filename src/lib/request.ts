import { Request } from 'express'

type Pagination = {
    limit: number
    offset: number
}

export const getPagination = (req: Request): Pagination => {
    const limit = req.query.limit ? Number.parseInt(req.query.limit as string) : 10
    const offset = req.query.offset ? Number.parseInt(req.query.offset as string) : 10
    return { limit, offset }
}

export const getRequestQueryParameter = (req: Request, key: string): string => {
    const filter = req.query[key] as string
    return filter
}
