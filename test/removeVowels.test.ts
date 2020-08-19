import {expect} from 'chai';

function removeAllVowels(word: string): string {
    return word.replace(/[aeiouy]/gi, '')
}

describe('removeVowels', () => {
    it('should remove all vowels + y from a word (except the first letter)', () => {
        expect(removeAllVowels('aweiouy')).to.eql('w')
    })
});