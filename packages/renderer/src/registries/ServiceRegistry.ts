import { ServiceConstructor } from "@renderer/types/constructors";

/**
 * @summary Service의 생성자를 받아 singleton으로 인스턴스를 반환합니다.
 * @remarks Service의 경우 현재 단순 생성만 필요하므로, 의존성 주입을 구현하지 않습니다.
 */
export class ServiceRegistry {
    private refMapping = new Map<ServiceConstructor, ServiceConstructor>();
    private dependenciesMapping = new Map<ServiceConstructor, ServiceConstructor[]>();

    registerDependencies(serviceConstructor: ServiceConstructor, dependencies: ServiceConstructor[]) {
        if (this.dependenciesMapping.has(serviceConstructor)) {
            throw new Error(`Service Dependencies already exists for ${serviceConstructor.name}`);
        }
        this.dependenciesMapping.set(serviceConstructor, dependencies);
        console.log(`[ServiceRegistry] [${serviceConstructor.name}]'s dependencies registered:`, dependencies);
    }
    
    /**
     * @remarks 현재는 Service의 의존성 주입을 구현하지 않습니다. (Service는 생성자 주입 불가능)
     * @description 현재는 단순하게 생성자를 호출하여 인스턴스를 반환합니다.
     * 
     * 1. providers를 위상 정렬하여 순서대로 생성합니다.
     * `const providerConfigs = this.providers.map((serviceConstructor) => serviceRegistryInstance.getRef(serviceConstructor));`
     * 
     * 2. 위상 정렬 도중 오류가 발생하면 예외를 발생시키고 앱을 종료합니다.
     * 
     * 3. 모든 서비스 생성이 완료되면, 컴포넌트를 생성합니다.
    */
    getRef(serviceConstructor: ServiceConstructor) {
        const serviceInstance = this.refMapping.get(serviceConstructor);

        if (!serviceInstance) {
            // FIXME: ServiceConstructor 타입 단언 제거하기
            const newInstance: ServiceConstructor = new serviceConstructor();
            this.refMapping.set(serviceConstructor, newInstance);
            return newInstance;
        }

        return serviceInstance;
    }
}
