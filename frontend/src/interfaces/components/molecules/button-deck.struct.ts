export interface IButtonDeck {
  deckVote: string;
  userVote: string;
  onVote: (deckVote: string) => void;
}
