import { moduleConfigAndRefRegistry } from "./instances/registry-instances";
import { ModuleConstructor } from "./types/constructors";

/**
 * @summary 애플리케이션의 진입점입니다.
 * @param rootModule 루트 모듈
 */
export const bootstrapModule = (rootModule: ModuleConstructor) => {
  /*
  1. 가져온 module의 데코레이터 정보로 모듈의 각 파일을 등록한다.
    - 모듈의 경우 대부분 생성자를 직접 받을 것이다.
  */
  console.log('bootstrapModule called');

  const rootModuleRef = moduleConfigAndRefRegistry.getConfig(rootModule);

  console.log('rootModule - that was registered - found:', rootModuleRef);
}
