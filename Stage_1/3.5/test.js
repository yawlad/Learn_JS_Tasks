"use strict";

mocha.setup("bdd");
let assert = chai.assert;

it("Возводит x в степень n", function () {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result); // assert.equal(pow(x, 1), 5);

  result *= x;
  assert.equal(pow(x, 2), result); // assert.equal(pow(x, 2), 25);

  result *= x;
  assert.equal(pow(x, 3), result); // assert.equal(pow(x, 3), 125);
});

// It is desirable to explicitly indicate the result that we expect.

mocha.run();
