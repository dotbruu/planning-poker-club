"use client";
import { socket } from "@/config/socket-config";
import { CreateUserFormData } from "@/interfaces/components/organisms/create-user-modal.struct";
import { IUser } from "@/interfaces/models/user.struct";
import { IVote } from "@/interfaces/models/vote.struct";
import { Service } from "@/services";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface IRoomDetailProps {
  name: string;
  users: IUser[];
  votes: IVote[];
  deckVotes: string[];
  average?: number;
}

export function useRoomController(roomId: string) {
  const [user, setUser] = useState<IUser | null>(null);
  const [roomDetail, setRoomDetail] = useState<IRoomDetailProps>({
    deckVotes: [],
    name: "",
    users: [],
    votes: [],
  });
  const [loadingInfoRoom, setLoadingInfoRoom] = useState(true);
  const [shouldCreateUser, setShouldCreateUser] = useState(false);

  const { users: allUsers, votes: allVotes, average } = roomDetail;

  const [vote, setVote] = useState<string>(() => {
    const userVote = allVotes.find((vote) => vote.userId === user?.id);
    return userVote ? userVote.value : "";
  });

  async function handleConfirm(userId: string) {
    await Service.Room.associateUserInRoom({
      userId,
      roomId: String(roomId),
    });
  }

  async function onCreateUser({ userName, avatar }: CreateUserFormData) {
    const response = await Service.User.createUser({
      name: userName,
      avatar,
    });

    await handleConfirm(response.id);
    const cookie = `@scrum-poker:user=${JSON.stringify(response)}`;
    document.cookie = cookie;
    setUser(response);
    setShouldCreateUser(false);
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

  async function getUserParsed() {
    const userCookie = Cookies.get("@scrum-poker:user");
    return userCookie ? JSON.parse(userCookie) : null;
  }

  async function getRoomInfo() {
    const room = await Service.Room.getRoom(String(roomId));
    setRoomDetail(room);
    setLoadingInfoRoom(false);
  }

  async function handleLoadUser() {
    const parsedUser = await getUserParsed();
    setUser(parsedUser);

    if (!parsedUser) {
      setShouldCreateUser(true);
    }

    if (loadingInfoRoom) return;

    const userAlreadyAssociated = roomDetail.users.some(
      (userInList: IUser) => userInList.id === user?.id
    );

    if (parsedUser && !userAlreadyAssociated) {
      await handleConfirm(parsedUser.id);
    }
  }

  useEffect(() => {
    getRoomInfo();
    handleLoadUser();
  }, [loadingInfoRoom]);

  useEffect(() => {
    socket.on(`room/${roomId}`, (data) => {
      const { type, ...payload } = JSON.parse(data);
      if (type === "associate_user_in_room") {
        setRoomDetail((prevState) => ({
          ...prevState,
          users: payload.users,
        }));
      }
      if (type === "vote_created") {
        setRoomDetail((prevState) => ({
          ...prevState,
          votes: payload.votes,
        }));
      }
      if (type === "average_calculated") {
        setRoomDetail((prevState) => ({
          ...prevState,
          votes: payload.votes,
          average: payload.average,
        }));
      }
      if (type === "reset_votes") {
        setRoomDetail((prevState) => ({
          ...prevState!,
          votes: [],
          average: undefined,
        }));
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

  function userSelectedCard(vote: string) {
    return vote;
  }

  function getAverage() {
    Service.Vote.getAverage(String(roomId));
  }

  function resetVotes() {
    Service.Vote.reset(String(roomId));
    setRoomDetail((prevState) => ({
      ...prevState,
      votes: [],
      average: undefined,
    }));
    setVote("");
  }

  return {
    allUsers: allUsers.filter((teammate) => teammate.id !== user?.id),
    user,
    vote,
    average,
    onCreateUser,
    onVote,
    checkVote,
    getAverage,
    resetVotes,
    userSelectedCard,
    deckVotes: roomDetail?.deckVotes,
    roomName: roomDetail?.name,
    shouldCreateUser,
  };
}
