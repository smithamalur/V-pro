import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { ClientMasterComponent } from "./pages/clientMaster/clientmaster.component";


export const routes = [
    { path: "", component: LoginComponent },
    {path: "clientMaster", component: ClientMasterComponent}
   
];

export const navigatableComponents = [
  LoginComponent,
  ClientMasterComponent
  
  
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }