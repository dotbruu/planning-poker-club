import { IButtonDeck } from "@/interfaces/components/molecules/button-deck.struct";

export function ButtonDeck({ deckVote, userVote, onVote }: IButtonDeck) {
  return (
    <button
      key={deckVote}
      className={`w-full md:w-[125px] h-[125px]
      ${userVote === deckVote ? "bg-primary" : "bg-white"}
      rounded-lg p-6 justify-end items-end`}
      onClick={() => onVote(deckVote)}
    >
      <span
        className={`font-bold
      ${userVote === deckVote ? "text-white" : "text-primary"} text-3xl`}
      >
        {deckVote}
      </span>
    </button>
  );
}
