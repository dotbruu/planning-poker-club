"use client";
import clsx from "clsx";

export const Card = ({
  card,
  onSelect,
  selectedCard,
}: {
  card?: string;
  selectedCard?: string;
  onSelect?: (cardSelected: string) => void;
}) => {
  const isCheckedCard = card === "✅";

  return (
    <button
      className={clsx(
        "h-16 w-12 md:h-28 md:w-20 font-modak flex justify-center items-center transition-transform duration-300",
        {
          "-translate-y-4 border-b-4 border-secondary":
            card && selectedCard === card,
          "hover:-translate-y-4": !isCheckedCard,
          "cursor-default": isCheckedCard,
        }
      )}
      onClick={() => onSelect && card && onSelect(card)}
    >
      {card && !isCheckedCard ? (
        <>
          <span className="absolute text-6xl text-white">{card}</span>
          <svg
            className="h-full w-full"
            fill="none"
            viewBox="0 0 176 226"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect fill="white" height="226" rx="20" width="176" />
            <rect fill="#E1EAF9" height="226" rx="20" width="176" />
            <path
              clipRule="evenodd"
              d="M0 129.758V28.7319C8.87385 26.1485 21.5404 30.8079 36.7558 36.4049C53.5315 42.5758 73.4055 49.8864 94.7111 49.8864C116.48 49.8864 131.163 42.8856 143.063 37.2113C155.436 31.3114 164.802 26.8455 176 33.1742V169.793C151.421 186.989 119.922 197 94.7111 197C54.0814 197 18.6576 169.901 0 129.758Z"
              fill="#6C93E0"
              fillRule="evenodd"
            />
            <mask fill="white" id="path-4-inside-1_582_350">
              <path
                clipRule="evenodd"
                d="M0 149.758V48.7318C8.87385 46.1484 21.5404 50.8078 36.7558 56.4048C53.5315 62.5757 73.4055 69.8864 94.7111 69.8864C116.48 69.8864 131.163 62.8856 143.063 57.2112C155.436 51.3113 164.802 46.8454 176 53.1741V189.793C151.421 206.989 119.922 217 94.7111 217C54.0814 217 18.6576 189.901 0 149.758Z"
                fillRule="evenodd"
              />
            </mask>
            <path
              d="M0 149.758H-1V149.979L-0.906838 150.179L0 149.758ZM0 48.7318L-0.279523 47.7717L-1 47.9814V48.7318H0ZM36.7558 56.4048L36.4106 57.3433L36.4106 57.3433L36.7558 56.4048ZM143.063 57.2112L142.633 56.3086L142.633 56.3086L143.063 57.2112ZM176 53.1741H177V52.5906L176.492 52.3036L176 53.1741ZM176 189.793L176.573 190.612L177 190.314V189.793H176ZM1 149.758V48.7318H-1V149.758H1ZM0.279523 49.692C4.45669 48.4759 9.62949 48.9417 15.7577 50.4709C21.8722 51.9966 28.7875 54.5392 36.4106 57.3433L37.1011 55.4663C29.5087 52.6734 22.483 50.0877 16.2419 48.5304C10.0146 46.9765 4.41716 46.4044 -0.279523 47.7717L0.279523 49.692ZM36.4106 57.3433C53.1635 63.5058 73.2003 70.8864 94.7111 70.8864V68.8864C73.6107 68.8864 53.8995 61.6456 37.1011 55.4663L36.4106 57.3433ZM94.7111 70.8864C116.719 70.8864 131.575 63.7969 143.493 58.1139L142.633 56.3086C130.75 61.9742 116.241 68.8864 94.7111 68.8864V70.8864ZM143.493 58.1139C155.956 52.1712 164.828 48.0088 175.508 54.0447L176.492 52.3036C164.776 45.6821 154.916 50.4514 142.633 56.3086L143.493 58.1139ZM175 53.1741V189.793H177V53.1741H175ZM175.427 188.974C151 206.063 119.698 216 94.7111 216V218C120.145 218 151.842 207.915 176.573 190.612L175.427 188.974ZM94.7111 216C54.56 216 19.4419 189.216 0.906838 149.336L-0.906838 150.179C17.8733 190.586 53.6028 218 94.7111 218V216Z"
              fill="#556B91"
              mask="url(#path-4-inside-1_582_350)"
            />
          </svg>
        </>
      ) : (
        <div
          className={clsx(
            "w-full h-full rounded-lg flex justify-center items-center",
            {
              "bg-secondary": isCheckedCard,
              "bg-primary-medium": !isCheckedCard,
            }
          )}
        ></div>
      )}
    </button>
  );
};
