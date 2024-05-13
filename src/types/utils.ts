export type NavBarOption = { label: string; value: string }

export type Prettify<T> = {
    [K in keyof T]: T[K]
}

export type CSSStyle = { [key: string]: string }

export interface IError extends Error {
    name: string
    message: string
}

export type Response<T> = { data: T; error: null } | { data: null; error: IError }

export const NULL_DATE_STRING = '1753-01-01'
export const NULL_DATE = new Date(NULL_DATE_STRING)
