import { ModuleConstructor } from "@/types/constructors";
import { ModuleConfig } from "@/types/decoratorConfig";

export class NgModuleConfigAndRefRegistry {
    private configMapping: Map<Function, ModuleConfig> = new Map();

    registerConfig(moduleConstructor: ModuleConstructor, moduleConfig: ModuleConfig) {
        if (this.configMapping.has(moduleConstructor)) {
            throw new Error(`NgModuleRef already exists for ${moduleConstructor.name}`);
        }
        this.configMapping.set(moduleConstructor, moduleConfig);
        console.log("[NgModuleConfigAndRefRegistry] module registered!", moduleConfig);
    }
    
    getConfig(moduleConstructor: ModuleConstructor) {
        if (!this.configMapping.has(moduleConstructor)) {
            throw new Error(`ModuleRef not found for ${moduleConstructor.name}`);
        }
        return this.configMapping.get(moduleConstructor);
    }
}
