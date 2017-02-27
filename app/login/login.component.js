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
        if (connectivity_1.getConnectionType() === connectivity_1.connectionType.none) {
            alert("Vessel-Pro requires an internet connection to log in.");
            return;
        }
        try {
            this.loginService.login(this.user)
                .subscribe(
            //(data) => this.data = data, // Reach here if res.status >= 200 && <= 299
            function () {
                alert("OK");
            }, function (error) {
                alert("Unfortunately we could not find your account.");
                console.log("ERR: ", error);
                //this.isAuthenticating = false;
            });
        }
        catch (error) {
            console.log(error.message);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBeUU7QUFDekUsMENBQXlDO0FBRXpDLDZDQUFpRTtBQUlqRSxnQ0FBK0I7QUFFOUIseURBQXVEO0FBQ3ZELG1EQUE0QztBQVc3QyxJQUFhLGNBQWM7SUFNekIsd0JBQW9CLE1BQWMsRUFDeEIsWUFBMkIsRUFDM0IsSUFBVTtRQUZBLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQWU7UUFDM0IsU0FBSSxHQUFKLElBQUksQ0FBTTtRQU5wQixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFNdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUEsaUNBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBR0YsK0JBQU0sR0FBTjtRQUNHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDNUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQztJQUNMLENBQUM7SUFFQSw4QkFBSyxHQUFMO1FBRU8sRUFBRSxDQUFDLENBQUMsZ0NBQWlCLEVBQUUsS0FBSyw2QkFBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDckQsS0FBSyxDQUFDLHVEQUF1RCxDQUFDLENBQUM7WUFDN0QsTUFBTSxDQUFDO1FBQ04sQ0FBQztRQUVMLElBQUksQ0FBQztZQUNKLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7aUJBQ2pDLFNBQVM7WUFDUiwwRUFBMEU7WUFFNUU7Z0JBQ0ksS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2IsQ0FBQyxFQUNGLFVBQUMsS0FBSztnQkFDSixLQUFLLENBQUMsK0NBQStDLENBQUMsQ0FBQztnQkFDdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzNCLGdDQUFnQztZQUVsQyxDQUFDLENBQ0osQ0FBQztRQUVGLENBQUM7UUFBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsQ0FBQztJQUNGLENBQUM7SUE4QkoscUJBQUM7QUFBRCxDQUFDLEFBaEZELElBZ0ZDO0FBaEZZLGNBQWM7SUFQMUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1FBQ3pCLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLEVBQUUsYUFBYSxDQUFDO0tBQ3BELENBQUM7cUNBTzRCLGVBQU07UUFDVCw0QkFBWTtRQUNyQixXQUFJO0dBUlQsY0FBYyxDQWdGMUI7QUFoRlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xyXG5pbXBvcnQgeyBjb25uZWN0aW9uVHlwZSwgZ2V0Q29ubmVjdGlvblR5cGUgfSBmcm9tIFwiY29ubmVjdGl2aXR5XCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCJ1aS9hbmltYXRpb25cIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuaW1wb3J0IHsgcHJvbXB0IH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcbiBpbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL2xvZ2luLnNlcnZpY2VcIjtcclxuIGltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vc2hhcmVkL3VzZXIubW9kZWxcIjtcclxuIGltcG9ydCAqIGFzIGNvbm5lY3Rpdml0eSBmcm9tIFwiY29ubmVjdGl2aXR5XCI7XHJcbiBcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInZwLWxvZ2luXCIsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBwcm92aWRlcnM6IFtMb2dpblNlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vbG9naW4uY29tcG9uZW50LmNzc1wiLCBcIi4vbG9naW4uY3NzXCJdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHVzZXI6IFVzZXI7XHJcbiAgaXNMb2dnaW5nSW4gPSB0cnVlO1xyXG4gIGlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcclxuICBkYXRhIDogYW55IDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgbG9naW5TZXJ2aWNlIDogTG9naW5TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XHJcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gIH1cclxuXHJcbiAgIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgfVxyXG5cclxuIFxyXG4gc3VibWl0KCl7XHJcbiAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSB0cnVlO1xyXG4gICAgIGlmICh0aGlzLmlzTG9nZ2luZ0luKSB7XHJcbiAgICAgICB0aGlzLmxvZ2luKCk7XHJcbiAgICAgfVxyXG4gfVxyXG5cclxuICBsb2dpbigpIHtcclxuICAgIFxyXG4gICAgICAgICBpZiAoZ2V0Q29ubmVjdGlvblR5cGUoKSA9PT0gY29ubmVjdGlvblR5cGUubm9uZSkge1xyXG4gICAgICBhbGVydChcIlZlc3NlbC1Qcm8gcmVxdWlyZXMgYW4gaW50ZXJuZXQgY29ubmVjdGlvbiB0byBsb2cgaW4uXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgICAgfVxyXG4gXHJcbiAgICAgdHJ5IHtcclxuICAgICAgdGhpcy5sb2dpblNlcnZpY2UubG9naW4odGhpcy51c2VyKVxyXG4gICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgIC8vKGRhdGEpID0+IHRoaXMuZGF0YSA9IGRhdGEsIC8vIFJlYWNoIGhlcmUgaWYgcmVzLnN0YXR1cyA+PSAyMDAgJiYgPD0gMjk5XHJcbiAgICBcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgYWxlcnQoXCJPS1wiKTtcclxuICAgICAgICAgfSxcclxuICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgZmluZCB5b3VyIGFjY291bnQuXCIpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJFUlI6IFwiLGVycm9yKTtcclxuICAgICAgICAgIC8vdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICApO1xyXG4gXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICAgfVxyXG5cclxuXHJcbiAgLy8gICBsb2dpbigpIHtcclxuICAvLyAgICAgLy9hbGVydChcInN1Ym1pdHRlZFwiKTtcclxuICAgICAgXHJcbiAgLy8gICAgICAgIGlmIChnZXRDb25uZWN0aW9uVHlwZSgpID09PSBjb25uZWN0aW9uVHlwZS5ub25lKSB7XHJcbiAgLy8gICAgIGFsZXJ0KFwiVmVzc2VsLVBybyByZXF1aXJlcyBhbiBpbnRlcm5ldCBjb25uZWN0aW9uIHRvIGxvZyBpbi5cIik7XHJcbiAgLy8gICAgICAgcmV0dXJuO1xyXG4gIC8vICAgICAgICB9XHJcbiBcclxuICAvLyAgICB0cnkge1xyXG4gIC8vICAgICB0aGlzLmxvZ2luU2VydmljZS5sb2dpbih0aGlzLnVzZXIpXHJcbiAgLy8gICAgIC5zdWJzY3JpYmUoIFxyXG4gIC8vICAgICAgICgpID0+IHtcclxuICAvLyAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XHJcbiAgLy8gICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJjbGllbnRNYXN0ZXJcIl0pO1xyXG4gIC8vICAgICAgIH0sXHJcbiAgLy8gICAgICAgKGVycm9yKSA9PiB7XHJcbiAgLy8gICAgICAgICBhbGVydChcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IGZpbmQgeW91ciBhY2NvdW50LlwiKTtcclxuICAvLyAgICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgXHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICApO1xyXG4gIC8vICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAvLyAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XHJcbiAgLy8gICB9XHJcblxyXG4gIC8vICB9XHJcbiBcclxufVxyXG5cclxuXHJcblxyXG5cclxuIl19