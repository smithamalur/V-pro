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
            // (response) =>{
            //     console.log("RESPONSE: "+response.url);    
            //     console.log("response json "+response.status);
            //    var body = response.json();
            //    console.log("JSON BODY: ",JSON.stringify(body));
            // }, 
            function () {
                //alert("OK");
                _this.isAuthenticating = false;
                _this.router.navigate(["/clientMaster"]);
            }, function (error) {
                alert("Unfortunately we could not find your account.");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBeUU7QUFDekUsMENBQXlDO0FBRXpDLDZDQUFpRTtBQUlqRSxnQ0FBK0I7QUFFOUIseURBQXVEO0FBQ3ZELG1EQUE0QztBQWU3QyxJQUFhLGNBQWM7SUFPekIsd0JBQW9CLE1BQWMsRUFDeEIsWUFBMkIsRUFDM0IsSUFBVTtRQUZBLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQWU7UUFDM0IsU0FBSSxHQUFKLElBQUksQ0FBTTtRQVBwQixxQkFBcUI7UUFDckIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBT3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxpQkFBSSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVBLGlDQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQUVBLHNDQUFhLEdBQWI7UUFDQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBR0YsK0JBQU0sR0FBTjtRQUNHLCtCQUErQjtRQUMvQixrREFBa0Q7UUFDbEQsbURBQW1EO1FBQ25ELElBQUk7UUFDSixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUM1QyxDQUFDO1lBQ0UsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztZQUM3QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFZixDQUFDO1FBQ0QsSUFBSTtZQUFDLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFQSw4QkFBSyxHQUFMO1FBQUEsaUJBaUNFO1FBL0JFLEVBQUUsQ0FBQyxDQUFDLGdDQUFpQixFQUFFLEtBQUssNkJBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2hELEtBQUssQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO1lBQy9ELE1BQU0sQ0FBQztRQUNOLENBQUM7UUFFTCxJQUFJLENBQUM7WUFDSixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2lCQUNqQyxTQUFTO1lBQ1IsaUJBQWlCO1lBQ2pCLGtEQUFrRDtZQUNsRCxxREFBcUQ7WUFDckQsaUNBQWlDO1lBQ2pDLHNEQUFzRDtZQUN0RCxNQUFNO1lBQ047Z0JBQ0UsY0FBYztnQkFDYixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO2dCQUM5QixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDMUMsQ0FBQyxFQUNGLFVBQUMsS0FBSztnQkFDSixLQUFLLENBQUMsK0NBQStDLENBQUMsQ0FBQztnQkFDdkQsS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztZQUVoQyxDQUFDLENBR0osQ0FBQztRQUVGLENBQUM7UUFBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsQ0FBQztJQUNGLENBQUM7SUE4QkoscUJBQUM7QUFBRCxDQUFDLEFBbkdELElBbUdDO0FBN0Z3QjtJQUF0QixnQkFBUyxDQUFDLFVBQVUsQ0FBQzs4QkFBVyxpQkFBVTtnREFBQztBQU5qQyxjQUFjO0lBVjFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztRQUN6QixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixFQUFFLGFBQWEsQ0FBQztLQUNwRCxDQUFDO3FDQVc0QixlQUFNO1FBQ1QsNEJBQVk7UUFDckIsV0FBSTtHQVRULGNBQWMsQ0FtRzFCO0FBbkdZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcclxuaW1wb3J0IHsgY29ubmVjdGlvblR5cGUsIGdldENvbm5lY3Rpb25UeXBlIH0gZnJvbSBcImNvbm5lY3Rpdml0eVwiO1xyXG5pbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tIFwidWkvYW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XHJcbmltcG9ydCB7IHByb21wdCB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xyXG4gaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9sb2dpbi5zZXJ2aWNlXCI7XHJcbiBpbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3NoYXJlZC91c2VyLm1vZGVsXCI7XHJcbiBpbXBvcnQgKiBhcyBjb25uZWN0aXZpdHkgZnJvbSBcImNvbm5lY3Rpdml0eVwiO1xyXG4gaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcIi4uL3NoYXJlZFwiO1xyXG4gXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2cC1sb2dpblwiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgcHJvdmlkZXJzOiBbTG9naW5TZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2xvZ2luLmNvbXBvbmVudC5jc3NcIiwgXCIuL2xvZ2luLmNzc1wiXSxcclxufSlcclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICB1c2VyOiBVc2VyO1xyXG4gIC8vaXNMb2dnaW5nSW4gPSB0cnVlO1xyXG4gIGlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcclxuICBkYXRhIDogYW55IDtcclxuXHJcbiAgQFZpZXdDaGlsZChcInBhc3N3b3JkXCIpIHBhc3N3b3JkOiBFbGVtZW50UmVmO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIGxvZ2luU2VydmljZSA6IExvZ2luU2VydmljZSxcclxuICAgIHByaXZhdGUgcGFnZTogUGFnZSkge1xyXG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcclxuICB9XHJcblxyXG4gICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgIGZvY3VzUGFzc3dvcmQoKSB7XHJcbiAgICB0aGlzLnBhc3N3b3JkLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICB9XHJcblxyXG4gXHJcbiBzdWJtaXQoKXtcclxuICAgIC8vdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gdHJ1ZTtcclxuICAgIC8vIGlmKCF0aGlzLnVzZXIudXNlcm5hbWUgJiYgIXRoaXMudXNlci5wYXNzd29yZCl7XHJcbiAgICAvLyAgIGFsZXJ0KFwiVXNlcm5hbWUgb3IgUGFzc3dvcmQgY2Fubm90IGJlIGVtcHR5XCIpO1xyXG4gICAgLy8gfVxyXG4gICAgaWYodGhpcy51c2VyLnVzZXJuYW1lICYmIHRoaXMudXNlci5wYXNzd29yZClcclxuICAgIHtcclxuICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IHRydWU7XHJcbiAgICAgICB0aGlzLmxvZ2luKCk7XHJcbiAgICAgICBcclxuICAgICB9XHJcbiAgICAgZWxzZSBhbGVydChcIlVzZXJuYW1lIGFuZCBQYXN3b3JkIHJlcXVpcmVkXCIpO1xyXG4gfVxyXG5cclxuICBsb2dpbigpIHtcclxuICAgIFxyXG4gICAgICBpZiAoZ2V0Q29ubmVjdGlvblR5cGUoKSA9PT0gY29ubmVjdGlvblR5cGUubm9uZSkge1xyXG4gICAgICAgIGFsZXJ0KFwiVmVzc2VsLVBybyByZXF1aXJlcyBhbiBpbnRlcm5ldCBjb25uZWN0aW9uIHRvIGxvZyBpbi5cIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICB9XHJcbiBcclxuICAgICB0cnkge1xyXG4gICAgICB0aGlzLmxvZ2luU2VydmljZS5sb2dpbih0aGlzLnVzZXIpXHJcbiAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgLy8gKHJlc3BvbnNlKSA9PntcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJSRVNQT05TRTogXCIrcmVzcG9uc2UudXJsKTsgICAgXHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2UganNvbiBcIityZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgIC8vICAgIHZhciBib2R5ID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiSlNPTiBCT0RZOiBcIixKU09OLnN0cmluZ2lmeShib2R5KSk7XHJcbiAgICAgICAgLy8gfSwgXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgLy9hbGVydChcIk9LXCIpO1xyXG4gICAgICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9jbGllbnRNYXN0ZXJcIl0pO1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgYWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBmaW5kIHlvdXIgYWNjb3VudC5cIik7XHJcbiAgICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgXHJcbiAgICApO1xyXG4gXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICAgfVxyXG5cclxuXHJcbiAgLy8gICBsb2dpbigpIHtcclxuICAvLyAgICAgLy9hbGVydChcInN1Ym1pdHRlZFwiKTtcclxuICAgICAgXHJcbiAgLy8gICAgICAgIGlmIChnZXRDb25uZWN0aW9uVHlwZSgpID09PSBjb25uZWN0aW9uVHlwZS5ub25lKSB7XHJcbiAgLy8gICAgIGFsZXJ0KFwiVmVzc2VsLVBybyByZXF1aXJlcyBhbiBpbnRlcm5ldCBjb25uZWN0aW9uIHRvIGxvZyBpbi5cIik7XHJcbiAgLy8gICAgICAgcmV0dXJuO1xyXG4gIC8vICAgICAgICB9XHJcbiBcclxuICAvLyAgICB0cnkge1xyXG4gIC8vICAgICB0aGlzLmxvZ2luU2VydmljZS5sb2dpbih0aGlzLnVzZXIpXHJcbiAgLy8gICAgIC5zdWJzY3JpYmUoIFxyXG4gIC8vICAgICAgICgpID0+IHtcclxuICAvLyAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XHJcbiAgLy8gICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJjbGllbnRNYXN0ZXJcIl0pO1xyXG4gIC8vICAgICAgIH0sXHJcbiAgLy8gICAgICAgKGVycm9yKSA9PiB7XHJcbiAgLy8gICAgICAgICBhbGVydChcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IGZpbmQgeW91ciBhY2NvdW50LlwiKTtcclxuICAvLyAgICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgXHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICApO1xyXG4gIC8vICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAvLyAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XHJcbiAgLy8gICB9XHJcblxyXG4gIC8vICB9XHJcbiBcclxufVxyXG5cclxuXHJcblxyXG5cclxuIl19