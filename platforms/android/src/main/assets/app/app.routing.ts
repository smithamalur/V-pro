import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";


export const routes = [
    { path: "", component: LoginComponent },
   
];

export const navigatableComponents = [
  LoginComponent,
  
  
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }