import { componentRegistryInstance, moduleRegistryInstance, serviceRegistryInstance } from "./instances/registry-instances";
import { ComponentConstructor, ModuleConstructor, ServiceConstructor } from "./types/constructors";
import { ComponentConfig, ModuleConfig } from "./types/decoratorConfig";

/**
 * @param componentConfig Component는 Config가 필수 입력입니다.
 */
export const Component = (componentConfig: ComponentConfig) => {
    if (!componentConfig) {
        throw new Error('Component decorator must be called with config');
    }

    return function registerComponentConfig(componentConstructor: ComponentConstructor) {
        if (!(componentConstructor instanceof Function)) {
            throw new Error('Component decorator must be used to classess');
        }

        // 파라미터가 있다면 배열로, 없으면 undefined로 반환됩니다.
        // FIXME: 
        const typesOfParameters: ServiceConstructor[] = Reflect.getMetadata('design:paramtypes', componentConstructor) ?? [];
        componentRegistryInstance.registerDependencies(componentConstructor, typesOfParameters);
        componentRegistryInstance.registerConfig(componentConstructor, componentConfig);
    }
}

/**
 * @remarks 현재는 추가 입력이 없습니다.
 * @todo 서비스 Config가 필요한 시점에는 `registerConfig` 호출을 추가할 예정입니다.
 */
export const Injectable = () => {
    return (serviceConstructor: ServiceConstructor) => {
        if (!(serviceConstructor instanceof Function)) {
            throw new Error('Injectable decorator must be used to classess');
        }

        const typesOfParameters: ServiceConstructor[] = Reflect.getMetadata('design:paramtypes', serviceConstructor) ?? [];
        serviceRegistryInstance.registerDependencies(serviceConstructor, typesOfParameters);
    }
}

/**
 * @param moduleConfig Module은 Config가 필수 입력입니다.
 */
export const NgModule = (moduleConfig: ModuleConfig) => {
    if (!moduleConfig) {
        throw new Error('NgModule decorator must be called with config');
    }

    return function registerNgModuleConfig(moduleConstructor: ModuleConstructor) {
        if (!(moduleConstructor instanceof Function)) {
            throw new Error('NgModule decorator must be used to classess');
        }
        moduleRegistryInstance.registerConfig(moduleConstructor, moduleConfig);
    }
}
