"use client";
interface IModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose?: () => void;
}

export function Modal({ isOpen, onClose, children }: IModalProps) {
  return (
    <div
      className={`w-full h-full top-0 bottom-0 fixed bg-primary bg-opacity-70 flex
      justify-center content-center items-center ${!isOpen && "hidden"} z-50`}
      onClick={onClose}
    >
      <div
        className="max-w-[80%] md:max-w-[50%] w-[550px]
        p-6 rounded-md bg-gray-light z-60"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
