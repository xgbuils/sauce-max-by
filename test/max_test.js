var maxBy = require('../')

describe('maxBy', function () {
    it('simple comparisons', function () {
        var n = maxBy([9,3,4], function (x) { return x % 3 });
        expect(n).to.equal(4);
    });
});