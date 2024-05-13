import { InternacionResponse } from '@/modules/internaciones/types'

export const internaciones: InternacionResponse[] = [
    {
        id: 1,
        numeroInternacion: 123,
        habitacion: 101,
        cama: 1,
        acompaniante: true,
        aislado: false,
        fechaIngreso: new Date(),
        historiaClinica: {
            documento: 12_345_678,
            paciente: 'John Doe',
            edad: 30,
            sexo: 'M',
            nroHistoria: 456,
            fechaNacimiento: new Date(1991, 1, 1),
            telefono: '1234567890',
            obraSocial: {
                id: 1,
                razonSocial: 'Obra Social 1',
                plan: {
                    id: '1',
                    nombre: 'Plan 1'
                }
            },
            numeroAfiliado: '123456',
            medicoCabecera: 'Dr. Smith',
            medicoCardiologo: 'Dr. Johnson'
        },
        obraSocial: {
            id: 1,
            razonSocial: 'Obra Social 1',
            plan: {
                id: '1',
                nombre: 'Plan 1'
            }
        },
        numeroAfiliado: '123456'
    },
    {
        id: 2,
        numeroInternacion: 124,
        habitacion: 102,
        cama: 2,
        acompaniante: true,
        aislado: true,
        fechaIngreso: new Date(),
        historiaClinica: {
            documento: 23_456_789,
            paciente: 'Jane Doe',
            edad: 25,
            sexo: 'F',
            nroHistoria: 457,
            fechaNacimiento: new Date(1996, 1, 1),
            telefono: '1234567890',
            obraSocial: {
                id: 2,
                razonSocial: 'Obra Social 2',
                plan: {
                    id: '2',
                    nombre: 'Plan 2'
                }
            },
            numeroAfiliado: '234567',
            medicoCabecera: 'Dr. Brown',
            medicoCardiologo: 'Dr. White'
        },
        obraSocial: {
            id: 2,
            razonSocial: 'Obra Social 2',
            plan: {
                id: '2',
                nombre: 'Plan 2'
            }
        },
        numeroAfiliado: '234567'
    },
    {
        id: 3,
        numeroInternacion: 125,
        habitacion: 103,
        cama: 3,
        acompaniante: false,
        aislado: false,
        fechaIngreso: new Date(),
        historiaClinica: {
            documento: 34_567_890,
            paciente: 'John Smith',
            edad: 40,
            sexo: 'M',
            nroHistoria: 458,
            fechaNacimiento: new Date(1981, 1, 1),
            telefono: '1234567890',
            obraSocial: {
                id: 3,
                razonSocial: 'Obra Social 3',
                plan: {
                    id: '3',
                    nombre: 'Plan 3'
                }
            },
            numeroAfiliado: '345678',
            medicoCabecera: 'Dr. Black',
            medicoCardiologo: 'Dr. Green'
        },
        obraSocial: {
            id: 3,
            razonSocial: 'Obra Social 3',
            plan: {
                id: '3',
                nombre: 'Plan 3'
            }
        },
        numeroAfiliado: '345678'
    }
    // Agrega más internaciones aquí
]
