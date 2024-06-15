import { ComponentConstructor, ServiceConstructor } from "@renderer/types/constructors";
import { ComponentConfig } from "@renderer/types/decoratorConfig";

export class ComponentRegistry {
    private configMapping = new Map<ComponentConstructor, ComponentConfig>();
    private dependenciesMapping = new Map<ComponentConstructor, ServiceConstructor[]>();

    registerConfig(componentConstructor: ComponentConstructor, componentConfig: ComponentConfig) {
        if (this.configMapping.has(componentConstructor)) {
            throw new Error(`Component Config already exists for ${componentConstructor.name}`);
        }
        this.configMapping.set(componentConstructor, componentConfig);
        console.log(`[ComponentRegistry] [${componentConstructor.name}] registered - config:`, componentConfig);
    }

    registerDependencies(componentConstructor: ComponentConstructor, dependencies: ServiceConstructor[]) {
        if (this.dependenciesMapping.has(componentConstructor)) {
            throw new Error(`Component Dependencies already exists for ${componentConstructor.name}`);
        }
        this.dependenciesMapping.set(componentConstructor, dependencies);
        console.log(`[ComponentRegistry] [${componentConstructor.name}]'s dependencies registered: `, dependencies);
    }
    
    getConfig(componentConstructor: ComponentConstructor) {
        if (!this.configMapping.has(componentConstructor)) {
            throw new Error(`Component Config not found for ${componentConstructor.name}`);
        }
        return this.configMapping.get(componentConstructor);
    }
}
