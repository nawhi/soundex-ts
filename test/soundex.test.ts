import {soundex} from "../src/soundex";
import { expect } from "chai";

describe('soundex', () => {
    it('should keep the first letter', () => {
        const result1 = soundex('Sarah');
        expect(result1[0]).to.equal('S');
        const result2 = soundex('Gary');
        expect(result2[0]).to.equal('G');
    });

    it.skip('should replace occurrences of b, f, p, v with 1, after the first character', () => {
        const result1 = soundex('Ab');
        expect(result1.substr(0, 2)).to.equal('A1');
        const result2 = soundex('Bf');
        expect(result2.substr(0, 2)).to.equal('B1');
        const result3 = soundex('Cp');
        expect(result3.substr(0, 2)).to.equal('C1');
        const result4 = soundex('Dv');
        expect(result4.substr(0, 2)).to.equal('D1');
    })
});
