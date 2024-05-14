import { Medico } from '../types'

type SelectMedico = {
    [key in keyof Medico]: boolean
}

export const selectMedico: SelectMedico = {
    MECodigo: true,
    METratamiento: true,
    MEApellido: true,
    MENom: true,
    MEIntExt: true,
    MECTelefono: true,
    MEMatricula: true,
    MEMatProvin: true,
    MeMatVto: true,
    MeSegMPCia: true,
    MeSegMPImp: true,
    MeSegMPVto: true,
    MEEspecialidad: true,
    MeEsCirujano: true
}
