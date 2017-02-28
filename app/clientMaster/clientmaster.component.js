"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var shared_1 = require("../shared");
var ClientMasterComponent = (function () {
    function ClientMasterComponent(router, LoginService, page) {
        this.router = router;
        this.LoginService = LoginService;
        this.page = page;
        this.isLoading = false;
    }
    ClientMasterComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    ClientMasterComponent.prototype.showActivityIndicator = function () {
        this.isLoading = true;
    };
    ClientMasterComponent.prototype.hideActivityIndicator = function () {
        this.isLoading = false;
    };
    ClientMasterComponent.prototype.loadsrt = function () {
        shared_1.alert("OK");
        //   if (getConnectionType() === connectionType.none) {
        //       alert("Groceries requires an internet connection to log in.");
        //       return;
        //     }
        //     this.LoginService.getAssociatedRequest()
        //       .subscribe(
        //         () => {
        //           this.isAuthenticating = false;
        //           this.router.navigate(["/"]);
        //         },
        //         (error) => {
        //           alert("Unfortunately we could not find your account.");
        //           this.isAuthenticating = false;
        //         }
        //       );
        // }
    };
    return ClientMasterComponent;
}());
ClientMasterComponent = __decorate([
    core_1.Component({
        selector: "clientMaster",
        moduleId: module.id,
        templateUrl: './clientmaster.component.html',
        styleUrls: ["./clientmaster.component.css"],
    }),
    __metadata("design:paramtypes", [router_1.Router,
        shared_1.LoginService,
        page_1.Page])
], ClientMasterComponent);
exports.ClientMasterComponent = ClientMasterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50bWFzdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsaWVudG1hc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5RTtBQUN6RSwwQ0FBeUM7QUFNekMsZ0NBQStCO0FBRy9CLG9DQUFzRDtBQVVyRCxJQUFhLHFCQUFxQjtJQUloQywrQkFBb0IsTUFBYyxFQUMxQixZQUEwQixFQUMxQixJQUFVO1FBRkUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUMxQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixTQUFJLEdBQUosSUFBSSxDQUFNO1FBSm5CLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFJSSxDQUFDO0lBRXRCLHdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQUVELHFEQUFxQixHQUFyQjtRQUNDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFDRCxxREFBcUIsR0FBckI7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBRUgsdUNBQU8sR0FBUDtRQUNFLGNBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNkLHVEQUF1RDtRQUN2RCx1RUFBdUU7UUFDdkUsZ0JBQWdCO1FBQ2hCLFFBQVE7UUFFUiwrQ0FBK0M7UUFDL0Msb0JBQW9CO1FBQ3BCLGtCQUFrQjtRQUNsQiwyQ0FBMkM7UUFDM0MseUNBQXlDO1FBQ3pDLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsb0VBQW9FO1FBQ3BFLDJDQUEyQztRQUMzQyxZQUFZO1FBQ1osV0FBVztRQUNYLElBQUk7SUFDSCxDQUFDO0lBQ0QsNEJBQUM7QUFBRCxDQUFDLEFBdkNELElBdUNDO0FBdkNZLHFCQUFxQjtJQVBsQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGNBQWM7UUFDeEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSwrQkFBK0I7UUFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7S0FFNUMsQ0FBQztxQ0FLNkIsZUFBTTtRQUNaLHFCQUFZO1FBQ3BCLFdBQUk7R0FOUCxxQkFBcUIsQ0F1Q2pDO0FBdkNZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XHJcbmltcG9ydCB7IGNvbm5lY3Rpb25UeXBlLCBnZXRDb25uZWN0aW9uVHlwZSB9IGZyb20gXCJjb25uZWN0aXZpdHlcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uIH0gZnJvbSBcInVpL2FuaW1hdGlvblwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xyXG5pbXBvcnQgeyBwcm9tcHQgfSBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcclxuXHJcbmltcG9ydCB7IGFsZXJ0LCBMb2dpblNlcnZpY2UsIFVzZXIgfSBmcm9tIFwiLi4vc2hhcmVkXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiY2xpZW50TWFzdGVyXCIsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2xpZW50bWFzdGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFtcIi4vY2xpZW50bWFzdGVyLmNvbXBvbmVudC5jc3NcIl0sXHJcbiAgLy9wcm92aWRlcnM6IFtDbGllbnRNYXN0ZXJTZXJ2aWNlXVxyXG59KVxyXG4gZXhwb3J0IGNsYXNzIENsaWVudE1hc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHJcbiAgaXNMb2FkaW5nID0gZmFsc2U7XHJcblxyXG4gICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICBwcml2YXRlIExvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLFxyXG4gICBwcml2YXRlIHBhZ2U6IFBhZ2UpIHt9XHJcblxyXG4gICBuZ09uSW5pdCgpe1xyXG4gICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICB9XHJcblxyXG4gICBzaG93QWN0aXZpdHlJbmRpY2F0b3IoKSB7XHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgfVxyXG4gIGhpZGVBY3Rpdml0eUluZGljYXRvcigpIHtcclxuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgfVxyXG5cclxubG9hZHNydCgpe1xyXG4gIGFsZXJ0KFwiT0tcIik7XHJcbi8vICAgaWYgKGdldENvbm5lY3Rpb25UeXBlKCkgPT09IGNvbm5lY3Rpb25UeXBlLm5vbmUpIHtcclxuLy8gICAgICAgYWxlcnQoXCJHcm9jZXJpZXMgcmVxdWlyZXMgYW4gaW50ZXJuZXQgY29ubmVjdGlvbiB0byBsb2cgaW4uXCIpO1xyXG4vLyAgICAgICByZXR1cm47XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgdGhpcy5Mb2dpblNlcnZpY2UuZ2V0QXNzb2NpYXRlZFJlcXVlc3QoKVxyXG4vLyAgICAgICAuc3Vic2NyaWJlKFxyXG4vLyAgICAgICAgICgpID0+IHtcclxuLy8gICAgICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xyXG4vLyAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL1wiXSk7XHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICAoZXJyb3IpID0+IHtcclxuLy8gICAgICAgICAgIGFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgZmluZCB5b3VyIGFjY291bnQuXCIpO1xyXG4vLyAgICAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICApO1xyXG4vLyB9XHJcbiB9XHJcbiB9Il19