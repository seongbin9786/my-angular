import { componentRendererInstance } from "@renderer/instances/renderer-instances";
import { ComponentConstructor, ServiceConstructor } from "@renderer/types/constructors";
import { ModuleConfig } from "@renderer/types/decoratorConfig";

/**
 * @remarks angular의 모든 스펙을 구현하지 않고, Component, Service만을 우선 지원하도록 개발합니다.
 */
export class NgModuleRef {


    private declarations: ComponentConstructor[];
    private providers: ServiceConstructor[];
    private bootstrap?: ComponentConstructor;
    private isRoot: boolean;

    /**
     * Component, Service를 등록하고, bootstrap 옵션이 있는 경우 해당 컴포넌트를 루트 컴포넌트로 등록합니다.
     * 
     * @param config Module Decorator로부터 추출된 ModuleConfig
     */
    constructor(config: ModuleConfig, isRoot: boolean) {
        const { declarations, providers, bootstrap } = config;
        
        this.declarations = declarations ?? [];
        this.providers = providers ?? [];
        this.bootstrap = bootstrap[0];
        this.isRoot = isRoot;

        if (this.isRoot) {
            this.renderBootstrapComponent();
        }
    }
    
    /**
     * @summary 루트 컴포넌트를 렌더링합니다.
     */
    renderBootstrapComponent() {
        console.log('@@@@@ INSTANTIATE STARTS @@@@@');

        if (!this.bootstrap) {
            throw new Error('Bootstrap Component is not defined on root module.');
        }

        componentRendererInstance.mount(this.bootstrap);

        console.log('@@@@@ INSTANTIATE FINISHED @@@@@');
    }

}
