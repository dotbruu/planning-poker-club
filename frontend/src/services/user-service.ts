import api from "./api";
import { CreateUserData } from "./protocols/user-service.struct";

export class UserService {
  static async createUser(data: CreateUserData) {
    const response = await api.post("/useR/create", data);
    return response.data;
  }
}
