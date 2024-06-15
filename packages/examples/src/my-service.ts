import { Injectable } from "@my-angular/renderer";
import { MyRootService } from "./my-root-service";

@Injectable()
export class MyService {

    constructor(private service: MyRootService) {
        console.log('MyService constructor!');
    }

    doSomeService() {
        this.service.doSomeService();
        console.log('doing my service!');
    }
}
