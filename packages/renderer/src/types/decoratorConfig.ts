import { ComponentConstructor, ServiceConstructor } from "@renderer/types/constructors";

export interface ComponentConfig {
    selector: string;
    template: string;
}

export interface ModuleConfig {
    declarations: ComponentConstructor[],
    imports: Function[],
    providers: ServiceConstructor[],
    bootstrap: ComponentConstructor[],
}
