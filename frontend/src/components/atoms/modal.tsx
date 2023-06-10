"use client";
interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose?: () => void;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  return (
    <div
      className={`w-full h-full absolute bg-primary bg-opacity-70 flex
      justify-center content-center items-center ${!isOpen && "hidden"} z-50`}
      onClick={onClose}
    >
      <div
        className="max-w-[50%] w-[550px]
        p-6 rounded-md bg-gray-light"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
