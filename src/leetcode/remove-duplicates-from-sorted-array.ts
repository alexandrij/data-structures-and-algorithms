export function removeDuplicates(nums: number[]): number {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[count++] = nums[i];
    }
  }
  nums.length = count;
  return nums.length;
}

const a1 = [1, 1, 2];
console.log(removeDuplicates(a1)); // 2
console.log(a1); // [1, 2]

const a2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(a2)); // 5
console.log(a2); // nums [0,1,2,3,4,_,_,_,_,_]

const a3 = [1, 2, 3, 4];
console.log(removeDuplicates(a3)); // 4
console.log(a3); // nums [0,1,2,3,4,_,_,_,_,_]

const a4 = [];
console.log(removeDuplicates(a4)); // 0
console.log(a4); // nums []

const a5 = [1];
console.log(removeDuplicates(a5)); // 1
console.log(a5); // nums [1]

const a6 = [1, 1];
console.log(removeDuplicates(a6)); // 1
console.log(a6); // nums [1]
