export const soundex = (sentence: string): string => {
  const ones = ['b', 'f', 'p', 'v'];
  const twos = ['c', 'g', 'j', 'k', 'q', 's', 'x', 'z'];
  const threes = ['d', 't'];
  const fours = ['l'];
  const fives = ['m', 'n'];
  const sixes = ['r'];


  if(ones.includes(sentence[1])){
    return `${sentence[0]}1`;
  }

  if(twos.includes(sentence[1])){
    return `${sentence[0]}2`;
  }

  if(threes.includes(sentence[1])){
    return `${sentence[0]}3`;
  }

  if(fours.includes(sentence[1])) {
    return `${sentence[0]}4`;
  }

  if(fives.includes(sentence[1])){
    return `${sentence[0]}5`;

  }

  if(sixes.includes(sentence[1])) {
    return `${sentence[0]}6`;
  }

  return `${sentence[0]}`;
}
