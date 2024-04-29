import {
    TURNOS,
    CONTRATO,
    ESPECIALIDADES,
    ESTADOSTURNOQX,
    HISTORIAS,
    INTERNAD,
    MEDICOS,
    OBRASOCIAL,
    SALAS
} from '@prisma/client'

export type Sala = SALAS
export type HistoriaClinica = Pick<HISTORIAS, 'HCNumero' | 'HCNombre' | 'HCApeSol' | 'HCFechaNacim' | 'HCSexo'>
export type Internacion = Pick<INTERNAD, 'INHabitacion' | 'INCama'>
export type Plan = Pick<CONTRATO, 'CoPlan' | 'CoNomPlan'>
export type ObraSocial = Pick<OBRASOCIAL, 'OSRazonSocial'> & { plan: Plan }
export type Estado = Pick<ESTADOSTURNOQX, 'EstTQDsc' | 'EstTQCod'>
export type Especialidad = Pick<ESPECIALIDADES, 'ESCodigo' | 'ESDescripcion'>
export type Medico = Pick<MEDICOS, 'MECodigo' | 'MENombre' | 'MEEspecialidad'> & { especialidad: Especialidad }
export type TurnoPrisma = Pick<
    TURNOS,
    | 'TurDNIPte'
    | 'TurOsCodigo'
    | 'TurNroIntInter'
    | 'TurMedEstudio'
    | 'TurHoraIni'
    | 'TurHoraFin'
    | 'TurOSPlan'
    | 'TurEstado'
    | 'TurObservaciones'
    | 'TurSiglasEstudio'
>
export type Turno = TurnoPrisma & {
    estado: Estado | null
    historiaClinica: HistoriaClinica | null
    internacion: Internacion | null
    obraSocial: ObraSocial | null
    medico: Medico | null
}

export type TurnoResponse = {
    horaIni: number
    horaFinal: number
    horaInicio: string
    horaFin: string
    paciente: string
    edad: number | undefined
    sexo: string
    nroHistoria: number
    habitacion: number
    cama: number
    obraSocial: string
    planCobertura: string
    medicoNombre: string
    medicoEspecialidad: string
    observaciones: string
    cirugia: string
    estado: string
    estadoColor: string
}
