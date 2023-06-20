import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import { Modal } from "@/components/atoms/modal";
import { Select } from "@/components/atoms/select";
import { Text } from "@/components/atoms/text";
import { voteDecks } from "@/constants/vote-decks";
import {
  CreateRoomFormData,
  ICreateRoomModalProps,
} from "@/interfaces/components/organisms/create-room-modal.struct";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

export function CreateRoomModal({
  onConfirm,
  ...props
}: ICreateRoomModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateRoomFormData>({
    defaultValues: {
      roomName: "",
      deckVotes: "",
    },
    resolver: yupResolver(
      Yup.object().shape({
        roomName: Yup.string().required("Room name is required"),
        deckVotes: Yup.string().required("Deck votes is required"),
      })
    ),
  });
  return (
    <Modal {...props}>
      <Text className="font-bold text-xl mb-6" text="Create room" />
      <form onSubmit={handleSubmit((data) => onConfirm(data))}>
        <div className="flex flex-col gap-4">
          <Input
            error={errors.roomName?.message}
            label="Room name"
            placeholder="Room name"
            register={register("roomName")}
          />
          <Select
            error={errors.deckVotes?.message}
            label="Deck votes"
            options={voteDecks}
            register={register("deckVotes")}
          />
        </div>
        <Button
          className="mt-4"
          isSubmitting={isSubmitting}
          text="Create"
          type="submit"
          variant="secondary"
        />
      </form>
    </Modal>
  );
}
