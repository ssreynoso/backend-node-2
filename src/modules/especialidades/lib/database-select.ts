import { Especialidad } from '../types'

type SelectEspecialidad = {
    [key in keyof Especialidad]: boolean
}

export const selectEspecialidad: SelectEspecialidad = {
    ESCodigo: true,
    ESDescripcion: true
}
