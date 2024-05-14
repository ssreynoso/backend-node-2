import { ObraSocial, ObraSocialResponse } from '../types'

export const procesarObraSocial = (obraSocial: ObraSocial | null): ObraSocialResponse | null => {
    if (!obraSocial) return null

    return {
        id: obraSocial.OSCodigo,
        razonSocial: obraSocial.OSRazonSocial?.trim() || ''
    }
}
