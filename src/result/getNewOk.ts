import { Result } from './Result';

export const getNewOk = <O>(ok: O): Result<O> => {
  return { ok };
};
