import { Seccion } from '../types'

type SelectSeccion = {
    [key in keyof Seccion]: boolean
}

export const selectSeccion: SelectSeccion = {
    SeCodigo: true,
    SeDescripcion: true
}
