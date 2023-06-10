export class Result<T> {
  public isSuccess: boolean;

  public isFailure: boolean;

  public error?: Error;

  private value?: T;

  private constructor(isSuccess: boolean, error?: Error, value?: T) {
    this.isSuccess = isSuccess;
    this.isFailure = !isSuccess;
    this.error = error;
    this.value = value;
    Object.freeze(this);
  }

  public getValue(): T {
    if (!this.isSuccess || typeof this.value == 'undefined') {
      throw new Error(`Cant retrieve the value from a failed result.`);
    }

    return this.value;
  }

  public static ok<U>(value?: U): Result<U> {
    return new Result<U>(true, undefined, value);
  }

  public static fail<U>(error: Error): Result<U> {
    return new Result<U>(false, error);
  }
}
