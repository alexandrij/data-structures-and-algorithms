export const binarySearch = <T = number>(input: T[], target: T, start?: number, end?: number): number => {
    start = typeof start === 'number' ? start : 0;
    end = typeof end === 'number' ? end : input.length;

    const middle = start + Math.floor((end - start) / 2);

    if (target === input[middle]) { return middle; }
    if (target > input[middle]) { return binarySearch(input, target, middle + 1, end); }
    if (target < input[middle]) { return binarySearch(input, target, start, middle - 1); }

    return -1;
}

console.log(binarySearch<number>([1, 2, 4, 6, 7, 8], 4));
console.log(binarySearch<number>([1, 2, 4, 6, 7, 8], -2));
console.log(binarySearch<number>([1, 2, 4, 6, 7, 8], 10));
console.log(binarySearch<string>(['a', 'b', 'c', 'd', 'f', 'g'], 'c'));
