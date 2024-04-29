import prismadb from '@/lib/prismadb'
import { Internacion } from '@/modules/turnos/types'

export const obtenerInternacion = async (interacionId: number | null): Promise<Internacion | null> => {
    let internacion: Internacion | null = null
    if (interacionId) {
        internacion = await prismadb.iNTERNAD.findUnique({
            where: { INNumInt: interacionId },
            select: {
                INHabitacion: true,
                INCama: true
            }
        })
    }
    return internacion
}
