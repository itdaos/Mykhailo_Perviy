function filter_list(list) {
  return []
}

const assert = require('assert')

describe("task1", () => {
  describe("#filter_list()", () => {
    it('should properly handle test_case 1', () => {
      assert.equal(filter_list([1,2,'a','b']), [1,2])
    });

    it('should properly handle test_case 2', () => {
      assert.equal(filter_list([1,'a','b',0,15]), [1,0,15])
    });

    it('should properly handle test_case 3', () => {
      assert.equal(filter_list([1,2,'aasf','1','123',123]), [1,2,123])
    });
  })
})