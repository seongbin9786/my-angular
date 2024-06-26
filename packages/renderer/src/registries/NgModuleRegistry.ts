import { NgModuleRef } from "@renderer/refs/NgModuleRef";
import { ModuleConstructor } from "@renderer/types/constructors";
import { ModuleConfig } from "@renderer/types/decoratorConfig";

export class NgModuleRegistry {
  private static instance: NgModuleRegistry | null;

  static getInstance() {
    if (!NgModuleRegistry.instance) {
      NgModuleRegistry.instance = new NgModuleRegistry();
    }
    return NgModuleRegistry.instance;
  }

  private configMapping = new Map<ModuleConstructor, ModuleConfig>();
  private refMapping = new Map<ModuleConstructor, NgModuleRef>();
  /** @summary 루트 모듈 여부를 판단할 때 최초로 로딩되는 모듈 여부를 사용합니다. */
  private hasRootModuleLoaded = false;

  registerConfig(
    moduleConstructor: ModuleConstructor,
    moduleConfig: ModuleConfig,
  ) {
    if (this.configMapping.has(moduleConstructor)) {
      throw new Error(
        `NgModule Config already exists for ${moduleConstructor.name}`,
      );
    }
    this.configMapping.set(moduleConstructor, moduleConfig);
    console.log(
      `[NgModuleRegistry] module [${moduleConstructor.name}] registered - config:`,
      moduleConfig,
    );
  }

  getConfig(moduleConstructor: ModuleConstructor) {
    if (!this.configMapping.has(moduleConstructor)) {
      throw new Error(
        `Module Config not found for [${moduleConstructor.name}]`,
      );
    }
    return this.configMapping.get(moduleConstructor);
  }

  /**
   * @summary 모듈의 생성자를 받아 모듈의 인스턴스를 반환합니다.
   * @description 모듈 별 최초 호출 시마다 ModuleRef를 생성합니다.
   */
  getRef(moduleConstructor: ModuleConstructor) {
    const moduleConfig = this.configMapping.get(moduleConstructor);
    if (!moduleConfig) {
      throw new Error(
        `ModuleRef not found for [${moduleConstructor.name}]. No config has been registered.`,
      );
    }

    const moduleRef = this.refMapping.get(moduleConstructor);
    if (moduleRef) {
      return moduleRef;
    }

    const newModuleRef = new NgModuleRef(
      moduleConfig,
      !this.hasRootModuleLoaded,
    );
    if (!this.hasRootModuleLoaded) {
      this.hasRootModuleLoaded = true;
    }

    this.refMapping.set(moduleConstructor, newModuleRef);
    console.log("[NgModuleRegistry] created new module ref:", newModuleRef);
    return newModuleRef;
  }
}
