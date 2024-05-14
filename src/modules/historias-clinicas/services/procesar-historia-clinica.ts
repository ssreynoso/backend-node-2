import { obtenerObraSocialConPlan } from '@/modules/obras-sociales/services/obtener-obra-social-con-plan'
import { HistoriaClinica, HistoriaClinicaResponse } from '../types'
import { procesarObraSocialConPlan } from '@/modules/obras-sociales/services/procesar-obra-social-con-plan'
import { obtenerMedico } from '@/modules/turnos/services/obtener-medico'

type Select = { [key in keyof HistoriaClinicaResponse]?: boolean }
const defaultSelect: Select = {
    documento: true,
    nroHistoria: true,
    paciente: true,
    edad: true,
    sexo: true,
    fechaNacimiento: true,
    telefono: true,
    obraSocial: true,
    numeroAfiliado: true,
    medicoCabecera: true,
    medicoCardiologo: true
}

type Response = Promise<HistoriaClinicaResponse>

export const procesarHistoriaClinica = async (
    historiaClinica: HistoriaClinica | null,
    select: Select = defaultSelect
): Response => {
    const nombrePaciente = historiaClinica?.HCNombre?.trim()
    const apellidoPaciente = historiaClinica?.HCApeSol?.trim()
    const paciente = `${apellidoPaciente} ${nombrePaciente}`
    const edad = historiaClinica?.HCFechaNacim
        ? new Date().getFullYear() - new Date(historiaClinica.HCFechaNacim).getFullYear()
        : undefined
    const sexo = historiaClinica?.HCSexo === 'M' ? 'Masculino' : 'Femenino'
    const nroHistoria = historiaClinica!.HCNumero

    // Obra social
    const obraSocial = await obtenerObraSocialConPlan(
        historiaClinica?.HCObraSocial || null,
        historiaClinica?.HCPlan || null
    )
    const obraSocialProcesada = procesarObraSocialConPlan(obraSocial)

    // Médicos
    const medicoCabecera = await obtenerMedico(historiaClinica?.HCMedico || null)
    const medicoCardiologoCabecera = await obtenerMedico(historiaClinica?.HCMedCarCabe || null)

    const returnObject = {
        documento: historiaClinica?.HCNumDocumento || null,
        nroHistoria,
        paciente,
        fechaNacimiento: historiaClinica?.HCFechaNacim || undefined,
        telefono: historiaClinica?.HCTelefono?.trim() || '',
        edad,
        sexo,
        obraSocial: obraSocialProcesada,
        numeroAfiliado: historiaClinica?.HCNumAfiliado?.trim() || '',
        medicoCabecera: medicoCabecera?.MENombre || '',
        medicoCardiologo: medicoCardiologoCabecera?.MENombre || ''
    }

    const response: Partial<HistoriaClinicaResponse> = {}
    for (const k in select) {
        const key = k as keyof HistoriaClinicaResponse
        if (select[key]) {
            const value = returnObject[key]
            // @ts-expect-error trust me
            response[key] = value
        }
    }

    return response as HistoriaClinicaResponse
}
