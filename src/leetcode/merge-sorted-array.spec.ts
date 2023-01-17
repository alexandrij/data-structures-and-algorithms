import { merge } from './merge-sorted-array';

describe('merge sorted array', () => {
  it('слияние ненулевой длины массивов', () => {
    let nums1 = [1, 2, 3, 0, 0, 0];
    let nums2 = [2, 5, 6];
    merge(nums1, 3, nums2, 3);
    expect(nums1.toString()).toBe('1,2,2,3,5,6');

    nums1 = [1, 1, 3, 6, 0, 0, 0];
    nums2 = [0, 5, 7];
    merge(nums1, 4, nums2, 3);
    expect(nums1.toString()).toBe('0,1,1,3,5,6,7');

    nums1 = [1, 1, 1, 4, 8, 0, 0, 0];
    nums2 = [2, 5, 6];
    merge(nums1, 5, nums2, 3);
    expect(nums1.toString()).toBe('1,1,1,2,4,5,6,8');
  });

  it('слияние, один из массивов пустой', () => {
    let nums1 = [0];
    let nums2 = [2, 5, 6];
    merge(nums1, 0, nums2, 3);
    expect(nums1.toString()).toBe('2,5,6');

    nums1 = [2, 5, 6];
    nums2 = [0];
    merge(nums1, 3, nums2, 0);
    expect(nums1.toString()).toBe('2,5,6');

    nums1 = [1];
    nums2 = [0];
    merge(nums1, 1, nums2, 0);
    expect(nums1.toString()).toBe('1');
  });
});
