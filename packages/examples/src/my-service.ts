import { Injectable } from "@my-angular/renderer";

@Injectable()
export class MyService {

    doSomeService() {
        console.log('doing service!');
    }
}
