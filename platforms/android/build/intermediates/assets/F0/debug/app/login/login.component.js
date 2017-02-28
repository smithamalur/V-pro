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
        var _this = this;
        if (connectivity_1.getConnectionType() === connectivity_1.connectionType.none) {
            alert("Vessel-Pro requires an internet connection to log in.");
            return;
        }
        try {
            this.loginService.login(this.user)
                .subscribe(
            //(data) => this.data = data, // Reach here if res.status >= 200 && <= 299   
            function () {
                //alert("OK");
                _this.isAuthenticating = false;
                _this.router.navigate(["/clientMaster"]);
            }, function (error) {
                alert("Unfortunately we could not find your account.");
                console.log("ERR: ", error);
                _this.isAuthenticating = false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBeUU7QUFDekUsMENBQXlDO0FBRXpDLDZDQUFpRTtBQUlqRSxnQ0FBK0I7QUFFOUIseURBQXVEO0FBQ3ZELG1EQUE0QztBQVc3QyxJQUFhLGNBQWM7SUFNekIsd0JBQW9CLE1BQWMsRUFDeEIsWUFBMkIsRUFDM0IsSUFBVTtRQUZBLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQWU7UUFDM0IsU0FBSSxHQUFKLElBQUksQ0FBTTtRQU5wQixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFNdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUEsaUNBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBR0YsK0JBQU0sR0FBTjtRQUNHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDNUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQztJQUNMLENBQUM7SUFFQSw4QkFBSyxHQUFMO1FBQUEsaUJBMkJFO1FBekJFLEVBQUUsQ0FBQyxDQUFDLGdDQUFpQixFQUFFLEtBQUssNkJBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2hELEtBQUssQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO1lBQy9ELE1BQU0sQ0FBQztRQUNOLENBQUM7UUFFTCxJQUFJLENBQUM7WUFDSixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2lCQUNqQyxTQUFTO1lBQ1IsNkVBQTZFO1lBQy9FO2dCQUNJLGNBQWM7Z0JBQ2IsS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztnQkFDOUIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQzFDLENBQUMsRUFDRixVQUFDLEtBQUs7Z0JBQ0osS0FBSyxDQUFDLCtDQUErQyxDQUFDLENBQUM7Z0JBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMzQixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1lBRWhDLENBQUMsQ0FDSixDQUFDO1FBRUYsQ0FBQztRQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixDQUFDO0lBQ0YsQ0FBQztJQThCSixxQkFBQztBQUFELENBQUMsQUFqRkQsSUFpRkM7QUFqRlksY0FBYztJQVAxQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7UUFDekIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxhQUFhLENBQUM7S0FDcEQsQ0FBQztxQ0FPNEIsZUFBTTtRQUNULDRCQUFZO1FBQ3JCLFdBQUk7R0FSVCxjQUFjLENBaUYxQjtBQWpGWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XHJcbmltcG9ydCB7IGNvbm5lY3Rpb25UeXBlLCBnZXRDb25uZWN0aW9uVHlwZSB9IGZyb20gXCJjb25uZWN0aXZpdHlcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uIH0gZnJvbSBcInVpL2FuaW1hdGlvblwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xyXG5pbXBvcnQgeyBwcm9tcHQgfSBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcclxuIGltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvbG9naW4uc2VydmljZVwiO1xyXG4gaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9zaGFyZWQvdXNlci5tb2RlbFwiO1xyXG4gaW1wb3J0ICogYXMgY29ubmVjdGl2aXR5IGZyb20gXCJjb25uZWN0aXZpdHlcIjtcclxuIFxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidnAtbG9naW5cIixcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHByb3ZpZGVyczogW0xvZ2luU2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9sb2dpbi5jb21wb25lbnQuY3NzXCIsIFwiLi9sb2dpbi5jc3NcIl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgdXNlcjogVXNlcjtcclxuICBpc0xvZ2dpbmdJbiA9IHRydWU7XHJcbiAgaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xyXG4gIGRhdGEgOiBhbnkgO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBsb2dpblNlcnZpY2UgOiBMb2dpblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgfVxyXG5cclxuICAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gXHJcbiBzdWJtaXQoKXtcclxuICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IHRydWU7XHJcbiAgICAgaWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcclxuICAgICAgIHRoaXMubG9naW4oKTtcclxuICAgICB9XHJcbiB9XHJcblxyXG4gIGxvZ2luKCkge1xyXG4gICAgXHJcbiAgICAgIGlmIChnZXRDb25uZWN0aW9uVHlwZSgpID09PSBjb25uZWN0aW9uVHlwZS5ub25lKSB7XHJcbiAgICAgICAgYWxlcnQoXCJWZXNzZWwtUHJvIHJlcXVpcmVzIGFuIGludGVybmV0IGNvbm5lY3Rpb24gdG8gbG9nIGluLlwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgICAgIH1cclxuIFxyXG4gICAgIHRyeSB7XHJcbiAgICAgIHRoaXMubG9naW5TZXJ2aWNlLmxvZ2luKHRoaXMudXNlcilcclxuICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAvLyhkYXRhKSA9PiB0aGlzLmRhdGEgPSBkYXRhLCAvLyBSZWFjaCBoZXJlIGlmIHJlcy5zdGF0dXMgPj0gMjAwICYmIDw9IDI5OSAgIFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAvL2FsZXJ0KFwiT0tcIik7XHJcbiAgICAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2NsaWVudE1hc3RlclwiXSk7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBhbGVydChcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IGZpbmQgeW91ciBhY2NvdW50LlwiKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJSOiBcIixlcnJvcik7XHJcbiAgICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbiBcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICB9XHJcblxyXG5cclxuICAvLyAgIGxvZ2luKCkge1xyXG4gIC8vICAgICAvL2FsZXJ0KFwic3VibWl0dGVkXCIpO1xyXG4gICAgICBcclxuICAvLyAgICAgICAgaWYgKGdldENvbm5lY3Rpb25UeXBlKCkgPT09IGNvbm5lY3Rpb25UeXBlLm5vbmUpIHtcclxuICAvLyAgICAgYWxlcnQoXCJWZXNzZWwtUHJvIHJlcXVpcmVzIGFuIGludGVybmV0IGNvbm5lY3Rpb24gdG8gbG9nIGluLlwiKTtcclxuICAvLyAgICAgICByZXR1cm47XHJcbiAgLy8gICAgICAgIH1cclxuIFxyXG4gIC8vICAgIHRyeSB7XHJcbiAgLy8gICAgIHRoaXMubG9naW5TZXJ2aWNlLmxvZ2luKHRoaXMudXNlcilcclxuICAvLyAgICAgLnN1YnNjcmliZSggXHJcbiAgLy8gICAgICAgKCkgPT4ge1xyXG4gIC8vICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcclxuICAvLyAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImNsaWVudE1hc3RlclwiXSk7XHJcbiAgLy8gICAgICAgfSxcclxuICAvLyAgICAgICAoZXJyb3IpID0+IHtcclxuICAvLyAgICAgICAgIGFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgZmluZCB5b3VyIGFjY291bnQuXCIpO1xyXG4gIC8vICAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICBcclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgICk7XHJcbiAgLy8gICB9IGNhdGNoIChlcnJvcikge1xyXG4gIC8vICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcclxuICAvLyAgIH1cclxuXHJcbiAgLy8gIH1cclxuIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0=