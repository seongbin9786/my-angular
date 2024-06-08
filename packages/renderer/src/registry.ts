import { NgModuleRef } from "./NgModuleRef";

type ModuleConstructor = Function;

export class NgModuleRefRegistry {
    private mapping: Map<Function, NgModuleRef> = new Map();

    register(moduleConstructor: ModuleConstructor, moduleRef: NgModuleRef) {
        this.mapping.set(moduleConstructor, moduleRef);
    }
}
