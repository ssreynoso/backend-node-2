import { Especialidad, EspecialidadResponse } from '../types'

export const procesarEspecialidad = (especialidad: Especialidad): EspecialidadResponse => {
    return {
        codigo: especialidad.ESCodigo,
        descripcion: especialidad.ESDescripcion?.trim() || ''
    }
}
