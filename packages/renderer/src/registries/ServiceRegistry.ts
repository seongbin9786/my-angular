import { ServiceConstructor } from "@renderer/types/constructors";

/**
 * @summary Service의 생성자를 받아 singleton으로 인스턴스를 반환합니다.
 * @remarks Service의 경우 현재 단순 생성만 필요하므로, 의존성 주입을 구현하지 않습니다.
 */
export class ServiceRefRegistry {
    private mapping: Map<ServiceConstructor, ServiceConstructor> = new Map();

    getRef(serviceConstructor: ServiceConstructor) {
        if (!this.mapping.has(serviceConstructor)) {
            throw new Error(`ServiceRef not found for ${serviceConstructor.name}`);
        }
        const newInstance = new serviceConstructor();
        this.mapping.set(serviceConstructor, newInstance);
        return this.mapping.get(serviceConstructor);
    }
}
