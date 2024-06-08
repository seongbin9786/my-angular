import { ComponentConfigAndRefRegistry } from "@renderer/registries/ComponentRefRegistry";
import { NgModuleConfigAndRefRegistry } from "@renderer/registries/NgModuleRefRegistry";
import { ServiceRefRegistry } from "@renderer/registries/ServiceRegistry";

/**
 * @summary Angular 내부적으로, 사용자 애플리케이션에 사용되는 데코레이터에서 직접 사용되는 싱글톤 registry입니다.
 * @remarks Angular 초기화 이전에 사용자의 코드가 평가되기 때문에(import 문을 통해서) 필요합니다.
 * @todo registry instance를 모듈 단위로 관리하지 않는 방법 찾아보기
 */
export const moduleConfigAndRefRegistry = new NgModuleConfigAndRefRegistry();

export const componentConfigAndRefRegistry = new ComponentConfigAndRefRegistry();

export const serviceRefRegistry = new ServiceRefRegistry();
