import { ComponentConstructor } from "@/types/constructors";
import { ComponentConfig } from "@/types/decoratorConfig";

export class ComponentConfigAndRefRegistry {
    private configMapping: Map<Function, ComponentConfig> = new Map();

    registerConfig(componentConstructor: ComponentConstructor, componentConfig: ComponentConfig) {
        if (this.configMapping.has(componentConstructor)) {
            throw new Error(`ComponentRef already exists for ${componentConstructor.name}`);
        }
        this.configMapping.set(componentConstructor, componentConfig);
        console.log("[ComponentConfigAndRefRegistry] component registered!", componentConfig);
    }
    
    getConfig(componentConstructor: ComponentConstructor) {
        if (!this.configMapping.has(componentConstructor)) {
            throw new Error(`ComponentRef not found for ${componentConstructor.name}`);
        }
        return this.configMapping.get(componentConstructor);
    }
}
