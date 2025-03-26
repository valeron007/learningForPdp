import assert from 'node:assert'
import { pow } from './main.js';

describe("pow", function() {

    it("возводит в степень n", function() {
        assert.equal(pow(2, 3), 8);
    });

    it("3 в степени 3 будет 27", function() {
        assert.equal(pow(3, 3), 27);
    });

});
