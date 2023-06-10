import { ICardPlayerProps } from "../types/molecules/card-player";

export function CardPlayer({ image, name, vote }: ICardPlayerProps) {
  return (
    <div
      className="w-[100%] h-[104px] flex flex-row p-4
    items-center bg-white rounded-xl overflow-hidden justify-between"
    >
      <div className="w-auto flex items-center gap-4">
        <div
          className="w-[64px] h-[64px] justify-center flex
      items-center bg-primary rounded-3xl text-2xl aspect-square"
        >
          {image}
        </div>
        <span className="font-bold">{name}</span>
      </div>
      {vote ? (
        <div
          className="bg-primary w-[140px] h-[140px] rounded-full
    flex justify-center items-center font-bold text-3xl aspect-square text-white
    mb-[-40px]"
        >
          {vote}
        </div>
      ) : null}
    </div>
  );
}
