export function rangeFabionacci(input: number): number[] {
  if (input < 1) {
    return [];
  }
  if (input === 1) {
    return [0];
  }

  const res: number[] = [0, 1];
  for (let i = 2; i <= input; i++) {
    res.push(res[i - 1] + res[i - 2]);
  }
  return res;
}

console.log(rangeFabionacci(0));
console.log(rangeFabionacci(1));
console.log(rangeFabionacci(2));
console.log(rangeFabionacci(3));
console.log(rangeFabionacci(4));
console.log(rangeFabionacci(5));
console.log(rangeFabionacci(6));
console.log(rangeFabionacci(-1));
