import prismadb from '@/lib/prismadb'
import { SALAS } from '@prisma/client'

export const obtenerSala = async (salaId: number): Promise<SALAS | null> => {
    const sala: SALAS | null = await prismadb.sALAS.findUnique({
        where: {
            SaCodigo: salaId
        }
    })

    return sala
}
