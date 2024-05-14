import { ESPECIALIDADES } from '@prisma/client'

export type Especialidad = Pick<ESPECIALIDADES, 'ESCodigo' | 'ESDescripcion'>

export interface EspecialidadResponse {
    codigo: Especialidad['ESCodigo']
    descripcion: Especialidad['ESDescripcion']
}
