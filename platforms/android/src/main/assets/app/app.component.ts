import { Component } from "@angular/core";
import { setStatusBarColors } from "./utils/status-bar-utils";


@Component({
    selector: "main",
    templateUrl: "app.component.html",
})
export class AppComponent {
   constructor() {
    setStatusBarColors();
  }  
 }

