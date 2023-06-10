import api from "./api";
import {
  AssociateUserInRoomData,
  CreateRoomData,
} from "./protocols/room-service.struct";

export class RoomService {
  static async createRoom(data: CreateRoomData) {
    const response = await api.post("/room/create", data);
    return response.data;
  }

  static async associateUserInRoom({
    roomId,
    userId,
  }: AssociateUserInRoomData) {
    const response = await api.post(`/room/associate/${roomId}`, { userId });
    return response.data;
  }

  // get data from room
  static async getRoom(roomId: string) {
    try {
      const response = await api.get(`/room/${roomId}`);
      return response.data;
    } catch (e) {
      return null;
    }
  }
}
