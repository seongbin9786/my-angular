import { Injectable } from "@my-angular/renderer";

@Injectable()
export class MyRootService {
  doSomeService() {
    console.log("doing root service!");
  }
}
