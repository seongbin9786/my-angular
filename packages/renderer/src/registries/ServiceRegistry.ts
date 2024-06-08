import { ServiceConstructor } from "@/types/constructors";

/**
 * @summary Service의 생성자를 받아 singleton으로 인스턴스를 반환합니다.
 * @remarks Service의 경우 현재 단순 생성만 필요하므로, 의존성 주입을 구현하지 않습니다.
 */
export class ServiceRefRegistry {
    private mapping: Map<ServiceConstructor, ServiceConstructor> = new Map();

    registerRef(serviceConstructor: ServiceConstructor) {
        if (this.mapping.has(serviceConstructor)) {
            throw new Error(`ServiceRef already exsists for ${serviceConstructor.name}`);
        }
        const newInstance = new serviceConstructor();
        this.mapping.set(serviceConstructor, newInstance);
        console.log("[ServiceRegRegistry] service registered and instantiated!", serviceConstructor);
    }
    
    getRef(serviceConstructor: ServiceConstructor) {
        if (!this.mapping.has(serviceConstructor)) {
            throw new Error(`ServiceRef not found for ${serviceConstructor.name}`);
        }
        return this.mapping.get(serviceConstructor);
    }
}
