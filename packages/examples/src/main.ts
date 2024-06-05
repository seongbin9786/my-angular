import { Component, Injectable, NgModule } from '@my-angular/renderer';

@Injectable
class MyService {

    doSomeService() {
        console.log('doing service!');
    }
}

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
class MyComponent {
    callCounter: number = 0;

    constructor(private myService: MyService) {
    }

    handleClick() {
        this.callCounter++;

        console.log(`handle click for ${this.callCounter} times!`);
        
        this.myService.doSomeService();
    }
}

// NgModule에서는 
@NgModule({
    declarations: [],
    imports: [],
    providers: [],
    bootstrap: null,
})
export class MyModule {} // ㅋㅋ 어디서도 안 씀ㅋ

const x = new MyComponent(new MyService());

// html 바인딩이 매우 필요하다...!
// 처음에는 template string을 쓰는 게 맞을 듯? html을 다 읽어들여야 하려나...
x.handleClick();
