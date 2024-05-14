import { SECCIONES } from '@prisma/client'

export type Seccion = Pick<SECCIONES, 'SeCodigo' | 'SeDescripcion'>

export interface SeccionResponse {
    codigo: Seccion['SeCodigo']
    descripcion: Seccion['SeDescripcion']
}
