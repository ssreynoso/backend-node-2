const procesarNumero = (num: string | null) => {
    const number = num ? (num.trim() === '' ? null : Number.parseInt(num)) : null

    return number
}

export const procesarHora = (hora: string | null) => {
    const hor = hora ? hora.slice(0, 2) : null
    const min = hora ? hora.slice(3, 5) : null

    const horaProcesada = procesarNumero(hor)
    const minutoProcesado = procesarNumero(min)

    return {
        hora: horaProcesada,
        minuto: minutoProcesado
    }
}
