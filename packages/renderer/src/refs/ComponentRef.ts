import { ComponentConfig } from "@/types/decoratorConfig";

/**
 * @remarks angular의 모든 스펙을 구현하지 않고, selector, template만 우선 지원하도록 개발합니다.
 */
export class ComponentRef {
    private selector: string;
    private template: string;

    /**
     * Component, Service를 등록하고, bootstrap 옵션이 있는 경우 해당 컴포넌트를 루트 컴포넌트로 등록합니다.
     * 
     * @param config Component Decorator로부터 추출된 ComponentConfig
     */
    constructor(config: ComponentConfig) {
        const { selector, template } = config;
        
        this.selector = selector;
        this.template = template;
    }

}
