export function sumDigPow(a: number, b: number): number[] {
  const res: number[] = [];
  let curSumDigPow: number;
  let i: number = a;

  for (; i < b; i++) {
    curSumDigPow = String(i).split('').reduce((sum, item, i) => {
      return sum + Math.pow(+item, i + 1);
    }, 0);
    if (curSumDigPow === i) {
      res.push(curSumDigPow);
    }
  }
  return res;
}
