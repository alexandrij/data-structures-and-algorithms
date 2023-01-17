export function lengthOfLastWord(s: string): number {
  let i = s.length - 1;
  while (s[i] === ' ' && i > -1) {
    i--;
  }

  const end = i;
  while (s[i] !== ' ' && i > -1) {
    i--;
  }
  return end - i;
}

console.log(lengthOfLastWord('luffy is still joyboy'));
