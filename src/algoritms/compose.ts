function compose(...fns): (...args) => any {
    return (...args) => fns.reduceRight((prev, fn) => [fn(...prev)], args)[0];
}

const square = (x) => x * x;
const times2 = (x) => x * 2;
const sum = (a, b) => a + b;

console.log(compose(square, times2)(2) === square(times2(2)));
console.log(compose(square, times2, sum)(3, 4) === square(times2(sum(3, 4))));
