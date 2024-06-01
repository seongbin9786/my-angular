import { MyDecorator } from '@my-angular/renderer';

class MyInjectable {}

@MyDecorator
class Component {
    myVariable: string;

    constructor(public myInjectable: MyInjectable) {
    }

    handleClick() {
        this.myVariable = "clicked";
    }
}

const x = new Component(new MyInjectable());

x.handleClick();
