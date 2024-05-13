import { HistoriaClinica, HistoriaClinicaResponse } from '../types'
import prismadb from '@/lib/prismadb'
import { procesarHistoriaClinica } from './procesar-historia-clinica'

type Response = Promise<HistoriaClinicaResponse[]>

export const filtrarHistoriasClinicas = async (filter: string, limit: number, offset: number): Response => {
    // Agrego los % para que busque en cualquier parte del campo
    const newFilter = `%${filter}%`

    const historiasClinicasFiltradas: HistoriaClinica[] = await prismadb.$queryRaw`
        select * from HISTORIAS
            where (HCApeSol LIKE ${newFilter} or HCNombre LIKE ${newFilter})
            order by HCNumero desc
            offset ${offset} rows
            fetch next ${offset + limit - 1} rows only;
    `

    const historiasClinicasProcesadas = await Promise.all(
        historiasClinicasFiltradas.map(historiaClinica => procesarHistoriaClinica(historiaClinica))
    )

    return historiasClinicasProcesadas
}
