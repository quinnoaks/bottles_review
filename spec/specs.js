describe('beerWall', function() {
  it("is true for numbers 1-99", function() {
    expect(beerWall(57)).to.equal(true);
  });

  it("is true for number 0", function() {
    expect(beerWall(0)).to.equal(true);
  });

  it("is false for numbers under 0", function() {
    expect(beerWall(-4)).to.equal(false);
  });

  it("is false for numbers above 99", function() {
    expect(beerWall(115)).to.equal(false);
  });
});
