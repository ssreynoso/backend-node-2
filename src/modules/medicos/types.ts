import { MEDICOS } from '@prisma/client'
import { EspecialidadResponse } from '../especialidades/types'

export type Medico = Pick<
    MEDICOS,
    | 'MECodigo'
    | 'METratamiento' // dr o dra
    | 'MEApellido'
    | 'MENom'
    | 'MEEmail'
    | 'MEIntExt'
    | 'MECTelefono'
    | 'MEMatricula'
    | 'MEMatProvin'
    | 'MeMatVto'
    | 'MeSegMPCia'
    | 'MeSegMPImp'
    | 'MeSegMPVto'
    | 'MEEspecialidad'
    | 'MeEsCirujano'
>

export interface MedicoResponse {
    codigo: Medico['MECodigo']
    tratamiento: Medico['METratamiento']
    nombre: Medico['MEApellido']
    apellido: Medico['MENom']
    email: Medico['MEEmail']
    tipo: Medico['MEIntExt']
    telefonos: Medico['MECTelefono']
    matriculaNacional: Medico['MEMatricula']
    matriculaProvincial: Medico['MEMatProvin']
    vencimientoMatricula: Medico['MeMatVto']
    companiaAseguradora: Medico['MeSegMPCia']
    montoAsegurado: Medico['MeSegMPImp']
    vencimientoPoliza: Medico['MeSegMPVto']
    especialidad: EspecialidadResponse | null
    esCirujano: boolean
}
