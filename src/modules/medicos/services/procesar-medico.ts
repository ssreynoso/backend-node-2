import { obtenerEspecialidad } from '@/modules/especialidades/services/obtener-especialidad'
import { Medico, MedicoResponse } from '../types'
import { procesarEspecialidad } from '@/modules/especialidades/services/procesar-especialidad'

export const procesarMedico = async (medico: Medico): Promise<MedicoResponse> => {
    const especialidad = medico.MEEspecialidad ? await obtenerEspecialidad(medico.MEEspecialidad) : null
    const especialidadProcesada = especialidad ? procesarEspecialidad(especialidad) : null

    const medicoProcesado: MedicoResponse = {
        codigo: medico.MECodigo,
        tratamiento: medico.METratamiento || '',
        nombre: medico.MENom?.trim() || '',
        apellido: medico.MEApellido?.trim() || '',
        email: medico.MEEmail?.trim() || '',
        tipo: medico.MEIntExt || '',
        telefonos: medico.MECTelefono?.trim() || '',
        matriculaNacional: medico.MEMatricula,
        matriculaProvincial: medico.MEMatProvin,
        vencimientoMatricula: medico.MeMatVto,
        companiaAseguradora: medico.MeSegMPCia?.trim() || '',
        montoAsegurado: medico.MeSegMPImp,
        vencimientoPoliza: medico.MeSegMPVto,
        especialidad: especialidadProcesada,
        esCirujano: !!medico.MeEsCirujano
    }

    return medicoProcesado
}
