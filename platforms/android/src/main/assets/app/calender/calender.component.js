"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dialogs_1 = require("ui/dialogs");
var connectivity_1 = require("connectivity");
var page_1 = require("ui/page");
var router_2 = require("nativescript-angular/router");
var shared_1 = require("../shared");
var jsonfile = require("../calender.json");
var CalenderComponent = (function () {
    function CalenderComponent(router, LoginService, page, routerExtensions) {
        this.router = router;
        this.LoginService = LoginService;
        this.page = page;
        this.routerExtensions = routerExtensions;
    }
    CalenderComponent.prototype.ngOnInit = function () {
        console.log("read json file");
        console.log(jsonfile);
        this.source = jsonfile;
    };
    CalenderComponent.prototype.goBack = function () {
        this.routerExtensions.navigate(["/clientMaster"], { clearHistory: true });
    };
    CalenderComponent.prototype.showMenu = function () {
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
    CalenderComponent.prototype.logoff = function () {
        this.LoginService.logoff();
        this.router.navigate([""]);
    };
    CalenderComponent.prototype.loadCaender = function () {
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
    return CalenderComponent;
}());
CalenderComponent = __decorate([
    core_1.Component({
        selector: 'calender',
        moduleId: module.id,
        templateUrl: './calender.component.html',
        styleUrls: ['./calender.component.css'],
        providers: [shared_1.LoginService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        shared_1.LoginService,
        page_1.Page,
        router_2.RouterExtensions])
], CalenderComponent);
exports.CalenderComponent = CalenderComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FsZW5kZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxzQ0FBeUU7QUFDekUsMENBQXlDO0FBRXpDLHNDQUFxQztBQUNyQyw2Q0FBaUU7QUFJakUsZ0NBQStCO0FBRS9CLHNEQUE2RDtBQUM3RCxvQ0FBc0Q7QUFDdEQsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUE7QUFXMUMsSUFBYSxpQkFBaUI7SUFJM0IsMkJBQW9CLE1BQWMsRUFDMUIsWUFBMEIsRUFDMUIsSUFBVSxFQUNWLGdCQUFrQztRQUh0QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQzFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQUksQ0FBQztJQUVqRCxvQ0FBUSxHQUFSO1FBQWEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBQyxRQUFRLENBQUM7SUFBQSxDQUFDO0lBRW5CLGtDQUFNLEdBQWI7UUFDQSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUFBLGlCQVdHO1FBVkMsaUJBQU8sQ0FBQztZQUNOLE9BQU8sRUFBRSxtQ0FBbUM7WUFDNUMsZ0NBQWdDO1lBQ2hDLFlBQVksRUFBRSxLQUFLO1lBQ25CLGdCQUFnQixFQUFFLFFBQVE7U0FDM0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07WUFDWixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNaLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNoQixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsa0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRix1Q0FBVyxHQUFYO1FBQ0csRUFBRSxDQUFDLENBQUMsZ0NBQWlCLEVBQUUsS0FBSyw2QkFBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDOUMsY0FBSyxDQUFDLGlFQUFpRSxDQUFDLENBQUM7WUFDekUsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUNDLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFO2FBQ2xDLFNBQVMsQ0FDUixVQUFDLFFBQVE7WUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLFFBQVEsQ0FBQyxDQUFBO1FBQy9DLENBQUMsRUFDRCxVQUFDLEtBQUssSUFBTyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFBLENBQUMsRUFDMUQ7WUFBUSxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUE7UUFDakQsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBaERELElBZ0RDO0FBaERZLGlCQUFpQjtJQVQ3QixnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSwyQkFBMkI7UUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7UUFDdkMsU0FBUyxFQUFFLENBQUMscUJBQVksQ0FBQztLQUV6QixDQUFDO3FDQU02QixlQUFNO1FBQ1oscUJBQVk7UUFDcEIsV0FBSTtRQUNRLHlCQUFnQjtHQVBoQyxpQkFBaUIsQ0FnRDdCO0FBaERZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xuaW1wb3J0IHsgY29uZmlybSB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBjb25uZWN0aW9uVHlwZSwgZ2V0Q29ubmVjdGlvblR5cGUgfSBmcm9tIFwiY29ubmVjdGl2aXR5XCI7XG5pbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tIFwidWkvYW5pbWF0aW9uXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xuaW1wb3J0IHsgcHJvbXB0IH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgYWxlcnQsIExvZ2luU2VydmljZSwgVXNlciB9IGZyb20gXCIuLi9zaGFyZWRcIjtcbnZhciBqc29uZmlsZSA9IHJlcXVpcmUoXCIuLi9jYWxlbmRlci5qc29uXCIpXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NhbGVuZGVyJyxcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0dGVtcGxhdGVVcmw6ICcuL2NhbGVuZGVyLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vY2FsZW5kZXIuY29tcG9uZW50LmNzcyddLFxuXHRwcm92aWRlcnM6IFtMb2dpblNlcnZpY2VdXG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0cHVibGljIHNvdXJjZTpBcnJheTxhbnk+O1xuXG4gICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgcHJpdmF0ZSBMb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSxcbiAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykgeyB9XG5cblx0bmdPbkluaXQoKSB7IGNvbnNvbGUubG9nKFwicmVhZCBqc29uIGZpbGVcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKGpzb25maWxlKTtcbiAgICAgICAgdGhpcy5zb3VyY2U9anNvbmZpbGU7fVxuXG5cdFx0ICBwdWJsaWMgZ29CYWNrKCkge1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvY2xpZW50TWFzdGVyXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbn1cblxuc2hvd01lbnUoKSB7XG4gICAgY29uZmlybSh7XG4gICAgICBtZXNzYWdlOiBcIkFyZSB5b3UgU3VyZSBZb3Ugd2FudCB0byBsb2cgb2ZmP1wiLFxuICAgICAgLy9hY3Rpb25zOiBbXCJTaGFyZVwiLCBcIkxvZyBPZmZcIl0sXG4gICAgICBva0J1dHRvblRleHQ6IFwiWUVTXCIsXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNBTkNFTFwiXG4gICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICB0aGlzLmxvZ29mZigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5sb2dvZmYoKSB7XG4gICAgdGhpcy5Mb2dpblNlcnZpY2UubG9nb2ZmKCk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiXCJdKTtcbiAgfSBcblx0bG9hZENhZW5kZXIoKXtcbiAgICBpZiAoZ2V0Q29ubmVjdGlvblR5cGUoKSA9PT0gY29ubmVjdGlvblR5cGUubm9uZSkge1xuICAgICAgICBhbGVydChcIk9vcHMhISBsb29rcyBsaWtlIHlvdXIgZGV2aWNlIGlzIG5vdCBjb25uZWN0ZWQgdG8gdGhlIGludGVybmV0IFwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAgICAgXG4gICAgICAgIHRoaXMuTG9naW5TZXJ2aWNlLmdldEFub3VuY2VtZW50cygpXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgKHJlc3BvbnNlKSA9PiB7IFxuICAgICAgICBjb25zb2xlLmxvZyhcIkFubm91bmNlbWVudCBSZXNwb25zZVwiICsgcmVzcG9uc2UpICAgICAgICBcbiAgICAgICAgfSwgICAgICAgICAgXG4gICAgICAgIChlcnJvcikgPT4geyBjb25zb2xlLmxvZyhcIkVycm9yIGhhcHBlbmVkXCIsIGVycm9yLm1lc3NhZ2UpfSxcbiAgICAgICAgKCkgPT4geyBjb25zb2xlLmxvZyhcIkFubm91bmNlbWVudCBpcyBjb21wbGV0ZWRcIilcbiAgICAgICB9XG4gICAgKTsgICAgICAgICBcbiAgfVxufSJdfQ==