import { ComponentConstructor, ServiceConstructor } from "@/types/constructors";

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
