export interface ModuleConstructor extends Function {};

export interface ComponentConstructor extends Function {
    new(...args: any[]): any;
};

export interface ServiceConstructor extends Function {
    new(...args: any[]): any;
};
