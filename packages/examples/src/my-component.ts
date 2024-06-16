import { Component } from "@my-angular/renderer";
import { MyService } from "./my-service";

// TODO: style도 지원하기
@Component({
  selector: "my-component",
  template: `
    <div>
      <div>hello world</div>
      <span>Welcome {{ callCounter }}!</span>
      <button (click)="handleClick()">Click me to raise the number!</button>
    </div>
  `,
})
export class MyComponent {
  callCounter = 12340;

  constructor(private myService: MyService) {}

  handleClick() {
    this.callCounter++;

    console.log(`handle click for ${this.callCounter} times!`);

    this.myService.doSomeService();
  }
}
