import { Component } from "@my-angular/renderer";
import { MyService } from "./my-service";

// TODO: style도 지원하기
@Component({
    selector: 'my-component',
    template: `
    <div>
        <div>hello world</div>
        <span>for the {{callCounter}} times!</span>
    </div>
    `,
})
export class MyComponent {
    callCounter = 0;

    constructor(private myService: MyService) {
    }

    handleClick() {
        this.callCounter++;

        console.log(`handle click for ${this.callCounter} times!`);
        
        this.myService.doSomeService();
    }
}
