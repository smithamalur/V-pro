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
        //isLoggingIn = true;
        this.isAuthenticating = false;
        this.user = new user_model_1.User();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    LoginComponent.prototype.focusPassword = function () {
        this.password.nativeElement.focus();
    };
    LoginComponent.prototype.submit = function () {
        //this.isAuthenticating = true;
        // if(!this.user.username && !this.user.password){
        //   alert("Username or Password cannot be empty");
        // }
        if (this.user.username && this.user.password) {
            this.isAuthenticating = true;
            this.login();
        }
        else
            alert("Username and Pasword required");
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
__decorate([
    core_1.ViewChild("password"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "password", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBeUU7QUFDekUsMENBQXlDO0FBRXpDLDZDQUFpRTtBQUlqRSxnQ0FBK0I7QUFFOUIseURBQXVEO0FBQ3ZELG1EQUE0QztBQWU3QyxJQUFhLGNBQWM7SUFPekIsd0JBQW9CLE1BQWMsRUFDeEIsWUFBMkIsRUFDM0IsSUFBVTtRQUZBLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQWU7UUFDM0IsU0FBSSxHQUFKLElBQUksQ0FBTTtRQVBwQixxQkFBcUI7UUFDckIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBT3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxpQkFBSSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVBLGlDQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQUVBLHNDQUFhLEdBQWI7UUFDQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBR0YsK0JBQU0sR0FBTjtRQUNHLCtCQUErQjtRQUMvQixrREFBa0Q7UUFDbEQsbURBQW1EO1FBQ25ELElBQUk7UUFDSixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUM1QyxDQUFDO1lBQ0UsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztZQUM3QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFZixDQUFDO1FBQ0QsSUFBSTtZQUFDLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFQSw4QkFBSyxHQUFMO1FBQUEsaUJBMkJFO1FBekJFLEVBQUUsQ0FBQyxDQUFDLGdDQUFpQixFQUFFLEtBQUssNkJBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2hELEtBQUssQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO1lBQy9ELE1BQU0sQ0FBQztRQUNOLENBQUM7UUFFTCxJQUFJLENBQUM7WUFDSixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2lCQUNqQyxTQUFTO1lBQ1IsNkVBQTZFO1lBQy9FO2dCQUNJLGNBQWM7Z0JBQ2IsS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztnQkFDOUIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQzFDLENBQUMsRUFDRixVQUFDLEtBQUs7Z0JBQ0osS0FBSyxDQUFDLCtDQUErQyxDQUFDLENBQUM7Z0JBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMzQixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1lBRWhDLENBQUMsQ0FDSixDQUFDO1FBRUYsQ0FBQztRQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixDQUFDO0lBQ0YsQ0FBQztJQThCSixxQkFBQztBQUFELENBQUMsQUE3RkQsSUE2RkM7QUF2RndCO0lBQXRCLGdCQUFTLENBQUMsVUFBVSxDQUFDOzhCQUFXLGlCQUFVO2dEQUFDO0FBTmpDLGNBQWM7SUFWMUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1FBQ3pCLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLEVBQUUsYUFBYSxDQUFDO0tBQ3BELENBQUM7cUNBVzRCLGVBQU07UUFDVCw0QkFBWTtRQUNyQixXQUFJO0dBVFQsY0FBYyxDQTZGMUI7QUE3Rlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xyXG5pbXBvcnQgeyBjb25uZWN0aW9uVHlwZSwgZ2V0Q29ubmVjdGlvblR5cGUgfSBmcm9tIFwiY29ubmVjdGl2aXR5XCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCJ1aS9hbmltYXRpb25cIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuaW1wb3J0IHsgcHJvbXB0IH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcbiBpbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL2xvZ2luLnNlcnZpY2VcIjtcclxuIGltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vc2hhcmVkL3VzZXIubW9kZWxcIjtcclxuIGltcG9ydCAqIGFzIGNvbm5lY3Rpdml0eSBmcm9tIFwiY29ubmVjdGl2aXR5XCI7XHJcbiBpbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwiLi4vc2hhcmVkXCI7XHJcbiBcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInZwLWxvZ2luXCIsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBwcm92aWRlcnM6IFtMb2dpblNlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vbG9naW4uY29tcG9uZW50LmNzc1wiLCBcIi4vbG9naW4uY3NzXCJdLFxyXG59KVxyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHVzZXI6IFVzZXI7XHJcbiAgLy9pc0xvZ2dpbmdJbiA9IHRydWU7XHJcbiAgaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xyXG4gIGRhdGEgOiBhbnkgO1xyXG5cclxuICBAVmlld0NoaWxkKFwicGFzc3dvcmRcIikgcGFzc3dvcmQ6IEVsZW1lbnRSZWY7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgbG9naW5TZXJ2aWNlIDogTG9naW5TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XHJcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gIH1cclxuXHJcbiAgIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAgZm9jdXNQYXNzd29yZCgpIHtcclxuICAgIHRoaXMucGFzc3dvcmQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiBcclxuIHN1Ym1pdCgpe1xyXG4gICAgLy90aGlzLmlzQXV0aGVudGljYXRpbmcgPSB0cnVlO1xyXG4gICAgLy8gaWYoIXRoaXMudXNlci51c2VybmFtZSAmJiAhdGhpcy51c2VyLnBhc3N3b3JkKXtcclxuICAgIC8vICAgYWxlcnQoXCJVc2VybmFtZSBvciBQYXNzd29yZCBjYW5ub3QgYmUgZW1wdHlcIik7XHJcbiAgICAvLyB9XHJcbiAgICBpZih0aGlzLnVzZXIudXNlcm5hbWUgJiYgdGhpcy51c2VyLnBhc3N3b3JkKVxyXG4gICAge1xyXG4gICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gdHJ1ZTtcclxuICAgICAgIHRoaXMubG9naW4oKTtcclxuICAgICAgIFxyXG4gICAgIH1cclxuICAgICBlbHNlIGFsZXJ0KFwiVXNlcm5hbWUgYW5kIFBhc3dvcmQgcmVxdWlyZWRcIik7XHJcbiB9XHJcblxyXG4gIGxvZ2luKCkge1xyXG4gICAgXHJcbiAgICAgIGlmIChnZXRDb25uZWN0aW9uVHlwZSgpID09PSBjb25uZWN0aW9uVHlwZS5ub25lKSB7XHJcbiAgICAgICAgYWxlcnQoXCJWZXNzZWwtUHJvIHJlcXVpcmVzIGFuIGludGVybmV0IGNvbm5lY3Rpb24gdG8gbG9nIGluLlwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgICAgIH1cclxuIFxyXG4gICAgIHRyeSB7XHJcbiAgICAgIHRoaXMubG9naW5TZXJ2aWNlLmxvZ2luKHRoaXMudXNlcilcclxuICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAvLyhkYXRhKSA9PiB0aGlzLmRhdGEgPSBkYXRhLCAvLyBSZWFjaCBoZXJlIGlmIHJlcy5zdGF0dXMgPj0gMjAwICYmIDw9IDI5OSAgIFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAvL2FsZXJ0KFwiT0tcIik7XHJcbiAgICAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2NsaWVudE1hc3RlclwiXSk7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBhbGVydChcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IGZpbmQgeW91ciBhY2NvdW50LlwiKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJSOiBcIixlcnJvcik7XHJcbiAgICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbiBcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICB9XHJcblxyXG5cclxuICAvLyAgIGxvZ2luKCkge1xyXG4gIC8vICAgICAvL2FsZXJ0KFwic3VibWl0dGVkXCIpO1xyXG4gICAgICBcclxuICAvLyAgICAgICAgaWYgKGdldENvbm5lY3Rpb25UeXBlKCkgPT09IGNvbm5lY3Rpb25UeXBlLm5vbmUpIHtcclxuICAvLyAgICAgYWxlcnQoXCJWZXNzZWwtUHJvIHJlcXVpcmVzIGFuIGludGVybmV0IGNvbm5lY3Rpb24gdG8gbG9nIGluLlwiKTtcclxuICAvLyAgICAgICByZXR1cm47XHJcbiAgLy8gICAgICAgIH1cclxuIFxyXG4gIC8vICAgIHRyeSB7XHJcbiAgLy8gICAgIHRoaXMubG9naW5TZXJ2aWNlLmxvZ2luKHRoaXMudXNlcilcclxuICAvLyAgICAgLnN1YnNjcmliZSggXHJcbiAgLy8gICAgICAgKCkgPT4ge1xyXG4gIC8vICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcclxuICAvLyAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImNsaWVudE1hc3RlclwiXSk7XHJcbiAgLy8gICAgICAgfSxcclxuICAvLyAgICAgICAoZXJyb3IpID0+IHtcclxuICAvLyAgICAgICAgIGFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgZmluZCB5b3VyIGFjY291bnQuXCIpO1xyXG4gIC8vICAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICBcclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgICk7XHJcbiAgLy8gICB9IGNhdGNoIChlcnJvcikge1xyXG4gIC8vICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcclxuICAvLyAgIH1cclxuXHJcbiAgLy8gIH1cclxuIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0=