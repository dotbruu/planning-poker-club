export class UserNotFoundException extends Error {
  constructor() {
    super(`This user not found`);
    this.name = 'UserNotFoundException';
  }
}
