import {expect} from 'chai';

function removeAllVowels(word: string, lettersToRemove: string = "aeiouy"): string {
    const [...letters] = lettersToRemove;
    let searchValue: RegExp = new RegExp(`[${letters.join('')}]`, 'gi');
    return word.replace(searchValue, '')
}

describe('removeVowels', () => {
    it('should remove all vowels + y from a word (except the first letter)', () => {
        expect(removeAllVowels('aweiouy')).to.eql('w');
        expect(removeAllVowels('AWEIOUY')).to.eql('W');
    })
});