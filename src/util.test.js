import { arraysIdentic, removeFromArray, pickRandomFromArray } from "./util";

test("Test if two arrays are identic", () => {
  expect(arraysIdentic([1, 2, 3, 4], [1, 2, 3, 4])).toBe(true);
});

test("Removes one element from an array in a 'functional' way", () => {
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
