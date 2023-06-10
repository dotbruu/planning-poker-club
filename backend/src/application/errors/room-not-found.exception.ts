export class RoomNotFoundException extends Error {
  constructor() {
    super(`This room not found`);
    this.name = 'RoomNotFoundException';
  }
}
