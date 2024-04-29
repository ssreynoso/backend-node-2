import prismadb from '@/lib/prismadb'
import { SALAS } from '@prisma/client'

export const obtenerSalas = async (): Promise<SALAS[]> => {
    const salas: SALAS[] = await prismadb.sALAS.findMany({})

    return salas
}
