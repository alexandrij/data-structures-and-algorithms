const getCount = (nums) => {
  if (nums.length === 0) {
    return 0;
  }
  let maxLen = 0;
  let count = 0;
  let prevCount = 0;
  let i = 0;

  while (i < nums.length) {
    if (nums[i] !== 0) {
      count++;
    } else {
      maxLen = Math.max(maxLen, count + prevCount);
      prevCount = count;
      count = 0;
    }
    i++;
  }
  return nums.length === count ? count - 1 : Math.max(maxLen, count + prevCount);
};

console.log(getCount([1, 0, 1])); // 2
console.log(getCount([])); // 0
console.log(getCount([1, 1, 1, 1])); // 3
console.log(getCount([1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1])); // 4