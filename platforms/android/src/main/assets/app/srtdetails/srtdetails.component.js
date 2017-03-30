"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dialogs_1 = require("ui/dialogs");
var router_2 = require("nativescript-angular/router");
var shared_1 = require("../shared");
var jsonfile = require("../test.json");
var SrtListComponent = (function () {
    function SrtListComponent(router, LoginService, routerExtensions) {
        this.router = router;
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
        router_2.RouterExtensions])
], SrtListComponent);
exports.SrtListComponent = SrtListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3J0ZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcnRkZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBUUEsc0NBQXlFO0FBQ3pFLDBDQUF5QztBQUl6QyxzQ0FBcUM7QUFLckMsc0RBQTZEO0FBRTdELG9DQUFzRDtBQUV0RCxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUE7QUFXdEMsSUFBYSxnQkFBZ0I7SUFJN0IsMEJBQXFCLE1BQWMsRUFDeEIsWUFBMEIsRUFDMUIsZ0JBQWtDO1FBRnhCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFFLENBQUM7SUFDOUMsbUNBQVEsR0FBUjtRQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUMsUUFBUSxDQUFDO0lBQzNCLENBQUM7SUFDTSxpQ0FBTSxHQUFiO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUNELG1DQUFRLEdBQVI7UUFBQSxpQkFXRztRQVZDLGlCQUFPLENBQUM7WUFDTixPQUFPLEVBQUUsbUNBQW1DO1lBQzVDLGdDQUFnQztZQUNoQyxZQUFZLEVBQUUsS0FBSztZQUNuQixnQkFBZ0IsRUFBRSxRQUFRO1NBQzNCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1lBQ1osRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDWixLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDaEIsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILGlDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUgsdUJBQUM7QUFBRCxDQUFDLEFBakNELElBaUNDO0FBakNZLGdCQUFnQjtJQVI1QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGFBQWE7UUFDdkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSw2QkFBNkI7UUFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7UUFDekMsU0FBUyxFQUFFLENBQUMscUJBQVksQ0FBQztLQUMxQixDQUFDO3FDQU0yQixlQUFNO1FBQ1YscUJBQVk7UUFDUix5QkFBZ0I7R0FOaEMsZ0JBQWdCLENBaUM1QjtBQWpDWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5cclxuLy8gLS0tIFRoZSBidWlsdC1pbiAnbmF0aXZlc2NyaXB0LXRlbGVyaWstdWktcHJvJyBtb2R1bGVzXHJcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS9saXN0dmlldy9hbmd1bGFyXCI7XHJcbmltcG9ydCBsaXN0Vmlld01vZHVsZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS9saXN0dmlld1wiKTtcclxuaW1wb3J0IGRyYXdlck1vZHVsZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyXCIpO1xyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcclxuaW1wb3J0IHsgY29ubmVjdGlvblR5cGUsIGdldENvbm5lY3Rpb25UeXBlIH0gZnJvbSBcImNvbm5lY3Rpdml0eVwiO1xyXG5pbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tIFwidWkvYW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7IGNvbmZpcm0gfSBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xyXG5pbXBvcnQgeyBwcm9tcHQgfSBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcclxuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBhbGVydCwgTG9naW5TZXJ2aWNlLCBVc2VyIH0gZnJvbSBcIi4uL3NoYXJlZFwiO1xyXG5cclxudmFyIGpzb25maWxlID0gcmVxdWlyZShcIi4uL3Rlc3QuanNvblwiKVxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInZwLXNydC1saXN0XCIsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3J0ZGV0YWlscy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL3NydGRldGFpbHMuY29tcG9uZW50LmNzc1wiXSxcclxuICBwcm92aWRlcnM6IFtMb2dpblNlcnZpY2VdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU3J0TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHJcbnB1YmxpYyBzb3VyY2U6QXJyYXk8YW55PjtcclxuXHJcbmNvbnN0cnVjdG9yKCBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICBwcml2YXRlIExvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLFxyXG4gICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpe31cclxuICBuZ09uSW5pdCgpe1xyXG5cclxuY29uc29sZS5sb2coXCJyZWFkIGpzb24gZmlsZVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhqc29uZmlsZSk7XHJcbiAgICAgICAgdGhpcy5zb3VyY2U9anNvbmZpbGU7XHJcbiAgfVxyXG4gIHB1YmxpYyBnb0JhY2soKSB7XHJcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2NsaWVudE1hc3RlclwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbn1cclxuc2hvd01lbnUoKSB7XHJcbiAgICBjb25maXJtKHtcclxuICAgICAgbWVzc2FnZTogXCJBcmUgeW91IFN1cmUgWW91IHdhbnQgdG8gbG9nIG9mZj9cIixcclxuICAgICAgLy9hY3Rpb25zOiBbXCJTaGFyZVwiLCBcIkxvZyBPZmZcIl0sXHJcbiAgICAgIG9rQnV0dG9uVGV4dDogXCJZRVNcIixcclxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDQU5DRUxcIlxyXG4gICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgdGhpcy5sb2dvZmYoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5sb2dvZmYoKSB7XHJcbiAgICB0aGlzLkxvZ2luU2VydmljZS5sb2dvZmYoKTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIlwiXSk7XHJcbiAgfVxyXG5cclxufSJdfQ==