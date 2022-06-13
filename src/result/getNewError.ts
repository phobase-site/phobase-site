import { Result } from './Result';

export const getNewError = <O>(error: string): Result<O> => {
  return { error: new Error(error) };
};
