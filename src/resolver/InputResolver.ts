import { SiteConfig } from '../siteConfig';
import { readBlock } from '../functor/readBlock';
import { Result } from '../result';
import { getNewError } from '../result/getNewError';
import { getNewOk } from '../result/getNewOk';

export class InputResolver {
  constructor(private siteConfig: SiteConfig) {}

  readInput<I>(pageName: string, blockName: string, inputName: string): Result<I> {
    const { ok, error } = readBlock(this.siteConfig, pageName, blockName);

    if (!ok) {
      return { error };
    }

    const input = ok.inputs.filter(input => input.name === inputName)[0];

    if (!input) {
      return getNewError('input is missing');
    }

    return getNewOk(input.value as I);
  }
}
