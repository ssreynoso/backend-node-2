import prismadb from '@/lib/prismadb'
import { Internacion, InternacionResponse } from '@/modules/internaciones/types'
import { procesarInternacion } from './procesar-internacion'
import { NULL_DATE_STRING } from '@/types/utils'

type Response = Promise<InternacionResponse[]>

export const filtrarInternacionesVigentes = async (filter: string, limit: number, offset: number): Response => {
    // Agrego los % para que busque en cualquier parte del campo
    const newFilter = `%${filter}%`

    const internacionesFiltradasPorPaciente: Internacion[] = await prismadb.$queryRaw`
        select * from INTERNAD
            left join HISTORIAS on INTERNAD.INHCNumIng = HISTORIAS.HCNumIng
            where
                INNumero > 0 and 
                INFechaEgreso = ${NULL_DATE_STRING} and
                (HCApeSol LIKE ${newFilter} or HCNombre LIKE ${newFilter})
            order by INFechaIngreso desc
            offset ${offset} rows
            fetch next ${offset + limit - 1} rows only;
    `

    const internacionesProcesadas = await Promise.all(
        internacionesFiltradasPorPaciente.map(internacion => procesarInternacion(internacion))
    )

    return internacionesProcesadas
}
