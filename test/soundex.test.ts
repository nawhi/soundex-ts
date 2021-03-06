import {soundex} from "../src/soundex";
import { expect } from "chai";

describe('soundex', () => {
    it('should keep the first letter', () => {
        const result1 = soundex('Sarah');
        expect(result1[0]).to.equal('S');
        const result2 = soundex('Gary');
        expect(result2[0]).to.equal('G');
    });
    it('should replace occurrences of b, f, p, v with 1, after the first character', () => {
        const result1 = soundex('Ab');
        expect(result1.substr(0, 2)).to.equal('A1');
        const result2 = soundex('Bf');
        expect(result2.substr(0, 2)).to.equal('B1');
        const result3 = soundex('Cp');
        expect(result3.substr(0, 2)).to.equal('C1');
        const result4 = soundex('Dv');
        expect(result4.substr(0, 2)).to.equal('D1');
    });

    it('c, g, j, k, q, s, x, z = 2', () => {
        const result1 = soundex('Ac');
        expect(result1.substr(0, 2)).to.equal('A2');
        const result2 = soundex('Bg');
        expect(result2.substr(0, 2)).to.equal('B2');
        const result3 = soundex('Cj');
        expect(result3.substr(0, 2)).to.equal('C2');
        const result4 = soundex('Dk');
        expect(result4.substr(0, 2)).to.equal('D2');
        const result5 = soundex('Eq');
        expect(result5.substr(0, 2)).to.equal('E2');
        const result6 = soundex('Fs');
        expect(result6.substr(0, 2)).to.equal('F2');
        const result7 = soundex('Gx');
        expect(result7.substr(0, 2)).to.equal('G2');
        const result8 = soundex('Hz');
        expect(result8.substr(0, 2)).to.equal('H2');
    });

    it('d, t = 3', () => {
        const result1 = soundex('Ad');
        expect(result1.substr(0, 2)).to.equal('A3');
        const result2 = soundex('Bt');
        expect(result2.substr(0, 2)).to.equal('B3');
    });

    it('l = 4', () => {
        const result1 = soundex('Al');
        expect(result1.substr(0, 2)).to.equal('A4');
    });

    it('m, n = 5', () => {
        const result1 = soundex('Am');
        expect(result1.substr(0, 2)).to.equal('A5');
        const result2 = soundex('Bn');
        expect(result2.substr(0, 2)).to.equal('B5');
    });

    it('r = 6', () => {
        const result1 = soundex('Ar');
        expect(result1.substr(0, 2)).to.equal('A6');
    });

    it('should replace all consonants with digits', () => {
        const result = soundex('Bvr');
        expect(result.substr(0,3)).to.equal('B16')
        const result2 = soundex('Sarah')
        expect(result2.substr(0,2)).to.eql('S6')
    })
});
