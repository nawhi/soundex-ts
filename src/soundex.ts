export const soundex = (sentence: string): string => {
  const twos: string[] = ['c', 'g', 'j', 'k', 'q', 's', 'x', 'z'];
  if(twos.includes(sentence[1])){
    return `${sentence[0]}2`;
  }

  return `${sentence[0]}1`;
}
