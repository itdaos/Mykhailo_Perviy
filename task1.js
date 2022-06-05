function filter_list(list) {
  if (!Array.isArray(list)) return;
  return list.filter((value) => typeof value === 'number') 
}

const assert = require('assert')

describe("task1", () => {
  describe("#filter_list()", () => {
    it('should properly handle test_case 1', () => {
      assert.deepEqual(filter_list([1,2,'a','b']), [1,2])
    });

    it('should properly handle test_case 2', () => {
      assert.deepEqual(filter_list([1,'a','b',0,15]), [1,0,15])
    });

    it('should properly handle test_case 3', () => {
      assert.deepEqual(filter_list([1,2,'aasf','1','123',123]), [1,2,123])
    });

    it('should return undefined if `list` is not an Array', () => {
      assert.equal(filter_list({}), undefined)
    })
  })
})