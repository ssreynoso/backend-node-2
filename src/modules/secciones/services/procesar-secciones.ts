import { Seccion, SeccionResponse } from '../types'
import { procesarSeccion } from './procesar-seccion'

export const procesarSecciones = (secciones: Seccion[]): SeccionResponse[] => {
    const seccionesProcesadas = secciones.map(seccion => procesarSeccion(seccion))
    return seccionesProcesadas
}
