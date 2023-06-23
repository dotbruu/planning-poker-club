import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import { Modal } from "@/components/atoms/modal";
import { Text } from "@/components/atoms/text";
import { ReloadIcon } from "@/components/icons/reload-icon";
import {
  ICreateUserModalProps,
  CreateUserFormData,
} from "@/interfaces/components/organisms/create-user-modal.struct";
import { generateEmoji } from "@/utils/generate-emoji";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

export function CreateUserModal({
  onConfirm,
  ...props
}: ICreateUserModalProps) {
  const [avatar, setAvatar] = useState(() => generateEmoji());
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<CreateUserFormData>({
    defaultValues: {
      userName: "",
      avatar,
    },
    resolver: yupResolver(
      Yup.object().shape({
        userName: Yup.string().required("User name is required"),
      })
    ),
  });

  function handleAvatarChange() {
    const newAvatar = generateEmoji();
    setAvatar(newAvatar);
    setValue("avatar", newAvatar);
  }
  return (
    <Modal {...props}>
      <Text className="font-bold text-xl mb-6" text="Create user" />
      <form
        onSubmit={handleSubmit((data) => {
          onConfirm({ ...data, avatar });
        })}
      >
        <div className="flex flex-col gap-4">
          <div className="flex justify-start items-end">
            <div
              className="w-[84px] h-[84px] justify-center flex
              items-center bg-primary rounded-3xl text-2xl aspect-square"
            >
              {avatar}
            </div>
            <button
              className="w-[42px] h-[42px] rounded-full bg-white
              p-2 absolute mb-[-20px] ml-10"
              onClick={() => handleAvatarChange()}
            >
              <ReloadIcon />
            </button>
          </div>
          <Input
            error={errors.userName?.message}
            label="User name"
            placeholder="User name"
            register={register("userName")}
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
