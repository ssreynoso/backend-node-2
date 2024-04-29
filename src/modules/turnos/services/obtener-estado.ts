import prismadb from '@/lib/prismadb'
import { Estado } from '@/modules/turnos/types'

export const obtenerEstado = async (estadoId: string | null): Promise<Estado | null> => {
    let estado: Estado | null = null

    if (estadoId !== null) {
        estado = await prismadb.eSTADOSTURNOQX.findUnique({
            where: { EstTQCod: estadoId },
            select: {
                EstTQDsc: true,
                EstTQCod: true
            }
        })
    }

    return estado
}
