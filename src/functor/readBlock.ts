import { Block, SiteConfig } from '../siteConfig';
import { Result } from '../result';
import { getNewError } from '../result/getNewError';
import { getNewOk } from '../result/getNewOk';

export const readBlock = (siteConfig: SiteConfig, pageName: string, blockName: string): Result<Block> => {
  const page = siteConfig.pages.filter(page => page.name === pageName)[0];

  if (!page) {
    return getNewError('page is missing');
  }

  const block = page.blocks.filter(block => block.name === blockName)[0];

  if (!block) {
    return getNewError('block is missing');
  }

  return getNewOk(block);
};
