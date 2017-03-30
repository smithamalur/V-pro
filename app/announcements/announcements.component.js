"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dialogs_1 = require("ui/dialogs");
var connectivity_1 = require("connectivity");
var page_1 = require("ui/page");
var router_2 = require("nativescript-angular/router");
var shared_1 = require("../shared");
var jsonfile = require("../announcement.json");
var AnnouncementsComponent = (function () {
    function AnnouncementsComponent(router, LoginService, page, routerExtensions) {
        this.router = router;
        this.LoginService = LoginService;
        this.page = page;
        this.routerExtensions = routerExtensions;
    }
    AnnouncementsComponent.prototype.ngOnInit = function () {
        console.log("read json file");
        console.log(jsonfile);
        this.source = jsonfile;
    };
    AnnouncementsComponent.prototype.goBack = function () {
        this.routerExtensions.navigate(["/clientMaster"], { clearHistory: true });
    };
    AnnouncementsComponent.prototype.showMenu = function () {
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
    AnnouncementsComponent.prototype.logoff = function () {
        this.LoginService.logoff();
        this.router.navigate([""]);
    };
    AnnouncementsComponent.prototype.loadAnnouncements = function () {
        if (connectivity_1.getConnectionType() === connectivity_1.connectionType.none) {
            shared_1.alert("Oops!! looks like your device is not connected to the internet ");
            return;
        }
        this.LoginService.getAnouncements()
            .subscribe(function (response) {
            console.log("Announcement Response" + response);
        }, function (error) { console.log("Error happened", error.message); }, function () {
            console.log("Announcement is completed");
        });
    };
    return AnnouncementsComponent;
}());
AnnouncementsComponent = __decorate([
    core_1.Component({
        selector: 'announcements',
        moduleId: module.id,
        templateUrl: './announcements.component.html',
        styleUrls: ['./announcements.component.css'],
        providers: [shared_1.LoginService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        shared_1.LoginService,
        page_1.Page,
        router_2.RouterExtensions])
], AnnouncementsComponent);
exports.AnnouncementsComponent = AnnouncementsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3VuY2VtZW50cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbm5vdW5jZW1lbnRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlFO0FBQ3pFLDBDQUF5QztBQUV6QyxzQ0FBcUM7QUFDckMsNkNBQWlFO0FBSWpFLGdDQUErQjtBQUUvQixzREFBNkQ7QUFDN0Qsb0NBQXNEO0FBRXRELElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO0FBUzlDLElBQWEsc0JBQXNCO0lBSWhDLGdDQUFvQixNQUFjLEVBQzFCLFlBQTBCLEVBQzFCLElBQVUsRUFDVixnQkFBa0M7UUFIdEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUMxQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFJLENBQUM7SUFFakQseUNBQVEsR0FBUjtRQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUMsUUFBUSxDQUFDO0lBQzNCLENBQUM7SUFDTSx1Q0FBTSxHQUFiO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUNBLHlDQUFRLEdBQVI7UUFBQSxpQkFXRTtRQVZDLGlCQUFPLENBQUM7WUFDTixPQUFPLEVBQUUsbUNBQW1DO1lBQzVDLGdDQUFnQztZQUNoQyxZQUFZLEVBQUUsS0FBSztZQUNuQixnQkFBZ0IsRUFBRSxRQUFRO1NBQzNCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1lBQ1osRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDWixLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDaEIsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHVDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0Ysa0RBQWlCLEdBQWpCO1FBQ0csRUFBRSxDQUFDLENBQUMsZ0NBQWlCLEVBQUUsS0FBSyw2QkFBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDOUMsY0FBSyxDQUFDLGlFQUFpRSxDQUFDLENBQUM7WUFDekUsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUNDLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFO2FBQ2xDLFNBQVMsQ0FDUixVQUFDLFFBQVE7WUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLFFBQVEsQ0FBQyxDQUFBO1FBQy9DLENBQUMsRUFDRCxVQUFDLEtBQUssSUFBTyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFBLENBQUMsRUFDMUQ7WUFBUSxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUE7UUFDakQsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDLEFBaERELElBZ0RDO0FBaERZLHNCQUFzQjtJQVBsQyxnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLGVBQWU7UUFDekIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSxnQ0FBZ0M7UUFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7UUFDNUMsU0FBUyxFQUFFLENBQUMscUJBQVksQ0FBQztLQUN6QixDQUFDO3FDQUs2QixlQUFNO1FBQ1oscUJBQVk7UUFDcEIsV0FBSTtRQUNRLHlCQUFnQjtHQVBoQyxzQkFBc0IsQ0FnRGxDO0FBaERZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcbmltcG9ydCB7IGNvbmZpcm0gfSBmcm9tIFwidWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgY29ubmVjdGlvblR5cGUsIGdldENvbm5lY3Rpb25UeXBlIH0gZnJvbSBcImNvbm5lY3Rpdml0eVwiO1xuaW1wb3J0IHsgQW5pbWF0aW9uIH0gZnJvbSBcInVpL2FuaW1hdGlvblwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcbmltcG9ydCB7IHByb21wdCB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IGFsZXJ0LCBMb2dpblNlcnZpY2UsIFVzZXIgfSBmcm9tIFwiLi4vc2hhcmVkXCI7XG5cbnZhciBqc29uZmlsZSA9IHJlcXVpcmUoXCIuLi9hbm5vdW5jZW1lbnQuanNvblwiKVxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhbm5vdW5jZW1lbnRzJyxcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0dGVtcGxhdGVVcmw6ICcuL2Fubm91bmNlbWVudHMuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9hbm5vdW5jZW1lbnRzLmNvbXBvbmVudC5jc3MnXSxcblx0cHJvdmlkZXJzOiBbTG9naW5TZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBBbm5vdW5jZW1lbnRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRwdWJsaWMgc291cmNlOkFycmF5PGFueT47XG5cbiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICBwcml2YXRlIExvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLFxuICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHRjb25zb2xlLmxvZyhcInJlYWQganNvbiBmaWxlXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhqc29uZmlsZSk7XG4gICAgICAgIHRoaXMuc291cmNlPWpzb25maWxlO1xuXHQgfVxuXHQgcHVibGljIGdvQmFjaygpIHtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2NsaWVudE1hc3RlclwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG59XG5cdHNob3dNZW51KCkge1xuICAgIGNvbmZpcm0oe1xuICAgICAgbWVzc2FnZTogXCJBcmUgeW91IFN1cmUgWW91IHdhbnQgdG8gbG9nIG9mZj9cIixcbiAgICAgIC8vYWN0aW9uczogW1wiU2hhcmVcIiwgXCJMb2cgT2ZmXCJdLFxuICAgICAgb2tCdXR0b25UZXh0OiBcIllFU1wiLFxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDQU5DRUxcIlxuICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgdGhpcy5sb2dvZmYoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxubG9nb2ZmKCkge1xuICAgIHRoaXMuTG9naW5TZXJ2aWNlLmxvZ29mZigpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIlwiXSk7XG4gIH0gXG5cdGxvYWRBbm5vdW5jZW1lbnRzKCl7XG4gICAgaWYgKGdldENvbm5lY3Rpb25UeXBlKCkgPT09IGNvbm5lY3Rpb25UeXBlLm5vbmUpIHtcbiAgICAgICAgYWxlcnQoXCJPb3BzISEgbG9va3MgbGlrZSB5b3VyIGRldmljZSBpcyBub3QgY29ubmVjdGVkIHRvIHRoZSBpbnRlcm5ldCBcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gICAgIFxuICAgICAgICB0aGlzLkxvZ2luU2VydmljZS5nZXRBbm91bmNlbWVudHMoKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIChyZXNwb25zZSkgPT4geyBcbiAgICAgICAgY29uc29sZS5sb2coXCJBbm5vdW5jZW1lbnQgUmVzcG9uc2VcIiArIHJlc3BvbnNlKSAgICAgICAgXG4gICAgICAgIH0sICAgICAgICAgIFxuICAgICAgICAoZXJyb3IpID0+IHsgY29uc29sZS5sb2coXCJFcnJvciBoYXBwZW5lZFwiLCBlcnJvci5tZXNzYWdlKX0sXG4gICAgICAgICgpID0+IHsgY29uc29sZS5sb2coXCJBbm5vdW5jZW1lbnQgaXMgY29tcGxldGVkXCIpXG4gICAgICAgfVxuICAgICk7ICAgICAgICAgXG4gIH1cbn0iXX0=