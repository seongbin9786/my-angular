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
    
    getRef(serviceConstructor: ServiceConstructor) {
        if (!this.refMapping.has(serviceConstructor)) {
            throw new Error(`ServiceRef not found for ${serviceConstructor.name}`);
        }
        const newInstance = new serviceConstructor();
        this.refMapping.set(serviceConstructor, newInstance);
        return this.refMapping.get(serviceConstructor);
    }
}
