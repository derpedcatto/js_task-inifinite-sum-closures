'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  function adder(num) {
    if (num === undefined) {
      const result = sum;

      sum = 0; // clearing value on ()

      return result;
    }

    sum += num;

    return adder;
  }

  return adder;
}

module.exports = makeAdder;
