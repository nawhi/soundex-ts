export const soundex = (sentence: string): string => {
  const twos: string[] = ['c', 'g', 'j', 'k', 'q', 's', 'x', 'z'];
  const threes: string[] = ['d', 't'];

  if(sentence[1] === 'l') {
    return `${sentence[0]}4`;
  }

  if(twos.includes(sentence[1])){
    return `${sentence[0]}2`;
  }

  if(threes.includes(sentence[1])){
    return `${sentence[0]}3`;
  }

  return `${sentence[0]}1`;
}
