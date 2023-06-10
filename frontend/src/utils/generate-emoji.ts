/* eslint-disable prettier/prettier */
export function generateEmoji(): string {
  const emojiStart = 0x1F600;
  const emojiEnd = 0x1F64F;
  const randomCode =
    Math.floor(Math.random() * (emojiEnd - emojiStart + 1)) + emojiStart;
  return String.fromCodePoint(randomCode);
}
