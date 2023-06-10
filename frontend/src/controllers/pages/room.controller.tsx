import { socket } from "@/config/socket-config";
import { CreateUserFormData } from "@/interfaces/components/organisms/create-user-modal.struct";
import { IRoomControllerProps } from "@/interfaces/controllers/room-controller.struct";
import { IUser } from "@/interfaces/models/user.struct";
import { IVote } from "@/interfaces/models/vote.struct";
import { Service } from "@/services";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export function useRoomController({
  users,
  votes,
  userData,
  roomId,
  averageRoom,
}: IRoomControllerProps) {
  const [allUsers, setAllUsers] = useState<IUser[]>(users);
  const [allVotes, setAllVotes] = useState<IVote[]>(votes);
  const [user, setUser] = useState<IUser | null>(() => {
    return userData || null;
  });
  const [vote, setVote] = useState<string>(() => {
    const userVote = allVotes.find((vote) => vote.userId === user?.id);
    return userVote ? userVote.value : "";
  });
  const [average, setAverage] = useState<number | null>(averageRoom || null);

  function handleConfirm(userId: string) {
    Service.Room.associateUserInRoom({
      userId,
      roomId: String(roomId),
    });
  }

  function onCreateUser({ userName, avatar }: CreateUserFormData) {
    Service.User.createUser({
      name: userName,
      avatar,
    }).then((response) => {
      handleConfirm(response.id);
      const cookie = `@scrum-poker:user=${JSON.stringify(response)}`;
      document.cookie = cookie;
      setUser(response);
    });
  }

  function onVote(vote: string) {
    if (average) return;
    setVote(vote);
    Service.Vote.create({
      userId: user ? user.id : "",
      roomId: String(roomId),
      vote,
    });
  }

  useEffect(() => {
    const userAlreadyAssociated = allUsers.some(
      (userInList) => userInList.id === user?.id
    );

    if (user && !userAlreadyAssociated) {
      handleConfirm(user.id);
    }

    socket.on(`room/${roomId}`, (data) => {
      const { type, ...payload } = JSON.parse(data);
      if (type === "associate_user_in_room") {
        setAllUsers(payload.users);
      }
      if (type === "vote_created") {
        setAllVotes(payload.votes);
      }
      if (type === "average_calculated") {
        setAllVotes(payload.votes);
        setAverage(payload.average);
      }
      if (type === "reset_votes") {
        setAllVotes([]);
        setAverage(null);
        setVote("");
        toast("Clean vote!", {
          position: "bottom-right",
          type: "info",
          autoClose: 2000,
          closeOnClick: true,
          draggable: false,
          theme: "light",
        });
      }
    });
  }, []);

  function checkVote(userId: string) {
    if (user && user.id === userId) return vote;
    const voteOfUser = allVotes.find((vote) => vote.userId === userId);
    return voteOfUser?.value;
  }

  function getAverage() {
    Service.Vote.getAverage(String(roomId));
  }

  function resetVotes() {
    Service.Vote.reset(String(roomId));
    setAllVotes([]);
    setAverage(null);
    setVote("");
  }

  return {
    allUsers,
    user,
    vote,
    average,
    onCreateUser,
    onVote,
    checkVote,
    getAverage,
    resetVotes,
  };
}
