import { RoomService } from "./room-service";
import { UserService } from "./user-service";
import { VoteService } from "./vote-service";

export class Service {
  static Room = RoomService;
  static User = UserService;
  static Vote = VoteService;
}

export class InternalService {
  static Room = RoomService;
  static User = UserService;
  static Vote = VoteService;
}
