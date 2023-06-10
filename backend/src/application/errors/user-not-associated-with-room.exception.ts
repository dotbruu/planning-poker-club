export class UserNotAssociatedWithRoomException extends Error {
  constructor() {
    super(`This user not associated with room`);
    this.name = 'UserNotAssociatedWithRoomException';
  }
}
