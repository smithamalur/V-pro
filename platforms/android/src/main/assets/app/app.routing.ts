import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ClientMasterComponent } from "./clientMaster/clientmaster.component";
import { AuthGuard } from "./auth-guard.service";

export const authProviders = [
  AuthGuard
];
export const appRoutes = [
    {path: "", component: LoginComponent },
    //{path: "clientMaster", component: ClientMasterComponent}
   
];

export const navigatableComponents = [
  LoginComponent,
  ClientMasterComponent
  
  
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(appRoutes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }