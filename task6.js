function nextBigger(num) {
  return -1
}

const assert = require('assert')

describe("task6", () => {
  describe("#nextBigger()", () => {
    it('should properly handle test_case 1', () => {
      assert.equal(nextBigger(12), 21)
    });

    it('should properly handle test_case 2', () => {
      assert.equal(nextBigger(513), 531)
    });

    it('should properly handle test_case 3', () => {
      assert.equal(nextBigger(2017), 2071)
    });

    it('should properly handle test_case 4', () => {
      assert.equal(nextBigger(531), -1)
    });
  })
})