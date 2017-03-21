"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dialogs_1 = require("ui/dialogs");
var router_2 = require("nativescript-angular/router");
var shared_1 = require("../shared");
var jsonfile = require("../test.json");
var SrtListComponent = (function () {
    function SrtListComponent(router, userService, LoginService, routerExtensions) {
        this.router = router;
        this.userService = userService;
        this.LoginService = LoginService;
        this.routerExtensions = routerExtensions;
    }
    SrtListComponent.prototype.ngOnInit = function () {
        console.log("read json file");
        console.log(jsonfile);
        this.source = jsonfile;
    };
    SrtListComponent.prototype.goBack = function () {
        this.routerExtensions.navigate(["/clientMaster"], { clearHistory: true });
    };
    SrtListComponent.prototype.showMenu = function () {
        var _this = this;
        dialogs_1.confirm({
            message: "Are you Sure You want to log off?",
            //actions: ["Share", "Log Off"],
            okButtonText: "YES",
            cancelButtonText: "CANCEL"
        }).then(function (result) {
            if (result) {
                _this.logoff();
            }
        });
    };
    SrtListComponent.prototype.logoff = function () {
        this.LoginService.logoff();
        this.router.navigate([""]);
    };
    return SrtListComponent;
}());
SrtListComponent = __decorate([
    core_1.Component({
        selector: "vp-srt-list",
        moduleId: module.id,
        templateUrl: './srtdetails.component.html',
        styleUrls: ["./srtdetails.component.css"],
        providers: [shared_1.LoginService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        shared_1.LoginService,
        shared_1.LoginService,
        router_2.RouterExtensions])
], SrtListComponent);
exports.SrtListComponent = SrtListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3J0ZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcnRkZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBUUEsc0NBQXlFO0FBQ3pFLDBDQUF5QztBQUl6QyxzQ0FBcUM7QUFLckMsc0RBQTZEO0FBRTdELG9DQUFzRDtBQUV0RCxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUE7QUFXdEMsSUFBYSxnQkFBZ0I7SUFJN0IsMEJBQXFCLE1BQWMsRUFDeEIsV0FBeUIsRUFDekIsWUFBMEIsRUFDMUIsZ0JBQWtDO1FBSHhCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWM7UUFDekIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFFLENBQUM7SUFDOUMsbUNBQVEsR0FBUjtRQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUMsUUFBUSxDQUFDO0lBQzNCLENBQUM7SUFDTSxpQ0FBTSxHQUFiO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUNELG1DQUFRLEdBQVI7UUFBQSxpQkFXRztRQVZDLGlCQUFPLENBQUM7WUFDTixPQUFPLEVBQUUsbUNBQW1DO1lBQzVDLGdDQUFnQztZQUNoQyxZQUFZLEVBQUUsS0FBSztZQUNuQixnQkFBZ0IsRUFBRSxRQUFRO1NBQzNCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1lBQ1osRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDWixLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDaEIsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILGlDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUgsdUJBQUM7QUFBRCxDQUFDLEFBbENELElBa0NDO0FBbENZLGdCQUFnQjtJQVI1QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGFBQWE7UUFDdkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSw2QkFBNkI7UUFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7UUFDekMsU0FBUyxFQUFFLENBQUMscUJBQVksQ0FBQztLQUMxQixDQUFDO3FDQU0yQixlQUFNO1FBQ1gscUJBQVk7UUFDWCxxQkFBWTtRQUNSLHlCQUFnQjtHQVBoQyxnQkFBZ0IsQ0FrQzVCO0FBbENZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcblxyXG4vLyAtLS0gVGhlIGJ1aWx0LWluICduYXRpdmVzY3JpcHQtdGVsZXJpay11aS1wcm8nIG1vZHVsZXNcclxuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL2xpc3R2aWV3L2FuZ3VsYXJcIjtcclxuaW1wb3J0IGxpc3RWaWV3TW9kdWxlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL2xpc3R2aWV3XCIpO1xyXG5pbXBvcnQgZHJhd2VyTW9kdWxlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXJcIik7XHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xyXG5pbXBvcnQgeyBjb25uZWN0aW9uVHlwZSwgZ2V0Q29ubmVjdGlvblR5cGUgfSBmcm9tIFwiY29ubmVjdGl2aXR5XCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCJ1aS9hbmltYXRpb25cIjtcclxuaW1wb3J0IHsgY29uZmlybSB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XHJcbmltcG9ydCB7IHByb21wdCB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xyXG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IGFsZXJ0LCBMb2dpblNlcnZpY2UsIFVzZXIgfSBmcm9tIFwiLi4vc2hhcmVkXCI7XHJcblxyXG52YXIganNvbmZpbGUgPSByZXF1aXJlKFwiLi4vdGVzdC5qc29uXCIpXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidnAtc3J0LWxpc3RcIixcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zcnRkZXRhaWxzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFtcIi4vc3J0ZGV0YWlscy5jb21wb25lbnQuY3NzXCJdLFxyXG4gIHByb3ZpZGVyczogW0xvZ2luU2VydmljZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTcnRMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG5cclxucHVibGljIHNvdXJjZTpBcnJheTxhbnk+O1xyXG5cclxuY29uc3RydWN0b3IoIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgIHByaXZhdGUgdXNlclNlcnZpY2U6IExvZ2luU2VydmljZSxcclxuICAgcHJpdmF0ZSBMb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSxcclxuICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKXt9XHJcbiAgbmdPbkluaXQoKXtcclxuXHJcbmNvbnNvbGUubG9nKFwicmVhZCBqc29uIGZpbGVcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coanNvbmZpbGUpO1xyXG4gICAgICAgIHRoaXMuc291cmNlPWpzb25maWxlO1xyXG4gIH1cclxuICBwdWJsaWMgZ29CYWNrKCkge1xyXG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9jbGllbnRNYXN0ZXJcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG59XHJcbnNob3dNZW51KCkge1xyXG4gICAgY29uZmlybSh7XHJcbiAgICAgIG1lc3NhZ2U6IFwiQXJlIHlvdSBTdXJlIFlvdSB3YW50IHRvIGxvZyBvZmY/XCIsXHJcbiAgICAgIC8vYWN0aW9uczogW1wiU2hhcmVcIiwgXCJMb2cgT2ZmXCJdLFxyXG4gICAgICBva0J1dHRvblRleHQ6IFwiWUVTXCIsXHJcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ0FOQ0VMXCJcclxuICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIHRoaXMubG9nb2ZmKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxubG9nb2ZmKCkge1xyXG4gICAgdGhpcy5Mb2dpblNlcnZpY2UubG9nb2ZmKCk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJcIl0pO1xyXG4gIH1cclxuXHJcbn0iXX0=