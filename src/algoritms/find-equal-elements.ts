const findEqualElements = <T>(input1: T[], input2: T[]): T[] => {
  const mapInput1 = input1.reduce((map, el) => {
    let count: number = map.get(el) || 0;
    return map.set(el, ++count);
  }, new Map<T, number>());

  return input2.filter((el) => {
    const countEl = mapInput1.get(el) as number;
    if (countEl > 0) {
      mapInput1.set(el, countEl - 1);
      return true;
    }
    return false;
  });
};

// Примеры
console.log(findEqualElements<number>([1, 2, 3], [2])); // => [2]
console.log(findEqualElements<number>([2], [1, 2, 3])); // => [2]
console.log(findEqualElements<number>([1, 2, 2, 3, 4, 4, 5], [2, 2, 2, 2, 4, 4, 4, 4])); // => [2, 2]
console.log(findEqualElements<string>(['a', 'b', 'b'], ['b', 'c'])); // => [2, 2]
