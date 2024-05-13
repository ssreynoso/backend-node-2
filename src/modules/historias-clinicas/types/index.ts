import { ObraSocialResponse } from '@/modules/obras-sociales/types'
import { HISTORIAS } from '@prisma/client'

export type HistoriaClinica = Pick<
    HISTORIAS,
    | 'HCNumIng'
    | 'HCNumDocumento'
    | 'HCNumero'
    | 'HCNombre'
    | 'HCApeSol'
    | 'HCFechaNacim'
    | 'HCSexo'
    | 'HCTelefono'
    | 'HCObraSocial'
    | 'HCPlan'
    | 'HCNumAfiliado'
    | 'HCMedico'
    | 'HCMedCarCabe'
>

export type HistoriaClinicaResponse = {
    documento: number | null
    paciente: string
    edad: number | undefined
    sexo: string
    nroHistoria: number | null
    fechaNacimiento: Date | undefined
    telefono: string
    obraSocial: ObraSocialResponse | null
    numeroAfiliado: string
    medicoCabecera: string
    medicoCardiologo: string
}
