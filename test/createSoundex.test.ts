import {expect} from "chai";

function createSoundex(input: string): string {
    const firstLetter: string = input[0];

    if(['b','f','p','v'].includes(firstLetter)) {
        return '1'
    }
    return firstLetter
}

describe('createSoundex', () => {
    it('returns the first letter', () => {
        const result = createSoundex('p');
        expect(result).to.eql('p');
    });
    it('removes all occurrences of h and w except first letter', () => {
        expect(createSoundex('h')).to.eql('h');
        expect(createSoundex('w')).to.eql('w');
        expect(createSoundex('ph')).to.eql('p');
        expect(createSoundex('pw')).to.eql('p');
        expect(createSoundex('pwwww')).to.eql('p');
        expect(createSoundex('pwwhhhh')).to.eql('p');
    });
    it('replaces all consonants with number 1', () => {
        expect(createSoundex('b')).to.eql('1');
        expect(createSoundex('f')).to.eql('1');
        expect(createSoundex('p')).to.eql('1');
        expect(createSoundex('v')).to.eql('1');
    });
});
