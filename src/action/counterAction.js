export const increment = (number = 1) => {
    return {
        type: 'INCREMENT',
        number: number
    }
}
export const decrement = (number = 1) => {
    return {
        type: 'DECREMENT',
        number : number
    }
}
