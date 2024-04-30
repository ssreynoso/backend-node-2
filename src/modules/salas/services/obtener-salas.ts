import prismadb from '@/lib/prismadb'
import { Sala, SalaResponse } from '@/modules/turnos/types'
import { procesarSala } from './procesar-sala'

export const obtenerSalas = async (): Promise<SalaResponse[]> => {
    const salas: Sala[] = await prismadb.sALAS.findMany({})

    const salasProcesadas: SalaResponse[] = salas.map(sala => procesarSala(sala))

    return salasProcesadas
}
