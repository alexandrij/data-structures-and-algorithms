import { memoize } from './memoize';

describe('Algoritms: memoize', () => {
  it('memoized factorial', () => {
    const factorial = memoize((n: number): number => {
      return n <= 1 ? 1 : n * factorial(n - 1);
    });
    expect(factorial(5)).toBe(120);
    expect(factorial(6)).toBe(720);
    expect(factorial(7)).toBe(5040);
  });
});
