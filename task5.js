function transformFriends(friends) {
  if (typeof friends !== "string") return

  const trasform = friends.split(";")
  .map((friendStr) => {
    return friendStr.split(':').map(str => str.toUpperCase())
  })
  .map((friendName) => {
    return [friendName[1], friendName[0]]
  })
  .sort((a, b) => ('' + a[0]).localeCompare(b[0]) || ('' + a[1]).localeCompare(b[1]) )
  .map((friendName) => {
    return `(${friendName.join(", ")})`
  })
  .join("")
  return trasform
}

const assert = require('assert')

describe("task5", () => {
  describe("#transformFriends()", () => {
    it('should properly handle test_case 1', () => {
      assert.equal(
        transformFriends("Fred:Corwill;Wilfred:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"), 
        "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
      )
    });

    it('should properly handle test_case 2', () => {
      assert.equal(
        transformFriends("Fred:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"), 
        "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
      )
    });

    it('should properly handle test_case 3', () => {
      assert.equal(
        transformFriends("Fred:Corwill;Zaza:Corwill;Wilfred:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"), 
        "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(CORWILL, ZAZA)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
      )
    });
  })
})