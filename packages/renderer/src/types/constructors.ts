export interface ModuleConstructor extends Function {};

export interface ComponentConstructor extends Function {
    new(): ComponentConstructor;
};

export interface ServiceConstructor extends Function {
    new(): ServiceConstructor;
};
