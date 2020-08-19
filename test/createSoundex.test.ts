import {expect} from "chai";

function createSoundex(input: string): string {
    return input
}

describe('createSoundex', () => {
    it('returns the first letter', () => {
        const result = createSoundex('p');
        expect(result).to.eql('p');
    });
});
