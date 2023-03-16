export const createNumberArray = (n : number): number[] => {
    return Array.from({ length: n }, (_, index) => index);
}
