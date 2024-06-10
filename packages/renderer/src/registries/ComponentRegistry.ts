import { ComponentConstructor, ServiceConstructor } from "@renderer/types/constructors";
import { ComponentConfig } from "@renderer/types/decoratorConfig";

export class ComponentRegistry {
    private configMapping: Map<ComponentConstructor, ComponentConfig> = new Map();
    private dependenciesMapping: Map<ComponentConstructor, ServiceConstructor[]> = new Map();

    registerConfig(componentConstructor: ComponentConstructor, componentConfig: ComponentConfig) {
        if (this.configMapping.has(componentConstructor)) {
            throw new Error(`Component Config already exists for ${componentConstructor.name}`);
        }
        this.configMapping.set(componentConstructor, componentConfig);
        console.log("[ComponentRegistry] component registered!", componentConfig);
    }

    registerDependencies(componentConstructor: ComponentConstructor, dependencies: ServiceConstructor[]) {
        if (this.dependenciesMapping.has(componentConstructor)) {
            throw new Error(`Component Dependencies already exists for ${componentConstructor.name}`);
        }
        this.dependenciesMapping.set(componentConstructor, dependencies);
        console.log("[ComponentRegistry] dependencies registered!", dependencies);
    }
    
    getConfig(componentConstructor: ComponentConstructor) {
        if (!this.configMapping.has(componentConstructor)) {
            throw new Error(`Component Config not found for ${componentConstructor.name}`);
        }
        return this.configMapping.get(componentConstructor);
    }
}
