import { ComponentConstructor, ServiceConstructor } from "@renderer/types/constructors";
import { ModuleConfig } from "@renderer/types/decoratorConfig";

/**
 * @remarks angular의 모든 스펙을 구현하지 않고, Component, Service만을 우선 지원하도록 개발합니다.
 */
export class NgModuleRef {

    // @ts-ignore
    private declarations: ComponentConstructor[];
    // @ts-ignore
    private providers: ServiceConstructor[];
    // @ts-ignore
    private bootstrap?: ComponentConstructor;

    /**
     * Component, Service를 등록하고, bootstrap 옵션이 있는 경우 해당 컴포넌트를 루트 컴포넌트로 등록합니다.
     * 
     * @param config Module Decorator로부터 추출된 ModuleConfig
     */
    constructor(config: ModuleConfig) {
        const { declarations, providers, bootstrap } = config;
        
        this.declarations = declarations ?? [];
        this.providers = providers ?? [];
        this.bootstrap = bootstrap[0];
    }
    
    // TODO: boostraper에게 bootstrap 대상이 될 컴포넌트를 공개하는 기능이 필요하다.

}
