// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  nums1.length = n + m;
  let i = n + m - 1;
  n--;
  m--;

  while (i > -1) {
    if (m < 0 && n > -1) {
      nums1[i] = nums2[n];
      n--;
    } else if (n < 0 && m > -1) {
      nums1[i] = nums1[m];
      m--;
    } else if (nums1[m] <= nums2[n]) {
      nums1[i] = nums2[n];
      n--;
    } else {
      nums1[i] = nums1[m];
      m--;
    }
    i--;
  }
}
