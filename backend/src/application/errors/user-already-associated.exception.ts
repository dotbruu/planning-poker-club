export class UserAlreadyAssociatedException extends Error {
  constructor() {
    super(`This user already associated with room`);
    this.name = 'UserAlreadyAssociatedException';
  }
}
