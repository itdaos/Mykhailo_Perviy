function transformFriends(friends) {
  return ""
}

const assert = require('assert')

describe("task5", () => {
  describe("#transformFriends()", () => {
    it('should properly handle test_case 1', () => {
      assert.equal(
        transformFriends("Fired:Corwill;Wilfred:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"), 
        "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
      )
    });

    it('should properly handle test_case 2', () => {
      assert.equal(
        transformFriends("Fired:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"), 
        "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
      )
    });

    it('should properly handle test_case 3', () => {
      assert.equal(
        transformFriends("Fired:Corwill;Zaza:Corwill;Wilfred:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"), 
        "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(CORWILL, ZAZA)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
      )
    });
  })
})