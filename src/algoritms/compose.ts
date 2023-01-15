function compose<T = unknown>(...fns): (...args: any[]) => T {
  return (...args) => fns.reduceRight((prev, fn) => [fn(...prev)], args)[0];
}

const square = (x) => x * x;
const times2 = (x) => x * 2;
const sum = (a, b) => a + b;

console.log(compose<number>(square, times2)(2) === square(times2(2)));
console.log(compose<number>(square, times2, sum)(3, 4) === square(times2(sum(3, 4))));
