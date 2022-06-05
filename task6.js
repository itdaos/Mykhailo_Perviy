function nextBigger(num) {
  
  if (typeof num !== 'number') return

  const numAsCharArray = num.toString().split("")
  
  if (+[...numAsCharArray].sort((a, b) => (''+b).localeCompare(a)).join("") === num) return -1

  for (let i = numAsCharArray.length - 1; i > 0; i--) {
    const inspected = numAsCharArray[i]
    let flag = false
    for (let j = i - 1; j >= 0; j--) {
      if (+inspected > +numAsCharArray[j]) {
        numAsCharArray[i] = numAsCharArray[j]
        numAsCharArray[j] = inspected
        flag = true
        break
      }
    }
    if (flag) break
  }  
  return +(numAsCharArray.join(""))
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

    it('should properly handle test_case 5', () => {
      assert.equal(nextBigger(2355), 2553)
    });

    it('should properly handle test_case 6', () => {
      assert.equal(nextBigger(2354), 2453)
    });
  })
})