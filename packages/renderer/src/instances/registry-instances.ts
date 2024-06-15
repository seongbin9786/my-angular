import { ComponentRegistry } from "@renderer/registries/ComponentRegistry";
import { NgModuleRegistry } from "@renderer/registries/NgModuleRegistry";
import { ServiceRegistry } from "@renderer/registries/ServiceRegistry";

/**
 * @summary Angular 내부적으로, 사용자 애플리케이션에 사용되는 데코레이터에서 직접 사용되는 싱글톤 registry입니다.
 * @remarks Angular 초기화 이전에 사용자의 코드가 평가되기 때문에(import 문을 통해서) 필요합니다.
 * @todo registry instance를 모듈 단위로 관리하지 않는 방법 찾아보기
 * @todo 내부 객체들도 DI로 관리하기
 */
export const moduleRegistryInstance = new NgModuleRegistry();

export const componentRegistryInstance = new ComponentRegistry();

export const serviceRegistryInstance = new ServiceRegistry();
