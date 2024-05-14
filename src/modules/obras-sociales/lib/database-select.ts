import { ObraSocial } from '../types'

type SelectObraSocial = {
    [key in keyof ObraSocial]: boolean
}

export const selectObraSocial: SelectObraSocial = {
    OSCodigo: true,
    OSRazonSocial: true
}
