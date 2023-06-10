type AlertTooltopFixedProps = {
  text: string;
};

export function AlertTooltopFixed({ text }: AlertTooltopFixedProps) {
  return (
    <div
      className="
    w-96 h-8 mt-2
    rounded-full 
    bg-slate-500 
    flex justify-center items-center
  "
    >
      <div className="w-8 overflow-hidden inline-block mt-[-40px] ml-[-120px] absolute">
        <div className=" h-6 w-11 bg-slate-500 rounded-md rotate-45 transform origin-bottom-left"></div>
      </div>
      <span className="text-white text-[12px]">{text}</span>
    </div>
  );
}
