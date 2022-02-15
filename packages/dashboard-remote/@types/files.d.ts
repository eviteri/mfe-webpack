/** Fixes issues with importing svg files as modules */
declare module "*.svg" {
  const content: string;
  export default content;
}

/** Fixes issues with importing png files as modules */
declare module "*.png" {
  const value: any;
  export = value;
}

declare module "*.pdf";
