import api from "./api";
import { ICreateVoteData } from "./protocols/vote-service.struct";

export class VoteService {
  static async create({ roomId, ...rest }: ICreateVoteData) {
    const response = await api.post(`/vote/${roomId}`, rest);
    return response.data;
  }

  static async getAverage(roomId: string) {
    const response = await api.get(`/vote/average/${roomId}`);
    return response.data;
  }

  static async reset(roomId: string) {
    const response = await api.put(`/vote/reset/${roomId}`);
    return response.data;
  }
}
