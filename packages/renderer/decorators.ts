interface ComponentConfig {
    selector?: string;
    template?: string;
}

interface ModuleConfig {
    declarations: [],
    imports: [],
    providers: [],
    bootstrap: [],
}

// decorator factory의 인자가 optional이어야 `@Component()`와 같이 호출 가능합니다.
// factory 형식이면서 `@Component`처럼 `()` 호출 구문을 생략할 수는 없습니다.
export const Component = (componentConfig?: ComponentConfig) => {
    return (target: any) => {
        if (!(target instanceof Function)) {
            throw new Error('Component decorator must be used to classess');
        }
        console.log("Component decorator called!", target);
    }
}

export const Injectable = (target: any) => {
    if (!(target instanceof Function)) {
        throw new Error('Injectable decorator must be used to classess');
    }
    console.log("Injectable decorator called!", target);
}

// Decorator Factory --- accepts parameters
export const NgModule = (moduleConfig: ModuleConfig) => {

    console.log("NgModule Decorator Factory called!", moduleConfig);

    return (target: any) => {
        console.log("NgModule decorator called!", target);
    }
}
