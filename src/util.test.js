import { arraysIdentic, removeFromArray, pickRandomFromArray } from "./util";

test("Test if two arrays are identic", () => {
  let arr1 = [1, 2, 3, 4];
  let arr2 = arr1;

  expect(arraysIdentic(arr1, arr2)).toBe(true);
  expect(arraysIdentic([1, 2, 3, 4], [1, 2, 3, 4])).toBe(true);
  expect(arraysIdentic([1, 3, 2, 4], [1, 2, 3, 4])).toBe(false);
  expect(arraysIdentic([1, 3, 2, 4])).toBe(false);
  expect(arraysIdentic()).toBe(false);
});

test("Removes one element from an array in a 'functional' way", () => {
  expect(removeFromArray()).toBe(null);
  expect(removeFromArray([1, 2, 3, 4])).toBe(null);
  expect(removeFromArray(2)).toBe(null);

  let emptyArr = [];
  let arr = [1, 2, 3, 4];
  expect(removeFromArray(arr, 5)).toBe(arr);
  expect(removeFromArray(emptyArr, 5)).toBe(emptyArr);

  expect(arraysIdentic(removeFromArray([1, 2, 3, 3], 3), [1, 2, 3])).toBe(true);
  expect(arraysIdentic(removeFromArray([1, 2, 3, 4], 3), [1, 2, 4])).toBe(true);
});

test("Picks 'n' random elements from an array.", () => {
  expect(pickRandomFromArray([], 3).length).toBe(0);
  expect(pickRandomFromArray([1], 3).length).toBe(0);
  expect(pickRandomFromArray([1], 0).length).toBe(0);
  expect(pickRandomFromArray([0, 1, 2, 3], 4).length).toBe(4);
  expect(pickRandomFromArray([0, 1, 2, 3], 3).length).toBe(3);
});
