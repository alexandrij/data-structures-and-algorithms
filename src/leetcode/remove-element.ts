export function removeElement(nums: number[], val: number): number {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[count++] = nums[i];
    }
  }
  nums.length = count;
  return count;
}

const a1 = [3, 2, 2, 3];
console.log(removeElement(a1, 3)); // 2
console.log(a1); // [2]

const a2 = [0, 1, 2, 2, 3, 0, 4, 2];
console.log(removeElement(a2, 2)); // 5
console.log(a2); // nums [0,1,4,0,3]

const a4 = [];
console.log(removeElement(a4, 2)); // 0
console.log(a4); // nums []

const a5 = [1];
console.log(removeElement(a5, 1)); // 0
console.log(a5); // nums []

const a6 = [1, 1];
console.log(removeElement(a6, 1)); // 1
console.log(a6); // nums []
