import prismadb from '@/lib/prismadb'
import { procesarSala } from './procesar-sala'
import { Sala, SalaResponse } from '../types'

export const obtenerSala = async (salaId: number): Promise<SalaResponse | null> => {
    const sala: Sala | null = await prismadb.sALAS.findUnique({
        where: {
            SaCodigo: salaId
        }
    })

    if (!sala) return null

    const salaProcesada = procesarSala(sala)

    return salaProcesada
}
