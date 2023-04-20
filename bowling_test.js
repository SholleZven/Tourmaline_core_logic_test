describe("Bowling", function () {
  describe("Invalid", function () {
    describe("Invalid length", function () {
      bowling_helper("", 0);
      bowling_helper("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", -1);
    });
  });
});

function bowling_helper(expression, result) {
  it("should evaluate '" + expression + "' to " + result, function () {
    expect(bowling(expression)).toBe(result);
  });
}
