export const soundex = (sentence: string): string => {
  const digits = sentence.slice(1).split('').map(convertToDigit)
  return `${sentence[0]}${digits.join('')}`;
}

const convertToDigit = (s: string): number | null => {
  const ones = ['b', 'f', 'p', 'v'];
  const twos = ['c', 'g', 'j', 'k', 'q', 's', 'x', 'z'];
  const threes = ['d', 't'];
  const fours = ['l'];
  const fives = ['m', 'n'];
  const sixes = ['r'];

  if(ones.includes(s)){
    return 1;
  }

  if(twos.includes(s)){
    return 2;
  }

  if(threes.includes(s)){
    return 3;
  }

  if(fours.includes(s)) {
    return 4;
  }

  if(fives.includes(s)){
    return 5;

  }

  if(sixes.includes(s)) {
    return 6;
  }
  return
}
