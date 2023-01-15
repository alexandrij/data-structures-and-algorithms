// [a, b]  => [a,b], [b,a]
// [a,b,c] => [a,b,c], [b,a,c], [b,c,a], [c,b,a], [c,a,b], [a,c,b]

// a => [a]
// ab => [ab, ba]
// abc => [abc, acb, cba, bac, cab, bca]

export function swap(arr: string[], i: number, j: number): string[] {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

export function permutation(input: string | string[], start = 0) {
  const arr = Array.from(input);

  if (arr.length < 2) {
    return arr;
  }
  if (start >= arr.length) {
    return [];
  }

  let res: string[] = [];

  for (let i = start; i < arr.length; i++) {
    if (i !== start) {
      res.push(arr.join(''));
    }
    res = res.concat(permutation(arr, start + 1));

    if (i < arr.length - 1) {
      swap(arr, start, i + 1);
    }
  }

  return res;
}

console.log(permutation('ab'));
console.log(permutation('abc'));
console.log(permutation('abcd'));
console.log(permutation('abcde'));
