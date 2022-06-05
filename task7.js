function bit32ToIPv4(repr32) {
  return "127.0.0.1"
}

const assert = require('assert')

describe("task7", () => {
  describe("#bit32ToIPv4()", () => {
    it('should properly handle test_case 1', () => {
      assert.equal(bit32ToIPv4(2149583361), "128.32.10.1")
    });

    it('should properly handle test_case 2', () => {
      assert.equal(bit32ToIPv4(32), "0.0.0.32")
    });

    it('should properly handle test_case 3', () => {
      assert.equal(bit32ToIPv4(0), "0.0.0.0")
    });
  })
})