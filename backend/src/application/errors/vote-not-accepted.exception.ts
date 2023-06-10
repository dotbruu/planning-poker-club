export class VoteNotAcceptedException extends Error {
  constructor() {
    super(`This vote not is included on deck votes`);
    this.name = 'VoteNotcceptedException';
  }
}
