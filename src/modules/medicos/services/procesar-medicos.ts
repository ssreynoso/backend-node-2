import { Medico, MedicoResponse } from '../types'
import { procesarMedico } from './procesar-medico'

export const procesarMedicos = (medicos: Medico[]): Promise<MedicoResponse[]> => {
    const medicosProcesados = Promise.all(medicos.map(medico => procesarMedico(medico)))
    return medicosProcesados
}
