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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3J0ZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcnRkZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlFO0FBQ3pFLDBDQUF5QztBQUl6QyxzQ0FBcUM7QUFLckMsc0RBQTZEO0FBRTdELG9DQUFzRDtBQUV0RCxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUE7QUFXdEMsSUFBYSxnQkFBZ0I7SUFJN0IsMEJBQXFCLE1BQWMsRUFDeEIsV0FBeUIsRUFDekIsWUFBMEIsRUFDMUIsZ0JBQWtDO1FBSHhCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWM7UUFDekIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFFLENBQUM7SUFDOUMsbUNBQVEsR0FBUjtRQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUMsUUFBUSxDQUFDO0lBQzNCLENBQUM7SUFDTSxpQ0FBTSxHQUFiO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUNELG1DQUFRLEdBQVI7UUFBQSxpQkFXRztRQVZDLGlCQUFPLENBQUM7WUFDTixPQUFPLEVBQUUsbUNBQW1DO1lBQzVDLGdDQUFnQztZQUNoQyxZQUFZLEVBQUUsS0FBSztZQUNuQixnQkFBZ0IsRUFBRSxRQUFRO1NBQzNCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1lBQ1osRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDWixLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDaEIsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILGlDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUgsdUJBQUM7QUFBRCxDQUFDLEFBbENELElBa0NDO0FBbENZLGdCQUFnQjtJQVI1QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGFBQWE7UUFDdkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSw2QkFBNkI7UUFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7UUFDekMsU0FBUyxFQUFFLENBQUMscUJBQVksQ0FBQztLQUMxQixDQUFDO3FDQU0yQixlQUFNO1FBQ1gscUJBQVk7UUFDWCxxQkFBWTtRQUNSLHlCQUFnQjtHQVBoQyxnQkFBZ0IsQ0FrQzVCO0FBbENZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XHJcbmltcG9ydCB7IGNvbm5lY3Rpb25UeXBlLCBnZXRDb25uZWN0aW9uVHlwZSB9IGZyb20gXCJjb25uZWN0aXZpdHlcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uIH0gZnJvbSBcInVpL2FuaW1hdGlvblwiO1xyXG5pbXBvcnQgeyBjb25maXJtIH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuaW1wb3J0IHsgcHJvbXB0IH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgYWxlcnQsIExvZ2luU2VydmljZSwgVXNlciB9IGZyb20gXCIuLi9zaGFyZWRcIjtcclxuXHJcbnZhciBqc29uZmlsZSA9IHJlcXVpcmUoXCIuLi90ZXN0Lmpzb25cIilcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2cC1zcnQtbGlzdFwiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NydGRldGFpbHMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogW1wiLi9zcnRkZXRhaWxzLmNvbXBvbmVudC5jc3NcIl0sXHJcbiAgcHJvdmlkZXJzOiBbTG9naW5TZXJ2aWNlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNydExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcblxyXG5wdWJsaWMgc291cmNlOkFycmF5PGFueT47XHJcblxyXG5jb25zdHJ1Y3RvciggcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgcHJpdmF0ZSB1c2VyU2VydmljZTogTG9naW5TZXJ2aWNlLFxyXG4gICBwcml2YXRlIExvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLFxyXG4gICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpe31cclxuICBuZ09uSW5pdCgpe1xyXG5cclxuY29uc29sZS5sb2coXCJyZWFkIGpzb24gZmlsZVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhqc29uZmlsZSk7XHJcbiAgICAgICAgdGhpcy5zb3VyY2U9anNvbmZpbGU7XHJcbiAgfVxyXG4gIHB1YmxpYyBnb0JhY2soKSB7XHJcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2NsaWVudE1hc3RlclwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbn1cclxuc2hvd01lbnUoKSB7XHJcbiAgICBjb25maXJtKHtcclxuICAgICAgbWVzc2FnZTogXCJBcmUgeW91IFN1cmUgWW91IHdhbnQgdG8gbG9nIG9mZj9cIixcclxuICAgICAgLy9hY3Rpb25zOiBbXCJTaGFyZVwiLCBcIkxvZyBPZmZcIl0sXHJcbiAgICAgIG9rQnV0dG9uVGV4dDogXCJZRVNcIixcclxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDQU5DRUxcIlxyXG4gICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgdGhpcy5sb2dvZmYoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5sb2dvZmYoKSB7XHJcbiAgICB0aGlzLkxvZ2luU2VydmljZS5sb2dvZmYoKTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIlwiXSk7XHJcbiAgfVxyXG5cclxufSJdfQ==