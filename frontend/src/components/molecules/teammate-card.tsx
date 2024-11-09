import { Card } from "../atoms/card";
import { ICardPlayerProps } from "../types/molecules/card-player";

export function TeammateCard({ image, name, vote }: ICardPlayerProps) {
  return (
    <div
      className="max-w-sm flex flex-row p-4
    items-center rounded-xl overflow-hidden justify-between gap-4"
    >
      <div className="w-auto flex flex-col items-center gap-4">
        <div
          className="w-[64px] h-[64px] justify-center flex
      items-center bg-primary-light rounded-full text-2xl aspect-square"
        >
          {image}
        </div>
        <span className="font-bold text-white break-words whitespace-normal max-w-[100px]">
          {name}
        </span>
      </div>
      <Card card={vote} />
    </div>
  );
}
