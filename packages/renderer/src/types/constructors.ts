// eslint-disable-next-line
export type ModuleConstructor = new(...args: any[]) => any;

// eslint-disable-next-line
export type ComponentConstructor = new(...args: any[]) => any;

// eslint-disable-next-line
export type ServiceConstructor = new(...args: any[]) => any;

export type AllConstructor =
  | ModuleConstructor
  | ComponentConstructor
  | ServiceConstructor;
