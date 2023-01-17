export const searchInsert = (nums: number[], target: number): number => {
  if (nums.length === 0) {
    return 0;
  }
  if (nums[nums.length - 1] < target) {
    return nums.length;
  }

  let start = 0;
  let end = nums.length - 1;
  let pivot = start;

  while (start < end) {
    pivot = Math.floor((start + end) / 2);

    if (nums[pivot] === target) {
      break;
    } else if (end - start === 1) {
      pivot = nums[start] > target ? start : end;
      break;
    } else if (nums[pivot] < target) {
      start = pivot;
    } else {
      end = pivot;
    }
  }

  return pivot;
};

console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 7)); // 4
console.log(searchInsert([], 2)); // 0
console.log(searchInsert([1], 0)); // 0
console.log(searchInsert([1], 2)); // 1
