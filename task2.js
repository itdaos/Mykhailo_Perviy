function first_non_repeating_letter(str) {
  if (typeof str !== "string") return
  let result = ""

  for (let i = 0; i < str.length - 1; i++) {
    const char = str[i]
    let isNotRepeating = true
    for (let j = i+1; j < str.length; j++) {
      if (char.toLocaleLowerCase() === str[j].toLocaleLowerCase()) {
        isNotRepeating = false
        break
      }
    }
    if (isNotRepeating) {
      result = char
      break
    }
  }

  return result
}

const assert = require('assert')

describe("task2", () => {
  describe("#first_non_repeating_letter()", () => {
    it('should properly handle test_case 1', () => {
      assert.equal(first_non_repeating_letter("stress"), "t")
    });

    it('should properly handle test_case 2', () => {
      assert.equal(first_non_repeating_letter("statistics"), "a")
    });

    it('should properly handle test_case 3', () => {
      assert.equal(first_non_repeating_letter("sTreSS"), "T")
    });

    it('should properly handle test_case 4', () => {
      assert.equal(first_non_repeating_letter("SSSS"), "")
    });
  })
})