export interface ICreateRoomModalProps {
  isOpen: boolean;
  onClose?: () => void;
  onConfirm: (data: CreateRoomFormData) => void;
}

export type CreateRoomFormData = {
  roomName: string;
  deckVotes: string;
};
