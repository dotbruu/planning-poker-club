import { Result } from './result';

export interface Service<PayloadType, ResultType> {
  execute: (payload: PayloadType) => Promise<Result<ResultType>>;
}
