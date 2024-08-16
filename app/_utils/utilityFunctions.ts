
export function delay(time: any) {
    return new Promise(resolve => setTimeout(resolve, time));
}

export function randomIntegerInRange(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min)
}