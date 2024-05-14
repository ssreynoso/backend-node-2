import { Seccion, SeccionResponse } from '../types'

export const procesarSeccion = (seccion: Seccion): SeccionResponse => {
    const seccionProcesada = {
        codigo: seccion.SeCodigo,
        descripcion: seccion.SeDescripcion ? seccion.SeDescripcion.trim() : ''
    }
    return seccionProcesada
}
