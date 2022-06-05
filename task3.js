function digital_root(num) {
  if (typeof num !== 'number') return

  const numAsString = num.toString()
  let sumOfDigits = 0
  for(let i = 0; i < numAsString.length; i++) {
    sumOfDigits += Number(numAsString[i])
  }

  if (sumOfDigits > 9) {
    return digital_root(sumOfDigits)
  }
  return sumOfDigits
}

const assert = require('assert')

describe("task3", () => {
  describe("#digital_root()", () => {
    it('should properly handle test_case 1', () => {
      assert.equal(digital_root(16), 7)
    });

    it('should properly handle test_case 2', () => {
      assert.equal(digital_root(942), 6)
    });

    it('should properly handle test_case 3', () => {
      assert.equal(digital_root(132189), 6)
    });

    it('should properly handle test_case 4', () => {
      assert.equal(digital_root(493193), 2)
    });

  })
})