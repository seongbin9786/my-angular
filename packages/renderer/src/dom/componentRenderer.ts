import { ComponentRegistry } from "@renderer/registries/ComponentRegistry";
import { ComponentConstructor } from "@renderer/types/constructors";

export class ComponentRenderer {
  private static instance: ComponentRenderer | null;

  static getInstance() {
    if (!ComponentRenderer.instance) {
      ComponentRenderer.instance = new ComponentRenderer();
    }
    return ComponentRenderer.instance;
  }

  mount(componentConstructor: ComponentConstructor) {
    const componentConfig =
      ComponentRegistry.getInstance().getConfig(componentConstructor);
    if (!componentConfig) {
      throw new Error(
        `[ComponentRenderer] Component Config is not found for [${componentConstructor.name}]`,
      );
    }

    const { selector, template } = componentConfig;

    const rootElement = document.getElementsByTagName(selector)?.[0];
    if (!rootElement) {
      throw new Error(
        `[ComponentRenderer] Root Element is not found for [${selector}] (${componentConstructor.name})`,
      );
    }

    const parentElement = rootElement.parentElement;
    if (!parentElement) {
      throw new Error(
        `[ComponentRenderer] Parent Element is not found for [${selector}] (${componentConstructor.name})`,
      );
    }

    const componentInstance =
      ComponentRegistry.getInstance().getRef(componentConstructor);
    // FIXME: 이렇게 하면 private field에 접근할 수 없습니다.
    // TODO: 각 값의 타입에 따라 다른 처리를 해야 할 수도 있습니다.
    const evaluatedTemplate = template.replace(/{{(\w+)}}/g, (_, propName) => {
      if (componentInstance[propName] === undefined) {
        throw new Error(
          `[ComponentRenderer] No such propery while rendering: [${propName}] (${componentConstructor.name})`,
        );
      }
      return String(componentInstance[propName]);
    });

    // TODO: VDOM으로 만들어야 이벤트 바인딩을 처리할 수 있습니다. (아 . . .)
    parentElement.innerHTML = evaluatedTemplate;

    console.log(
      `[ComponentRenderer] Root Component is mounted: [${componentConstructor.constructor.name}]`,
    );
  }
}
