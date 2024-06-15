import { AllConstructor, ComponentConstructor, ServiceConstructor } from "@renderer/types/constructors";

export interface ComponentConfig {
    selector: string;
    template: string;
}

export interface ModuleConfig {
    declarations: ComponentConstructor[],
    imports: AllConstructor[],
    providers: ServiceConstructor[],
    bootstrap: ComponentConstructor[],
}
