import {
  ComponentConstructor,
  ServiceConstructor,
} from "@renderer/types/constructors";
import { ComponentConfig } from "@renderer/types/decoratorConfig";
import { ServiceRegistry } from "./ServiceRegistry";

export class ComponentRegistry {
  private static instance: ComponentRegistry | null;

  static getInstance() {
    if (!ComponentRegistry.instance) {
      ComponentRegistry.instance = new ComponentRegistry();
    }
    return ComponentRegistry.instance;
  }
  private refMapping = new Map<ComponentConstructor, ComponentConstructor>();
  private configMapping = new Map<ComponentConstructor, ComponentConfig>();
  private dependenciesMapping = new Map<
    ComponentConstructor,
    ServiceConstructor[]
  >();

  registerConfig(
    componentConstructor: ComponentConstructor,
    componentConfig: ComponentConfig,
  ) {
    if (this.configMapping.has(componentConstructor)) {
      throw new Error(
        `Component Config already exists for ${componentConstructor.name}`,
      );
    }
    this.configMapping.set(componentConstructor, componentConfig);
    console.log(
      `[ComponentRegistry] [${componentConstructor.name}] registered - config:`,
      componentConfig,
    );
  }

  registerDependencies(
    componentConstructor: ComponentConstructor,
    dependencies: ServiceConstructor[],
  ) {
    if (this.dependenciesMapping.has(componentConstructor)) {
      throw new Error(
        `Component Dependencies already exists for ${componentConstructor.name}`,
      );
    }
    this.dependenciesMapping.set(componentConstructor, dependencies);
    console.log(
      `[ComponentRegistry] [${componentConstructor.name}]'s dependencies registered: `,
      dependencies,
    );
  }

  /**
   * @summary Lazy하게 컴포넌트 인스턴스를 생성해 반환합니다. 필요한 서비스 의존성을 생성자에 주입합니다.
   */
  getRef(componentConstructor: ComponentConstructor) {
    const componentInstance = this.refMapping.get(componentConstructor);

    if (!componentInstance) {
      const dependencies =
        this.dependenciesMapping.get(componentConstructor) ?? [];
      const serviceInstances = dependencies.map((serviceConstructor) =>
        ServiceRegistry.getInstance().getRef(serviceConstructor),
      );
      console.log(
        `[ComponentRegistry] services to be injected to [${componentConstructor.name}]:`,
        serviceInstances.map((service) => service.constructor.name),
      );

      const componentInstance = new componentConstructor(...serviceInstances);
      this.refMapping.set(componentConstructor, componentInstance);
      return componentInstance;
    }

    return componentInstance;
  }

  getConfig(componentConstructor: ComponentConstructor) {
    if (!this.configMapping.has(componentConstructor)) {
      throw new Error(
        `Component Config not found for [${componentConstructor.name}]`,
      );
    }
    return this.configMapping.get(componentConstructor);
  }
}
