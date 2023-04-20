describe("Bowling", function () {
  describe("Invalid", function () {
    describe("Invalid length", function () {
      bowling_helper("", 0);
      bowling_helper("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", -1);
    });
    describe("Invalid characters", function() {
        bowling_helper('ejfbs', -1);
        bowling_helper('ejfbsXXXXXXXXXXXXXXXXXXXXX', -1);
        bowling_helper('12023040..12023040.r', -1);
        bowling_helper('909-9-9-909-9-9-9-9-', -1);
    });
    describe("Invalid pins", function() {
        bowling_helper('38------------------', -1);
        bowling_helper('91------------------', -1);
        bowling_helper('5/5/5/555/5/5/5/5/5/X', -1);
    });
  });
});

function bowling_helper(expression, result) {
  it("should evaluate '" + expression + "' to " + result, function () {
    expect(bowling(expression)).toBe(result);
  });
}
