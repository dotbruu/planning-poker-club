export interface ICreateUserModalProps {
  isOpen: boolean;
  onClose?: () => void;
  onConfirm: (data: CreateUserFormData) => void;
}

export type CreateUserFormData = {
  userName: string;
  avatar: string;
};
