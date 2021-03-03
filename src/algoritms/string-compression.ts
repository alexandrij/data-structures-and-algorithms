const stringCompression = (input: string): string => {
    return input
        .split('')
        .reduceRight((res: [[string, number]?], el: string) => {
            const cur = res[0];
            if (cur && cur[0] === el) {
                cur[1]++;
            } else {
                res.unshift([el, 1]);
            }
            return res;
        }, [])
        .map((el) => el![0] + (el![1] > 1 ? el![1] : ''))
        .join('');
};

console.log(stringCompression('aaaaaaaaaaaasssddfwfwessssfqqrtvvvverww'));
console.log(stringCompression(''));
console.log(stringCompression('aaaaa'));
