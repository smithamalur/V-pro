import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ClientMasterComponent } from "./clientMaster/clientmaster.component";
import { SrtListComponent} from "./srtdetails/srtdetails.component";
import {AnnouncementsComponent} from "./announcements/announcements.component";
import { AuthGuard } from "./auth-guard.service";
import  {CalenderComponent} from "./calender/calender.component"

export const authProviders = [
  AuthGuard
];
export const appRoutes = [
    {path: "", component: LoginComponent },
    {path: "clientMaster", component: ClientMasterComponent},
    {path: "srtDetails", component: SrtListComponent},
    {path: "announcements", component: AnnouncementsComponent},
    {path: "calender", component: CalenderComponent}

   
];

export const navigatableComponents = [
  LoginComponent,
  ClientMasterComponent,
  SrtListComponent,
  AnnouncementsComponent,
  CalenderComponent  
  
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(appRoutes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }