import { componentConfigAndRefRegistry, moduleConfigAndRefRegistry, serviceRefRegistry } from "./instances/registry-instances";
import { ModuleConstructor } from "./types/constructors";
import { ComponentConfig, ModuleConfig } from "./types/decoratorConfig";

// decorator factory의 인자가 optional이어야 `@Component()`와 같이 호출 가능합니다.
// factory 형식이면서 `@Component`처럼 `()` 호출 구문을 생략할 수는 없습니다.
export const Component = (componentConfig?: ComponentConfig) => {
    return (target: any) => {
        if (!componentConfig) {
            throw new Error('Component decorator must be called with config');
        }
        if (!(target instanceof Function)) {
            throw new Error('Component decorator must be used to classess');
        }
        componentConfigAndRefRegistry.registerConfig(target, componentConfig);
    }
}

export const Injectable = () => {
    return (target: any) => {
        if (!(target instanceof Function)) {
            throw new Error('Injectable decorator must be used to classess');
        }
        serviceRefRegistry.registerRef(target);
    }
}

// Decorator Factory --- accepts parameters
export const NgModule = (moduleConfig: ModuleConfig) => {

    console.log("NgModule Decorator Factory called!", moduleConfig);

    return function registerModule(moduleConstructor: ModuleConstructor) {
        moduleConfigAndRefRegistry.registerConfig(moduleConstructor, moduleConfig);
    }
}
