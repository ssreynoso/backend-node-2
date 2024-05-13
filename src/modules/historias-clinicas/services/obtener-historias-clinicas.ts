import prismadb from '@/lib/prismadb'
import { selectHistoriaClinica } from '../lib/database-select'
import { HistoriaClinica, HistoriaClinicaResponse } from '../types'
import { procesarHistoriaClinica } from './procesar-historia-clinica'

export const obtenerHistoriasClinicas = async (limit: number, offset: number): Promise<HistoriaClinicaResponse[]> => {
    const historiasClinicas: HistoriaClinica[] = await prismadb.hISTORIAS.findMany({
        take: limit,
        skip: offset,
        where: { HCMarcaDuplicada: { not: 'S' } },
        orderBy: [{ HCApeSol: 'asc' }, { HCNombre: 'asc' }],
        select: selectHistoriaClinica
    })

    const historiasClinicasProcesadas = await Promise.all(historiasClinicas.map(h => procesarHistoriaClinica(h)))

    return historiasClinicasProcesadas
}
