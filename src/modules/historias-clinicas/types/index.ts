import { HISTORIAS } from '@prisma/client'

export type HistoriaClinica = Pick<HISTORIAS, 'HCNumero' | 'HCNombre' | 'HCApeSol' | 'HCFechaNacim' | 'HCSexo'>

export type HistoriaClinicaResponse = {
    paciente: string
    edad: number | undefined
    sexo: string
    nroHistoria: number | null
}
