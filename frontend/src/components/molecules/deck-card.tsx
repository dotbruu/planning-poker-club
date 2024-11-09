import { Card } from "../atoms/card";

export const DeckCard = ({
  deckCards,
  onVote,
  selectedCard,
}: {
  deckCards: string[];
  onVote: (vote: string) => void;
  selectedCard?: string;
}) => {
  return (
    <div className="w-full flex justify-center mt-8">
      <div className="w-full">
        <div className="w-full flex flex-row gap-2">
          {deckCards?.map((deckCard) => (
            <Card
              key={deckCard}
              card={deckCard}
              selectedCard={selectedCard}
              onSelect={onVote}
            />
          ))}
        </div>
        <div className="w-full h-20 rounded-full bg-primary-medium mt-[-2rem]"></div>
      </div>
    </div>
  );
};
