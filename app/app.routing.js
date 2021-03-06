"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var login_component_1 = require("./login/login.component");
var clientmaster_component_1 = require("./clientMaster/clientmaster.component");
var srtdetails_component_1 = require("./srtdetails/srtdetails.component");
var announcements_component_1 = require("./announcements/announcements.component");
var auth_guard_service_1 = require("./auth-guard.service");
var calender_component_1 = require("./calender/calender.component");
exports.authProviders = [
    auth_guard_service_1.AuthGuard
];
exports.appRoutes = [
    { path: "", component: login_component_1.LoginComponent },
    { path: "clientMaster", component: clientmaster_component_1.ClientMasterComponent },
    { path: "srtDetails", component: srtdetails_component_1.SrtListComponent },
    { path: "announcements", component: announcements_component_1.AnnouncementsComponent },
    { path: "calender", component: calender_component_1.CalenderComponent }
];
exports.navigatableComponents = [
    login_component_1.LoginComponent,
    clientmaster_component_1.ClientMasterComponent,
    srtdetails_component_1.SrtListComponent,
    announcements_component_1.AnnouncementsComponent,
    calender_component_1.CalenderComponent
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.NativeScriptRouterModule.forRoot(exports.appRoutes)],
        exports: [router_1.NativeScriptRouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlDO0FBQ3pDLHNEQUF1RTtBQUV2RSwyREFBeUQ7QUFDekQsZ0ZBQThFO0FBQzlFLDBFQUFvRTtBQUNwRSxtRkFBK0U7QUFDL0UsMkRBQWlEO0FBQ2pELG9FQUFnRTtBQUVuRCxRQUFBLGFBQWEsR0FBRztJQUMzQiw4QkFBUztDQUNWLENBQUM7QUFDVyxRQUFBLFNBQVMsR0FBRztJQUNyQixFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7SUFDdEMsRUFBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSw4Q0FBcUIsRUFBQztJQUN4RCxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLHVDQUFnQixFQUFDO0lBQ2pELEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsZ0RBQXNCLEVBQUM7SUFDMUQsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxzQ0FBaUIsRUFBQztDQUduRCxDQUFDO0FBRVcsUUFBQSxxQkFBcUIsR0FBRztJQUNuQyxnQ0FBYztJQUNkLDhDQUFxQjtJQUNyQix1Q0FBZ0I7SUFDaEIsZ0RBQXNCO0lBQ3RCLHNDQUFpQjtDQUVsQixDQUFDO0FBTUYsSUFBYSxnQkFBZ0I7SUFBN0I7SUFBZ0MsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBQyxBQUFqQyxJQUFpQztBQUFwQixnQkFBZ0I7SUFKNUIsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLGlCQUFTLENBQUMsQ0FBQztRQUN0RCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztLQUN0QyxDQUFDO0dBQ1csZ0JBQWdCLENBQUk7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IENsaWVudE1hc3RlckNvbXBvbmVudCB9IGZyb20gXCIuL2NsaWVudE1hc3Rlci9jbGllbnRtYXN0ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTcnRMaXN0Q29tcG9uZW50fSBmcm9tIFwiLi9zcnRkZXRhaWxzL3NydGRldGFpbHMuY29tcG9uZW50XCI7XG5pbXBvcnQge0Fubm91bmNlbWVudHNDb21wb25lbnR9IGZyb20gXCIuL2Fubm91bmNlbWVudHMvYW5ub3VuY2VtZW50cy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gXCIuL2F1dGgtZ3VhcmQuc2VydmljZVwiO1xuaW1wb3J0ICB7Q2FsZW5kZXJDb21wb25lbnR9IGZyb20gXCIuL2NhbGVuZGVyL2NhbGVuZGVyLmNvbXBvbmVudFwiXG5cbmV4cG9ydCBjb25zdCBhdXRoUHJvdmlkZXJzID0gW1xuICBBdXRoR3VhcmRcbl07XG5leHBvcnQgY29uc3QgYXBwUm91dGVzID0gW1xuICAgIHtwYXRoOiBcIlwiLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0sXG4gICAge3BhdGg6IFwiY2xpZW50TWFzdGVyXCIsIGNvbXBvbmVudDogQ2xpZW50TWFzdGVyQ29tcG9uZW50fSxcbiAgICB7cGF0aDogXCJzcnREZXRhaWxzXCIsIGNvbXBvbmVudDogU3J0TGlzdENvbXBvbmVudH0sXG4gICAge3BhdGg6IFwiYW5ub3VuY2VtZW50c1wiLCBjb21wb25lbnQ6IEFubm91bmNlbWVudHNDb21wb25lbnR9LFxuICAgIHtwYXRoOiBcImNhbGVuZGVyXCIsIGNvbXBvbmVudDogQ2FsZW5kZXJDb21wb25lbnR9XG5cbiAgIFxuXTtcblxuZXhwb3J0IGNvbnN0IG5hdmlnYXRhYmxlQ29tcG9uZW50cyA9IFtcbiAgTG9naW5Db21wb25lbnQsXG4gIENsaWVudE1hc3RlckNvbXBvbmVudCxcbiAgU3J0TGlzdENvbXBvbmVudCxcbiAgQW5ub3VuY2VtZW50c0NvbXBvbmVudCxcbiAgQ2FsZW5kZXJDb21wb25lbnQgIFxuICBcbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KGFwcFJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9Il19