"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var connectivity_1 = require("connectivity");
var animation_1 = require("ui/animation");
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
            this.isAuthenticating = false;
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
    //   login() {
    //     //alert("submitted");
    //        if (getConnectionType() === connectionType.none) {
    //     alert("Vessel-Pro requires an internet connection to log in.");
    //       return;
    //        }
    //    try {
    //     this.loginService.login(this.user)
    //     .subscribe( 
    //       () => {
    //        this.isAuthenticating = false;
    //         this.router.navigate(["clientMaster"]);
    //       },
    //       (error) => {
    //         alert("Unfortunately we could not find your account.");
    //         this.isAuthenticating = false;
    //       }
    //     );
    //   } catch (error) {
    //     console.log(error.message);
    //   }
    //  }
    //   startBackgroundAnimation(background) {
    // }
    LoginComponent.prototype.onContentloaded = function (background) {
        background.animate({
            scale: { x: 1.0, y: 1.0 },
            duration: 10000
        });
        var mainContainer = this.mainContainer.nativeElement;
        var formControls = this.formControls.nativeElement;
        var animations = [];
        // Fade out the initial content over one half second
        mainContainer.animate({
            opacity: 0,
            duration: 500
        }).then(function () {
            // After the animation completes, hide the initial container and
            // show the main container and logo. The main container and logo will
            // not immediately appear because their opacity is set to 0 in CSS.
            mainContainer.style.visibility = "visible";
            // Fade in the main container and logo over one half second.
            animations.push({ target: mainContainer, opacity: 1, duration: 500 });
            // Slide up the form controls and sign up container.
            animations.push({ target: formControls, translate: { x: 0, y: 0 }, opacity: 1, delay: 650, duration: 150 });
            // Kick off the animation queue
            new animation_1.Animation(animations, false).play();
        });
    };
    return LoginComponent;
}());
__decorate([
    core_1.ViewChild("password"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "password", void 0);
__decorate([
    core_1.ViewChild("mainContainer"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "mainContainer", void 0);
__decorate([
    core_1.ViewChild("formControls"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "formControls", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBeUU7QUFDekUsMENBQXlDO0FBRXpDLDZDQUFpRTtBQUNqRSwwQ0FBeUM7QUFHekMsZ0NBQStCO0FBRTlCLHlEQUF1RDtBQUN2RCxtREFBNEM7QUFlN0MsSUFBYSxjQUFjO0lBV3pCLHdCQUFvQixNQUFjLEVBQ3hCLFlBQTJCLEVBQzNCLElBQVU7UUFGQSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3hCLGlCQUFZLEdBQVosWUFBWSxDQUFlO1FBQzNCLFNBQUksR0FBSixJQUFJLENBQU07UUFYcEIscUJBQXFCO1FBQ3JCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQVd2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksaUJBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFQSxpQ0FBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ25DLENBQUM7SUFFQSxzQ0FBYSxHQUFiO1FBQ0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUdGLCtCQUFNLEdBQU47UUFDRywrQkFBK0I7UUFDL0Isa0RBQWtEO1FBQ2xELG1EQUFtRDtRQUNuRCxJQUFJO1FBQ0osRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDNUMsQ0FBQztZQUNFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7WUFDN0IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWYsQ0FBQztRQUNELElBQUk7WUFBQyxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUEsOEJBQUssR0FBTDtRQUFBLGlCQWtD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LENBQUMsSUFBSSxFQUFFLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUgscUJBQUM7QUFBRCxDQUFDLEFBL0lELElBK0lDO0FBekl3QjtJQUF0QixnQkFBUyxDQUFDLFVBQVUsQ0FBQzs4QkFBVyxpQkFBVTtnREFBQztBQUNoQjtJQUEzQixnQkFBUyxDQUFDLGVBQWUsQ0FBQzs4QkFBZ0IsaUJBQVU7cURBQUM7QUFDekI7SUFBMUIsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7OEJBQWUsaUJBQVU7b0RBQUM7QUFSM0MsY0FBYztJQVYxQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7UUFDekIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxhQUFhLENBQUM7S0FDcEQsQ0FBQztxQ0FlNEIsZUFBTTtRQUNULDRCQUFZO1FBQ3JCLFdBQUk7R0FiVCxjQUFjLENBK0kxQjtBQS9JWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XHJcbmltcG9ydCB7IGNvbm5lY3Rpb25UeXBlLCBnZXRDb25uZWN0aW9uVHlwZSB9IGZyb20gXCJjb25uZWN0aXZpdHlcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uIH0gZnJvbSBcInVpL2FuaW1hdGlvblwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xyXG5pbXBvcnQgeyBwcm9tcHQgfSBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcclxuIGltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvbG9naW4uc2VydmljZVwiO1xyXG4gaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9zaGFyZWQvdXNlci5tb2RlbFwiO1xyXG4gaW1wb3J0ICogYXMgY29ubmVjdGl2aXR5IGZyb20gXCJjb25uZWN0aXZpdHlcIjtcclxuIGltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCIuLi9zaGFyZWRcIjtcclxuIFxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidnAtbG9naW5cIixcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHByb3ZpZGVyczogW0xvZ2luU2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9sb2dpbi5jb21wb25lbnQuY3NzXCIsIFwiLi9sb2dpbi5jc3NcIl0sXHJcbn0pXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgdXNlcjogVXNlcjtcclxuICAvL2lzTG9nZ2luZ0luID0gdHJ1ZTtcclxuICBpc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XHJcbiAgZGF0YSA6IGFueSA7XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJwYXNzd29yZFwiKSBwYXNzd29yZDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwibWFpbkNvbnRhaW5lclwiKSBtYWluQ29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZChcImZvcm1Db250cm9sc1wiKSBmb3JtQ29udHJvbHM6IEVsZW1lbnRSZWY7XHJcbiAgICBcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgbG9naW5TZXJ2aWNlIDogTG9naW5TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XHJcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gIH1cclxuXHJcbiAgIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAgZm9jdXNQYXNzd29yZCgpIHtcclxuICAgIHRoaXMucGFzc3dvcmQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiBcclxuIHN1Ym1pdCgpe1xyXG4gICAgLy90aGlzLmlzQXV0aGVudGljYXRpbmcgPSB0cnVlO1xyXG4gICAgLy8gaWYoIXRoaXMudXNlci51c2VybmFtZSAmJiAhdGhpcy51c2VyLnBhc3N3b3JkKXtcclxuICAgIC8vICAgYWxlcnQoXCJVc2VybmFtZSBvciBQYXNzd29yZCBjYW5ub3QgYmUgZW1wdHlcIik7XHJcbiAgICAvLyB9XHJcbiAgICBpZih0aGlzLnVzZXIudXNlcm5hbWUgJiYgdGhpcy51c2VyLnBhc3N3b3JkKVxyXG4gICAge1xyXG4gICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gdHJ1ZTtcclxuICAgICAgIHRoaXMubG9naW4oKTtcclxuICAgICAgIFxyXG4gICAgIH1cclxuICAgICBlbHNlIGFsZXJ0KFwiVXNlcm5hbWUgYW5kIFBhc3dvcmQgcmVxdWlyZWRcIik7XHJcbiB9XHJcblxyXG4gIGxvZ2luKCkge1xyXG4gICAgXHJcbiAgICAgIGlmIChnZXRDb25uZWN0aW9uVHlwZSgpID09PSBjb25uZWN0aW9uVHlwZS5ub25lKSB7XHJcbiAgICAgICAgYWxlcnQoXCJWZXNzZWwtUHJvIHJlcXVpcmVzIGFuIGludGVybmV0IGNvbm5lY3Rpb24gdG8gbG9nIGluLlwiKTtcclxuICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgICAgIH1cclxuIFxyXG4gICAgIHRyeSB7XHJcbiAgICAgIHRoaXMubG9naW5TZXJ2aWNlLmxvZ2luKHRoaXMudXNlcilcclxuICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAvLyAocmVzcG9uc2UpID0+e1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIlJFU1BPTlNFOiBcIityZXNwb25zZS51cmwpOyAgICBcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZSBqc29uIFwiK3Jlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgLy8gICAgdmFyIGJvZHkgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJKU09OIEJPRFk6IFwiLEpTT04uc3RyaW5naWZ5KGJvZHkpKTtcclxuICAgICAgICAvLyB9LCBcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAvL2FsZXJ0KFwiT0tcIik7XHJcbiAgICAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2NsaWVudE1hc3RlclwiXSk7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBhbGVydChcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IGZpbmQgeW91ciBhY2NvdW50LlwiKTtcclxuICAgICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICBcclxuICAgICk7XHJcbiBcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICB9XHJcblxyXG5cclxuICAvLyAgIGxvZ2luKCkge1xyXG4gIC8vICAgICAvL2FsZXJ0KFwic3VibWl0dGVkXCIpO1xyXG4gICAgICBcclxuICAvLyAgICAgICAgaWYgKGdldENvbm5lY3Rpb25UeXBlKCkgPT09IGNvbm5lY3Rpb25UeXBlLm5vbmUpIHtcclxuICAvLyAgICAgYWxlcnQoXCJWZXNzZWwtUHJvIHJlcXVpcmVzIGFuIGludGVybmV0IGNvbm5lY3Rpb24gdG8gbG9nIGluLlwiKTtcclxuICAvLyAgICAgICByZXR1cm47XHJcbiAgLy8gICAgICAgIH1cclxuIFxyXG4gIC8vICAgIHRyeSB7XHJcbiAgLy8gICAgIHRoaXMubG9naW5TZXJ2aWNlLmxvZ2luKHRoaXMudXNlcilcclxuICAvLyAgICAgLnN1YnNjcmliZSggXHJcbiAgLy8gICAgICAgKCkgPT4ge1xyXG4gIC8vICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcclxuICAvLyAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImNsaWVudE1hc3RlclwiXSk7XHJcbiAgLy8gICAgICAgfSxcclxuICAvLyAgICAgICAoZXJyb3IpID0+IHtcclxuICAvLyAgICAgICAgIGFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgZmluZCB5b3VyIGFjY291bnQuXCIpO1xyXG4gIC8vICAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICBcclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgICk7XHJcbiAgLy8gICB9IGNhdGNoIChlcnJvcikge1xyXG4gIC8vICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcclxuICAvLyAgIH1cclxuXHJcbiAgLy8gIH1cclxuICAvLyAgIHN0YXJ0QmFja2dyb3VuZEFuaW1hdGlvbihiYWNrZ3JvdW5kKSB7XHJcbiAgICBcclxuICAvLyB9XHJcblxyXG4gIG9uQ29udGVudGxvYWRlZChiYWNrZ3JvdW5kKSB7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQuYW5pbWF0ZSh7XHJcbiAgICAgIHNjYWxlOiB7IHg6IDEuMCwgeTogMS4wIH0sXHJcbiAgICAgIGR1cmF0aW9uOiAxMDAwMFxyXG4gICAgfSk7IFxyXG5cclxuICAgIGxldCBtYWluQ29udGFpbmVyID0gPFZpZXc+dGhpcy5tYWluQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBsZXQgZm9ybUNvbnRyb2xzID0gPFZpZXc+dGhpcy5mb3JtQ29udHJvbHMubmF0aXZlRWxlbWVudDtcclxuICAgIGxldCBhbmltYXRpb25zID0gW107XHJcblxyXG4gICAgLy8gRmFkZSBvdXQgdGhlIGluaXRpYWwgY29udGVudCBvdmVyIG9uZSBoYWxmIHNlY29uZFxyXG4gICAgbWFpbkNvbnRhaW5lci5hbmltYXRlKHtcclxuICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgZHVyYXRpb246IDUwMFxyXG4gICAgfSkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgLy8gQWZ0ZXIgdGhlIGFuaW1hdGlvbiBjb21wbGV0ZXMsIGhpZGUgdGhlIGluaXRpYWwgY29udGFpbmVyIGFuZFxyXG4gICAgICAvLyBzaG93IHRoZSBtYWluIGNvbnRhaW5lciBhbmQgbG9nby4gVGhlIG1haW4gY29udGFpbmVyIGFuZCBsb2dvIHdpbGxcclxuICAgICAgLy8gbm90IGltbWVkaWF0ZWx5IGFwcGVhciBiZWNhdXNlIHRoZWlyIG9wYWNpdHkgaXMgc2V0IHRvIDAgaW4gQ1NTLlxyXG4gICAgICBcclxuICAgICAgbWFpbkNvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgIFxyXG5cclxuICAgICAgLy8gRmFkZSBpbiB0aGUgbWFpbiBjb250YWluZXIgYW5kIGxvZ28gb3ZlciBvbmUgaGFsZiBzZWNvbmQuXHJcbiAgICAgIGFuaW1hdGlvbnMucHVzaCh7IHRhcmdldDogbWFpbkNvbnRhaW5lciwgb3BhY2l0eTogMSwgZHVyYXRpb246IDUwMCB9KTtcclxuICAgICAgXHJcblxyXG4gICAgICAvLyBTbGlkZSB1cCB0aGUgZm9ybSBjb250cm9scyBhbmQgc2lnbiB1cCBjb250YWluZXIuXHJcbiAgICAgIFxyXG4gICAgICBhbmltYXRpb25zLnB1c2goeyB0YXJnZXQ6IGZvcm1Db250cm9scywgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IDAgfSwgb3BhY2l0eTogMSwgZGVsYXk6IDY1MCwgZHVyYXRpb246IDE1MCB9KTtcclxuXHJcbiAgICAgIC8vIEtpY2sgb2ZmIHRoZSBhbmltYXRpb24gcXVldWVcclxuICAgICAgbmV3IEFuaW1hdGlvbihhbmltYXRpb25zLCBmYWxzZSkucGxheSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ==