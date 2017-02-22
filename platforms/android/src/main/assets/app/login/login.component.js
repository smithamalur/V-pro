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
        this.user = new user_model_1.User();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (connectivity_1.getConnectionType() === connectivity_1.connectionType.none) {
            alert("Vessel-Pro requires an internet connection to log in.");
            return;
        }
        this.loginService.login(this.user)
            .subscribe(function () {
            _this.router.navigate(["/"]);
        }, function (error) {
            alert("Unfortunately we could not find your account.");
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBeUU7QUFDekUsMENBQXlDO0FBRXpDLDZDQUFpRTtBQUlqRSxnQ0FBK0I7QUFFOUIseURBQXVEO0FBQ3ZELG1EQUE0QztBQVU3QyxJQUFhLGNBQWM7SUFJekIsd0JBQW9CLE1BQWMsRUFDeEIsWUFBMkIsRUFDM0IsSUFBVTtRQUZBLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQWU7UUFDM0IsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksaUJBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFQSxpQ0FBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ25DLENBQUM7SUFJRCw4QkFBSyxHQUFMO1FBQUEsaUJBaUJDO1FBaEJDLEVBQUUsQ0FBQyxDQUFDLGdDQUFpQixFQUFFLEtBQUssNkJBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2hELEtBQUssQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO1lBQy9ELE1BQU0sQ0FBQztRQUNULENBQUM7UUFFRCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQy9CLFNBQVMsQ0FDUjtZQUVFLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM5QixDQUFDLEVBQ0QsVUFBQyxLQUFLO1lBQ0osS0FBSyxDQUFDLCtDQUErQyxDQUFDLENBQUM7UUFFekQsQ0FBQyxDQUNGLENBQUM7SUFDTixDQUFDO0lBRUQscUJBQUM7QUFBRCxDQUFDLEFBbkNILElBbUNHO0FBbkNVLGNBQWM7SUFQMUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1FBQ3pCLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLEVBQUUsYUFBYSxDQUFDO0tBQ3BELENBQUM7cUNBSzRCLGVBQU07UUFDVCw0QkFBWTtRQUNyQixXQUFJO0dBTlQsY0FBYyxDQW1DeEI7QUFuQ1Usd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xyXG5pbXBvcnQgeyBjb25uZWN0aW9uVHlwZSwgZ2V0Q29ubmVjdGlvblR5cGUgfSBmcm9tIFwiY29ubmVjdGl2aXR5XCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCJ1aS9hbmltYXRpb25cIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuaW1wb3J0IHsgcHJvbXB0IH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcbiBpbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL2xvZ2luLnNlcnZpY2VcIjtcclxuIGltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vc2hhcmVkL3VzZXIubW9kZWxcIjtcclxuIFxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidnAtbG9naW5cIixcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHByb3ZpZGVyczogW0xvZ2luU2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9sb2dpbi5jb21wb25lbnQuY3NzXCIsIFwiLi9sb2dpbi5jc3NcIl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgdXNlcjogVXNlcjtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIGxvZ2luU2VydmljZSA6IExvZ2luU2VydmljZSxcclxuICAgIHByaXZhdGUgcGFnZTogUGFnZSkge1xyXG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcclxuICB9XHJcblxyXG4gICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiBcclxuXHJcbiAgbG9naW4oKSB7XHJcbiAgICBpZiAoZ2V0Q29ubmVjdGlvblR5cGUoKSA9PT0gY29ubmVjdGlvblR5cGUubm9uZSkge1xyXG4gICAgICBhbGVydChcIlZlc3NlbC1Qcm8gcmVxdWlyZXMgYW4gaW50ZXJuZXQgY29ubmVjdGlvbiB0byBsb2cgaW4uXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5sb2dpblNlcnZpY2UubG9naW4odGhpcy51c2VyKVxyXG4gICAgICAuc3Vic2NyaWJlKCBcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL1wiXSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgZmluZCB5b3VyIGFjY291bnQuXCIpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gIH1cclxuICAgXHJcbiAgfVxyXG5cclxuXHJcbiJdfQ==