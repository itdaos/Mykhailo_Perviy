function countPairs(arr, target) {
  if (!Array.isArray(arr)) return
  if (target < 0) return

  let counter = 0
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) counter++
    }
  }
  return counter
}

const assert = require('assert')

describe("task4", () => {
  describe("#countPairs()", () => {
    it('should properly handle test_case 1', () => {
      assert.equal(countPairs([1, 3, 6, 2, 2, 0, 4, 5], 5), 4)
    });

    it('should properly handle test_case 2', () => {
      assert.equal(countPairs([1, 5, 2], 4), 0)
    });

    it('should properly handle test_case 3', () => {
      assert.equal(countPairs([], 4), 0)
    });

    it('should properly handle test_case 4', () => {
      assert.equal(countPairs([1, 3, 6, 2, 2, 0, 4, 5, 3], 6), 5)
    });
  })
})

