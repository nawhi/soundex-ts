import {expect} from 'chai';

const createLetterRemover = (letters: string[]) => (word: string) => {
    let searchValue: RegExp = new RegExp(`[${letters.join('')}]`, 'gi');
    return word.replace(searchValue, '')
}

const removeAllVowels = createLetterRemover(['a','e','i','o','u','y']);
const removeWAndH = createLetterRemover(['w','h']);

describe('createLetterRemover', () => {
    describe('removeVowels', () => {
        it('should remove all vowels + y from a word (except the first letter)', () => {
            expect(removeAllVowels('aweiouy')).to.eql('w');
            expect(removeAllVowels('AWEIOUY')).to.eql('W');
        })
    });
    describe('removeWAndH', () => {
        it('should remove w and h', () => {
            expect(removeWAndH('awheiouy')).to.eql('aeiouy');
            expect(removeWAndH('AWHEIOUY')).to.eql('AEIOUY');
        })
    })
})
