import { HistoriaClinica } from '../types'

type SelectHistoriaClinica = {
    [key in keyof HistoriaClinica]: boolean
}

export const selectHistoriaClinica: SelectHistoriaClinica = {
    HCNumIng: true,
    HCNumDocumento: true,
    HCNumero: true,
    HCNombre: true,
    HCApeSol: true,
    HCFechaNacim: true,
    HCSexo: true,
    HCMedCarCabe: true,
    HCMedico: true,
    HCTelefono: true,
    HCObraSocial: true,
    HCPlan: true,
    HCNumAfiliado: true
} as const
