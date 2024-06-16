import { NgModule } from "@my-angular/renderer";
import { MyComponent } from "./my-component";
import { MyService } from "./my-service";

@NgModule({
  declarations: [MyComponent],
  imports: [],
  providers: [MyService],
  bootstrap: [MyComponent],
})
export class MyModule {}
