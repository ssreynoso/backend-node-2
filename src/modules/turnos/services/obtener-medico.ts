import prismadb from '@/lib/prismadb'
import { Especialidad, Medico } from '@/modules/turnos/types'

const obtenerEspecialidad = async (especialidadId: number | null): Promise<Especialidad | null> => {
    let especialidad: Especialidad | null = null
    if (especialidadId) {
        especialidad = await prismadb.eSPECIALIDADES.findUnique({
            where: {
                ESCodigo: especialidadId
            },
            select: {
                ESCodigo: true,
                ESDescripcion: true
            }
        })
    }
    return especialidad
}

export const obtenerMedico = async (medicoId: number | null): Promise<Medico | null> => {
    let medico = null
    if (medicoId) {
        // Obtengo al médico
        medico = await prismadb.mEDICOS.findUnique({
            where: {
                MECodigo: medicoId
            },
            select: {
                MECodigo: true,
                MENombre: true,
                MEEspecialidad: true
            }
        })

        if (!medico) return null

        // Y obtengo su especialidad
        const especialidad = await obtenerEspecialidad(medico.MEEspecialidad)

        if (!especialidad) return null

        medico = { ...medico, especialidad }
    }
    return medico as Medico
}
