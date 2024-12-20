/* eslint-disable import/no-extraneous-dependencies */
"use client";
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
import EmojiPicker, { EmojiStyle } from "emoji-picker-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

export function CreateUserModal({
  onConfirm,
  ...props
}: ICreateUserModalProps) {
  const [avatar, setAvatar] = useState("");
  const [emojiPicker, setEmojiPicker] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<CreateUserFormData>({
    defaultValues: {
      userName: "",
      avatar: "",
    },
    resolver: yupResolver(
      Yup.object().shape({
        userName: Yup.string().required("User name is required"),
      })
    ),
  });

  useEffect(() => {
    const emoji = generateEmoji();
    setAvatar(emoji);
    setValue("avatar", emoji);
  }, []);

  function handleAvatarChange(emoji: string) {
    setAvatar(emoji);
    setValue("avatar", emoji);
    handleEmojiPicker();
  }

  function handleEmojiPicker() {
    setEmojiPicker(!emojiPicker);
  }
  return (
    <Modal {...props}>
      <Text className="font-bold text-xl mb-6" text="Create user" />
      <form
        onSubmit={handleSubmit((data) => {
          onConfirm({ ...data });
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
              type="button"
              className="w-[42px] h-[42px] rounded-full bg-white
              p-2 absolute mb-[-20px] ml-10 z-50"
              onClick={() => handleEmojiPicker()}
            >
              <ReloadIcon />
            </button>
          </div>
          <div
            className={`w-full absolute ml-24 z-40 ${
              emojiPicker ? "block" : "hidden"
            }`}
            onMouseLeave={() => setEmojiPicker(false)}
          >
            <EmojiPicker
              lazyLoadEmojis
              searchDisabled
              autoFocusSearch={false}
              emojiStyle={EmojiStyle.NATIVE}
              onEmojiClick={(emoji) => handleAvatarChange(emoji.emoji)}
            />
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
