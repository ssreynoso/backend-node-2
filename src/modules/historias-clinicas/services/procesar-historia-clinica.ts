import { HistoriaClinica, HistoriaClinicaResponse } from '../types'

export const procesarHistoriaClinica = (historiaClinica: HistoriaClinica | null): HistoriaClinicaResponse => {
    const nombrePaciente = historiaClinica?.HCNombre?.trim()
    const apellidoPaciente = historiaClinica?.HCApeSol?.trim()
    const paciente = `${apellidoPaciente} ${nombrePaciente}`
    const edad = historiaClinica?.HCFechaNacim
        ? new Date().getFullYear() - new Date(historiaClinica.HCFechaNacim).getFullYear()
        : undefined
    const sexo = historiaClinica?.HCSexo === 'M' ? 'Masculino' : 'Femenino'
    const nroHistoria = historiaClinica!.HCNumero

    return { paciente, edad, sexo, nroHistoria }
}
