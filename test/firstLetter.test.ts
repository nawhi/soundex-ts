import {expect} from 'chai';

function firstLetter(word: string): string {
    return word[0];
}

describe('firstLetter', () => {
    it('should return the first letter of a word', () => {
        expect(firstLetter('a')).to.eql('a');
    })
});