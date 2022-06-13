export class ViewResolver {
  // constructor(private siteConfig: SiteConfig) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  readView<C>(pageName: string, blockName: string, inputName: string): Promise<Record<string, C> | undefined> {
    // let block = readBlock(this.siteConfig, pageName, blockName);
    // let input = block.inputs.filter((input) => input.name === inputName)[0];
    //
    // return input.value as I;

    throw new Error('not yet implemented');
  }
}
