export function equalArrays<T = any>(arr1: T[], arr2: T[], equalFunc: (a: T, b: T) => boolean = (a, b) => a === b) {
    return arr1.length === arr2.length &&
        arr1.every((item, i) => equalFunc(item, arr2[i]));
}
