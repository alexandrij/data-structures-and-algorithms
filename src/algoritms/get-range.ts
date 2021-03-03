export function getRanges(input: number[]): string {
    return input
        .reduce((res: number[][], el: number) => {
            const len = res.length;
            if (len > 0 && el - res[len - 1][0] === 1) {
                res[len - 1].unshift(el);
            } else {
                res.push([el]);
            }
            return res;
        }, [])
        .map(arr => arr.pop() + (arr.length > 0 ? '-' + arr[0] : ''))
        .join(',')
}

console.log(getRanges([0, 1, 2, 3, 4, 7, 8, 10])); // "0-4,7-8,10"
console.log(getRanges([4, 7, 10])) // "4,7,10"
console.log(getRanges([2, 3, 8, 9])) // "2-3,8-9"
