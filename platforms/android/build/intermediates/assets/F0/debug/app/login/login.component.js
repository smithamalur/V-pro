"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var connectivity_1 = require("connectivity");
var page_1 = require("ui/page");
var login_service_1 = require("../shared/login.service");
var user_model_1 = require("../shared/user.model");
var LoginComponent = (function () {
    function LoginComponent(router, loginService, page) {
        this.router = router;
        this.loginService = loginService;
        this.page = page;
        this.isLoggingIn = true;
        this.isAuthenticating = false;
        this.user = new user_model_1.User();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    LoginComponent.prototype.submit = function () {
        this.isAuthenticating = true;
        if (this.isLoggingIn) {
            this.login();
        }
    };
    LoginComponent.prototype.login = function () {
        alert("submitted");
        try {
            if (connectivity_1.getConnectionType() === connectivity_1.connectionType.none) {
                alert("Vessel-Pro requires an internet connection to log in.");
                return;
            }
        }
        catch (error) {
            console.log(error);
        }
        // try {
        //   this.loginService.login(this.user)
        //   .subscribe( 
        //     () => {
        //     // this.isAuthenticating = false;
        //      // this.router.navigate(["clientMaster"]);
        //     },
        //     (error) => {
        //       alert("Unfortunately we could not find your account.");
        //       this.isAuthenticating = false;
        //       this.router.navigate(["clientMaster"]);
        //     }
        //   );
        // } catch (error) {
        //   console.log(error.message);
        // }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "vp-login",
        moduleId: module.id,
        providers: [login_service_1.LoginService],
        templateUrl: "./login.component.html",
        styleUrls: ["./login.component.css", "./login.css"],
    }),
    __metadata("design:paramtypes", [router_1.Router,
        login_service_1.LoginService,
        page_1.Page])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBeUU7QUFDekUsMENBQXlDO0FBRXpDLDZDQUFpRTtBQUlqRSxnQ0FBK0I7QUFFOUIseURBQXVEO0FBQ3ZELG1EQUE0QztBQVU3QyxJQUFhLGNBQWM7SUFLekIsd0JBQW9CLE1BQWMsRUFDeEIsWUFBMkIsRUFDM0IsSUFBVTtRQUZBLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQWU7UUFDM0IsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUxwQixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFLdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUEsaUNBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBR0YsK0JBQU0sR0FBTjtRQUNHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDNUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQztJQUNMLENBQUM7SUFHRSw4QkFBSyxHQUFMO1FBQ0UsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQztZQUNGLEVBQUUsQ0FBQyxDQUFDLGdDQUFpQixFQUFFLEtBQUssNkJBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNyRCxLQUFLLENBQUMsdURBQXVELENBQUMsQ0FBQztnQkFDN0QsTUFBTSxDQUFDO1lBQ1QsQ0FBQztRQUNELENBQUM7UUFBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixDQUFDO1FBR0gsUUFBUTtRQUNSLHVDQUF1QztRQUN2QyxpQkFBaUI7UUFDakIsY0FBYztRQUNkLHdDQUF3QztRQUN4QyxrREFBa0Q7UUFDbEQsU0FBUztRQUNULG1CQUFtQjtRQUNuQixnRUFBZ0U7UUFDaEUsdUNBQXVDO1FBQ3ZDLGdEQUFnRDtRQUNoRCxRQUFRO1FBQ1IsT0FBTztRQUNQLG9CQUFvQjtRQUNwQixnQ0FBZ0M7UUFDaEMsSUFBSTtJQUlMLENBQUM7SUFFSixxQkFBQztBQUFELENBQUMsQUF6REQsSUF5REM7QUF6RFksY0FBYztJQVAxQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7UUFDekIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxhQUFhLENBQUM7S0FDcEQsQ0FBQztxQ0FNNEIsZUFBTTtRQUNULDRCQUFZO1FBQ3JCLFdBQUk7R0FQVCxjQUFjLENBeUQxQjtBQXpEWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XHJcbmltcG9ydCB7IGNvbm5lY3Rpb25UeXBlLCBnZXRDb25uZWN0aW9uVHlwZSB9IGZyb20gXCJjb25uZWN0aXZpdHlcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uIH0gZnJvbSBcInVpL2FuaW1hdGlvblwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xyXG5pbXBvcnQgeyBwcm9tcHQgfSBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcclxuIGltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvbG9naW4uc2VydmljZVwiO1xyXG4gaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9zaGFyZWQvdXNlci5tb2RlbFwiO1xyXG4gXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2cC1sb2dpblwiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgcHJvdmlkZXJzOiBbTG9naW5TZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2xvZ2luLmNvbXBvbmVudC5jc3NcIiwgXCIuL2xvZ2luLmNzc1wiXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICB1c2VyOiBVc2VyO1xyXG4gIGlzTG9nZ2luZ0luID0gdHJ1ZTtcclxuICBpc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIGxvZ2luU2VydmljZSA6IExvZ2luU2VydmljZSxcclxuICAgIHByaXZhdGUgcGFnZTogUGFnZSkge1xyXG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcclxuICB9XHJcblxyXG4gICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiBcclxuIHN1Ym1pdCgpe1xyXG4gICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gdHJ1ZTtcclxuICAgICBpZiAodGhpcy5pc0xvZ2dpbmdJbikge1xyXG4gICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgIH1cclxuIH1cclxuXHJcblxyXG4gICAgbG9naW4oKSB7XHJcbiAgICAgIGFsZXJ0KFwic3VibWl0dGVkXCIpO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgICBpZiAoZ2V0Q29ubmVjdGlvblR5cGUoKSA9PT0gY29ubmVjdGlvblR5cGUubm9uZSkge1xyXG4gICAgICBhbGVydChcIlZlc3NlbC1Qcm8gcmVxdWlyZXMgYW4gaW50ZXJuZXQgY29ubmVjdGlvbiB0byBsb2cgaW4uXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgIFxyXG5cclxuICAgIC8vIHRyeSB7XHJcbiAgICAvLyAgIHRoaXMubG9naW5TZXJ2aWNlLmxvZ2luKHRoaXMudXNlcilcclxuICAgIC8vICAgLnN1YnNjcmliZSggXHJcbiAgICAvLyAgICAgKCkgPT4ge1xyXG4gICAgLy8gICAgIC8vIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJjbGllbnRNYXN0ZXJcIl0pO1xyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAvLyAgICAgICBhbGVydChcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IGZpbmQgeW91ciBhY2NvdW50LlwiKTtcclxuICAgIC8vICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiY2xpZW50TWFzdGVyXCJdKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICk7XHJcbiAgICAvLyB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgLy8gICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcclxuICAgIC8vIH1cclxuICAgIFxyXG4gIFxyXG5cclxuICAgfVxyXG4gXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ==