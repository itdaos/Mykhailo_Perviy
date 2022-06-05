function bit32ToIPv4(repr32) {
  // reeeeally bad code but works 
  const octet1 = repr32 % 256
  const octet2 = (repr32 % (256*256)) >> 8
  const octet3 = (repr32 % (256*256*256)) >> 16
  let octet4 = (((repr32 % (256*256*256*256)) >> 24) + 256)
  if (octet4 === 256) octet4 = 0
  return `${octet4}.${octet3}.${octet2}.${octet1}`
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

    it('should properly handle test_case 4', () => {
      assert.equal(bit32ToIPv4(2149403361), "128.29.74.225")
    });

    it('should properly handle test_case 5', () => {
      assert.equal(bit32ToIPv4(4028451553), "240.29.74.225")
    });

    it('should properly handle test_case 6', () => {
      assert.equal(bit32ToIPv4(3357362913), "200.29.74.225")
    });

    it('should properly handle test_case 7', () => {
      assert.equal(bit32ToIPv4(1919713), "0.29.74.225")
    });

  })
})