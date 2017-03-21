import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { setStatusBarColors, BackendService, LoginService } from "./shared";
import { authProviders, appRoutes,navigatableComponents } from "./app.routing";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";


setStatusBarColors();

@NgModule({
    bootstrap: [
        AppComponent
    ],
    providers: [
    BackendService,
    LoginService,
    authProviders
  ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(appRoutes),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ...navigatableComponents,
       
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
