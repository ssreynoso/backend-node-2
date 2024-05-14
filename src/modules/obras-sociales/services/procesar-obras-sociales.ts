import { ObraSocial, ObraSocialResponse } from '../types'
import { procesarObraSocial } from './procesar-obra-social'

export const procesarObrasSociales = (obrasSociales: ObraSocial[]): ObraSocialResponse[] => {
    const obrasSocialesProcesadas: ObraSocialResponse[] = obrasSociales.map(
        obraSocial => procesarObraSocial(obraSocial) as ObraSocialResponse
    )
    return obrasSocialesProcesadas
}
