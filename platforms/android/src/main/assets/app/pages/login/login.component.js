"use strict";
var core_1 = require("@angular/core");
// import { User } from "../../shared/user/user";
// import { UserService } from "../../shared/user/user.service";
// import { setHintColor } from "../../utils/hint-util";
var LoginComponent = (function () {
    function LoginComponent() {
        //user: User;
        this.isLoggingIn = true;
        //constructor(private router: Router, private userService: UserService, private page: Page) {
        //this.user = new User();
        //}
        // ngOnInit() {
        //   this.page.actionBarHidden = true;
        //   this.page.backgroundImage = this.page.ios ? "res://bg_login.jpg" : "res://bg_login";
        // }
        // submit() {
        //   if (!this.user.is6ValidEmail()) {
        //     alert("Enter a valid email address.");
        //     return;
        //   }
        //   if (this.isLoggingIn) {
        //     this.login();
        //   }
        //     else {
        //      this.signUp();
        //    }
        // }
        // login() {
        //   this.userService.login(this.user)
        //     .subscribe(
        //       () => this.router.navigate(["/list"]),
        //       (error) => alert("Unfortunately we could not find your account.")
        //     );
        // }
        // signUp() {
        //   this.userService.register(this.user)
        //     .subscribe(
        //       () => {
        //         alert("Your account was successfully created.");
        //         this.toggleDisplay();
        //       },
        //       () => alert("Unfortunately we were unable to create your account.")
        //     );
        // }
        // toggleDisplay() {
        //   this.isLoggingIn = !this.isLoggingIn;
        //   this.setTextFieldColors();
        //   let container = <View>this.container.nativeElement;
        //   container.animate({
        //     backgroundColor: this.isLoggingIn ? new Color("white") : new Color("#301217"),
        //     duration: 200
        //   });
        // }
        //   setTextFieldColors() {
        //     let emailTextField = <TextField>this.email.nativeElement;
        //     let passwordTextField = <TextField>this.password.nativeElement;
        //     let mainTextColor = new Color(this.isLoggingIn ? "black" : "#C4AFB4");
        //     emailTextField.color = mainTextColor;
        //     passwordTextField.color = mainTextColor;
        //     let hintColor = new Color(this.isLoggingIn ? "#ACA6A7" : "#C4AFB4");
        //     setHintColor({ view: emailTextField, color: hintColor });
        //     setHintColor({ view: passwordTextField, color: hintColor });
        //   }
    }
    return LoginComponent;
}());
__decorate([
    core_1.ViewChild("container"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "container", void 0);
__decorate([
    core_1.ViewChild("email"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "email", void 0);
__decorate([
    core_1.ViewChild("password"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "password", void 0);
LoginComponent = __decorate([
    core_1.Component({
        selector: "login",
        //providers: [UserService],
        templateUrl: "pages/login/login.component.html",
        styleUrls: ["pages/login/login.component.css", "pages/login/login.css"],
    })
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0U7QUFPbEUsaURBQWlEO0FBQ2pELGdFQUFnRTtBQUNoRSx3REFBd0Q7QUFReEQsSUFBYSxjQUFjO0lBTjNCO1FBT0UsYUFBYTtRQUNiLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBTW5CLDZGQUE2RjtRQUMzRix5QkFBeUI7UUFDM0IsR0FBRztRQUVILGVBQWU7UUFDZixzQ0FBc0M7UUFDdEMseUZBQXlGO1FBQ3pGLElBQUk7UUFFSixhQUFhO1FBQ2Isc0NBQXNDO1FBQ3RDLDZDQUE2QztRQUM3QyxjQUFjO1FBQ2QsTUFBTTtRQUVOLDRCQUE0QjtRQUM1QixvQkFBb0I7UUFDcEIsTUFBTTtRQUNOLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsT0FBTztRQUNQLElBQUk7UUFFSixZQUFZO1FBQ1osc0NBQXNDO1FBQ3RDLGtCQUFrQjtRQUNsQiwrQ0FBK0M7UUFDL0MsMEVBQTBFO1FBQzFFLFNBQVM7UUFDVCxJQUFJO1FBRUosYUFBYTtRQUNiLHlDQUF5QztRQUN6QyxrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLDJEQUEyRDtRQUMzRCxnQ0FBZ0M7UUFDaEMsV0FBVztRQUNYLDRFQUE0RTtRQUM1RSxTQUFTO1FBQ1QsSUFBSTtRQUVKLG9CQUFvQjtRQUNwQiwwQ0FBMEM7UUFDMUMsK0JBQStCO1FBQy9CLHdEQUF3RDtRQUN4RCx3QkFBd0I7UUFDeEIscUZBQXFGO1FBQ3JGLG9CQUFvQjtRQUNwQixRQUFRO1FBQ1IsSUFBSTtRQUVOLDJCQUEyQjtRQUMzQixnRUFBZ0U7UUFDaEUsc0VBQXNFO1FBRXRFLDZFQUE2RTtRQUM3RSw0Q0FBNEM7UUFDNUMsK0NBQStDO1FBRS9DLDJFQUEyRTtRQUMzRSxnRUFBZ0U7UUFDaEUsbUVBQW1FO1FBQ25FLE1BQU07SUFDTCxDQUFDO0lBQUQscUJBQUM7QUFBRCxDQUFDLEFBeEVGLElBd0VFO0FBcEV3QjtJQUF2QixnQkFBUyxDQUFDLFdBQVcsQ0FBQzs4QkFBWSxpQkFBVTtpREFBQztBQUMxQjtJQUFuQixnQkFBUyxDQUFDLE9BQU8sQ0FBQzs4QkFBUSxpQkFBVTs2Q0FBQztBQUNmO0lBQXRCLGdCQUFTLENBQUMsVUFBVSxDQUFDOzhCQUFXLGlCQUFVO2dEQUFDO0FBTmpDLGNBQWM7SUFOMUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxPQUFPO1FBQ2pCLDJCQUEyQjtRQUMzQixXQUFXLEVBQUUsa0NBQWtDO1FBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxFQUFFLHVCQUF1QixDQUFDO0tBQ3hFLENBQUM7R0FDVyxjQUFjLENBd0V6QjtBQXhFVyx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XHJcblxyXG4vLyBpbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXJcIjtcclxuLy8gaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XHJcbi8vIGltcG9ydCB7IHNldEhpbnRDb2xvciB9IGZyb20gXCIuLi8uLi91dGlscy9oaW50LXV0aWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImxvZ2luXCIsXHJcbiAgLy9wcm92aWRlcnM6IFtVc2VyU2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3NcIiwgXCJwYWdlcy9sb2dpbi9sb2dpbi5jc3NcIl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCAge1xyXG4gIC8vdXNlcjogVXNlcjtcclxuICBpc0xvZ2dpbmdJbiA9IHRydWU7XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJjb250YWluZXJcIikgY29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJlbWFpbFwiKSBlbWFpbDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwicGFzc3dvcmRcIikgcGFzc3dvcmQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gIC8vY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgcGFnZTogUGFnZSkge1xyXG4gICAgLy90aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gIC8vfVxyXG5cclxuICAvLyBuZ09uSW5pdCgpIHtcclxuICAvLyAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gIC8vICAgdGhpcy5wYWdlLmJhY2tncm91bmRJbWFnZSA9IHRoaXMucGFnZS5pb3MgPyBcInJlczovL2JnX2xvZ2luLmpwZ1wiIDogXCJyZXM6Ly9iZ19sb2dpblwiO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gc3VibWl0KCkge1xyXG4gIC8vICAgaWYgKCF0aGlzLnVzZXIuaXM2VmFsaWRFbWFpbCgpKSB7XHJcbiAgLy8gICAgIGFsZXJ0KFwiRW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzLlwiKTtcclxuICAvLyAgICAgcmV0dXJuO1xyXG4gIC8vICAgfVxyXG5cclxuICAvLyAgIGlmICh0aGlzLmlzTG9nZ2luZ0luKSB7XHJcbiAgLy8gICAgIHRoaXMubG9naW4oKTtcclxuICAvLyAgIH1cclxuICAvLyAgICAgZWxzZSB7XHJcbiAgLy8gICAgICB0aGlzLnNpZ25VcCgpO1xyXG4gIC8vICAgIH1cclxuICAvLyB9XHJcblxyXG4gIC8vIGxvZ2luKCkge1xyXG4gIC8vICAgdGhpcy51c2VyU2VydmljZS5sb2dpbih0aGlzLnVzZXIpXHJcbiAgLy8gICAgIC5zdWJzY3JpYmUoXHJcbiAgLy8gICAgICAgKCkgPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xpc3RcIl0pLFxyXG4gIC8vICAgICAgIChlcnJvcikgPT4gYWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBmaW5kIHlvdXIgYWNjb3VudC5cIilcclxuICAvLyAgICAgKTtcclxuICAvLyB9XHJcblxyXG4gIC8vIHNpZ25VcCgpIHtcclxuICAvLyAgIHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKVxyXG4gIC8vICAgICAuc3Vic2NyaWJlKFxyXG4gIC8vICAgICAgICgpID0+IHtcclxuICAvLyAgICAgICAgIGFsZXJ0KFwiWW91ciBhY2NvdW50IHdhcyBzdWNjZXNzZnVsbHkgY3JlYXRlZC5cIik7XHJcbiAgLy8gICAgICAgICB0aGlzLnRvZ2dsZURpc3BsYXkoKTtcclxuICAvLyAgICAgICB9LFxyXG4gIC8vICAgICAgICgpID0+IGFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSB3ZXJlIHVuYWJsZSB0byBjcmVhdGUgeW91ciBhY2NvdW50LlwiKVxyXG4gIC8vICAgICApO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gdG9nZ2xlRGlzcGxheSgpIHtcclxuICAvLyAgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcclxuICAvLyAgIHRoaXMuc2V0VGV4dEZpZWxkQ29sb3JzKCk7XHJcbiAgLy8gICBsZXQgY29udGFpbmVyID0gPFZpZXc+dGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudDtcclxuICAvLyAgIGNvbnRhaW5lci5hbmltYXRlKHtcclxuICAvLyAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLmlzTG9nZ2luZ0luID8gbmV3IENvbG9yKFwid2hpdGVcIikgOiBuZXcgQ29sb3IoXCIjMzAxMjE3XCIpLFxyXG4gIC8vICAgICBkdXJhdGlvbjogMjAwXHJcbiAgLy8gICB9KTtcclxuICAvLyB9XHJcblxyXG4vLyAgIHNldFRleHRGaWVsZENvbG9ycygpIHtcclxuLy8gICAgIGxldCBlbWFpbFRleHRGaWVsZCA9IDxUZXh0RmllbGQ+dGhpcy5lbWFpbC5uYXRpdmVFbGVtZW50O1xyXG4vLyAgICAgbGV0IHBhc3N3b3JkVGV4dEZpZWxkID0gPFRleHRGaWVsZD50aGlzLnBhc3N3b3JkLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4vLyAgICAgbGV0IG1haW5UZXh0Q29sb3IgPSBuZXcgQ29sb3IodGhpcy5pc0xvZ2dpbmdJbiA/IFwiYmxhY2tcIiA6IFwiI0M0QUZCNFwiKTtcclxuLy8gICAgIGVtYWlsVGV4dEZpZWxkLmNvbG9yID0gbWFpblRleHRDb2xvcjtcclxuLy8gICAgIHBhc3N3b3JkVGV4dEZpZWxkLmNvbG9yID0gbWFpblRleHRDb2xvcjtcclxuXHJcbi8vICAgICBsZXQgaGludENvbG9yID0gbmV3IENvbG9yKHRoaXMuaXNMb2dnaW5nSW4gPyBcIiNBQ0E2QTdcIiA6IFwiI0M0QUZCNFwiKTtcclxuLy8gICAgIHNldEhpbnRDb2xvcih7IHZpZXc6IGVtYWlsVGV4dEZpZWxkLCBjb2xvcjogaGludENvbG9yIH0pO1xyXG4vLyAgICAgc2V0SGludENvbG9yKHsgdmlldzogcGFzc3dvcmRUZXh0RmllbGQsIGNvbG9yOiBoaW50Q29sb3IgfSk7XHJcbi8vICAgfVxyXG4gfVxyXG4iXX0=