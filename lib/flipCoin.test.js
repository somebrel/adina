const flipCoin = require("./flipCoin");

test("True if param < 5, false otherwise", () => {
  expect(flipCoin(3)).toBe(true);
  expect(flipCoin(7)).toBe(false);
});
