import getAssets from "./getAssets";

test("Get 'n' random assets from a directory.", () => {
  expect(getAssets(null, null)).toBe(null);
  expect(getAssets(null)).toBe(null);
  expect(getAssets(3, null)).toBe(null);
  expect(getAssets(0).length).toBe(0);
  expect(getAssets(3).length).toBe(3);
});
