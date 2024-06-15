import "reflect-metadata";
import { Component, bootstrapModule } from "@my-angular/renderer";

@Component({
  selector: "my-component",
  template: ` <h1>Hello, Angular!</h1> `,
})
class MyComponent {
  constructor() {
    console.log("MyComponent created");
  }
}

bootstrapModule(MyComponent);
