"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dialogs_1 = require("ui/dialogs");
var connectivity_1 = require("connectivity");
var page_1 = require("ui/page");
var router_2 = require("nativescript-angular/router");
var shared_1 = require("../shared");
var ClientMasterComponent = (function () {
    function ClientMasterComponent(router, LoginService, page, routerExtensions) {
        this.router = router;
        this.LoginService = LoginService;
        this.page = page;
        this.routerExtensions = routerExtensions;
        this.isLoading = false;
    }
    ClientMasterComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = false;
    };
    ClientMasterComponent.prototype.showActivityIndicator = function () {
        this.isLoading = true;
    };
    ClientMasterComponent.prototype.hideActivityIndicator = function () {
        this.isLoading = false;
    };
    /**
     * gotoSRTPage
     */
    ClientMasterComponent.prototype.gotoSRTPage = function () {
        this.router.navigate(["srtDetails"]);
    };
    ClientMasterComponent.prototype.gotoAnnouncementPage = function () {
        this.router.navigate(["announcements"]);
    };
    ClientMasterComponent.prototype.gotoCalenderPage = function () {
        this.router.navigate(["calender"]);
    };
    ClientMasterComponent.prototype.goBack = function () {
        this.routerExtensions.navigate([""], { clearHistory: true });
    };
    ClientMasterComponent.prototype.loadsrt = function () {
        if (connectivity_1.getConnectionType() === connectivity_1.connectionType.none) {
            shared_1.alert("Oops!! looks like your device is not connected to the internet ");
            return;
        }
        this.LoginService.getAssociatedRequest()
            .subscribe(function (response) {
            console.log("Success Response" + response);
        }, function (error) { console.log("Error happened", error.message); }, function () {
            console.log("srt is completed");
        });
    };
    ClientMasterComponent.prototype.showMenu = function () {
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
    ClientMasterComponent.prototype.logoff = function () {
        this.LoginService.logoff();
        this.router.navigate([""]);
    };
    return ClientMasterComponent;
}());
ClientMasterComponent = __decorate([
    core_1.Component({
        selector: "clientMaster",
        moduleId: module.id,
        templateUrl: './clientmaster.component.html',
        styleUrls: ["./clientmaster.component.css"],
        providers: [shared_1.LoginService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        shared_1.LoginService,
        page_1.Page,
        router_2.RouterExtensions])
], ClientMasterComponent);
exports.ClientMasterComponent = ClientMasterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50bWFzdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsaWVudG1hc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5RTtBQUN6RSwwQ0FBeUM7QUFFekMsc0NBQXFDO0FBQ3JDLDZDQUFpRTtBQUlqRSxnQ0FBK0I7QUFFL0Isc0RBQTZEO0FBQzdELG9DQUFzRDtBQVNyRCxJQUFhLHFCQUFxQjtJQUloQywrQkFBb0IsTUFBYyxFQUMxQixZQUEwQixFQUMxQixJQUFVLEVBQ1YsZ0JBQWtDO1FBSHRCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFMM0MsY0FBUyxHQUFHLEtBQUssQ0FBQztJQU1kLENBQUM7SUFFSix3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBRXBDLENBQUM7SUFHRCxxREFBcUIsR0FBckI7UUFDQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBQ0QscURBQXFCLEdBQXJCO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUVIOztPQUVHO0lBQ0ksMkNBQVcsR0FBbEI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUE7SUFDdEMsQ0FBQztJQUNNLG9EQUFvQixHQUEzQjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0lBQ00sZ0RBQWdCLEdBQXZCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO0lBQ3BDLENBQUM7SUFFTSxzQ0FBTSxHQUFiO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUNELHVDQUFPLEdBQVA7UUFDSSxFQUFFLENBQUMsQ0FBQyxnQ0FBaUIsRUFBRSxLQUFLLDZCQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM5QyxjQUFLLENBQUMsaUVBQWlFLENBQUMsQ0FBQztZQUN6RSxNQUFNLENBQUM7UUFDVCxDQUFDO1FBQ0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsRUFBRTthQUN2QyxTQUFTLENBQ1IsVUFBQyxRQUFRO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxRQUFRLENBQUMsQ0FBQTtRQUMxQyxDQUFDLEVBQ0QsVUFBQyxLQUFLLElBQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUEsQ0FBQSxDQUFDLEVBQzFEO1lBQVEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1FBQ3hDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVDLHdDQUFRLEdBQVI7UUFBQSxpQkFXRDtRQVZDLGlCQUFPLENBQUM7WUFDTixPQUFPLEVBQUUsbUNBQW1DO1lBQzVDLGdDQUFnQztZQUNoQyxZQUFZLEVBQUUsS0FBSztZQUNuQixnQkFBZ0IsRUFBRSxRQUFRO1NBQzNCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1lBQ1osRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDWixLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDaEIsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVBLHNDQUFNLEdBQU47UUFDQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0YsNEJBQUM7QUFBRCxDQUFDLEFBeEVELElBd0VDO0FBeEVZLHFCQUFxQjtJQVBsQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGNBQWM7UUFDeEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSwrQkFBK0I7UUFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7UUFDM0MsU0FBUyxFQUFFLENBQUMscUJBQVksQ0FBQztLQUMxQixDQUFDO3FDQUs2QixlQUFNO1FBQ1oscUJBQVk7UUFDcEIsV0FBSTtRQUNRLHlCQUFnQjtHQVAvQixxQkFBcUIsQ0F3RWpDO0FBeEVZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XHJcbmltcG9ydCB7IGNvbmZpcm0gfSBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBjb25uZWN0aW9uVHlwZSwgZ2V0Q29ubmVjdGlvblR5cGUgfSBmcm9tIFwiY29ubmVjdGl2aXR5XCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCJ1aS9hbmltYXRpb25cIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuaW1wb3J0IHsgcHJvbXB0IH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBhbGVydCwgTG9naW5TZXJ2aWNlLCBVc2VyIH0gZnJvbSBcIi4uL3NoYXJlZFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiY2xpZW50TWFzdGVyXCIsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2xpZW50bWFzdGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFtcIi4vY2xpZW50bWFzdGVyLmNvbXBvbmVudC5jc3NcIl0sXHJcbiAgcHJvdmlkZXJzOiBbTG9naW5TZXJ2aWNlXVxyXG59KVxyXG4gZXhwb3J0IGNsYXNzIENsaWVudE1hc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHJcbiAgaXNMb2FkaW5nID0gZmFsc2U7XHJcbiBcclxuICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgcHJpdmF0ZSBMb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSxcclxuICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxyXG4gICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcclxuICAgKSB7fVxyXG4gICBcclxuICAgbmdPbkluaXQoKXtcclxuICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gZmFsc2U7XHJcbiAgICAgIFxyXG4gICB9XHJcbiAgIFxyXG5cclxuICAgc2hvd0FjdGl2aXR5SW5kaWNhdG9yKCkge1xyXG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gIH1cclxuICBoaWRlQWN0aXZpdHlJbmRpY2F0b3IoKSB7XHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbi8qKlxyXG4gKiBnb3RvU1JUUGFnZVxyXG4gKi9cclxucHVibGljIGdvdG9TUlRQYWdlKCkge1xyXG4gIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInNydERldGFpbHNcIl0pXHJcbn1cclxucHVibGljIGdvdG9Bbm5vdW5jZW1lbnRQYWdlKCkge1xyXG4gIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImFubm91bmNlbWVudHNcIl0pXHJcbn1cclxucHVibGljIGdvdG9DYWxlbmRlclBhZ2UoKSB7XHJcbiAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiY2FsZW5kZXJcIl0pXHJcbn1cclxuXHJcbnB1YmxpYyBnb0JhY2soKSB7XHJcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxufVxyXG5sb2Fkc3J0KCl7XHJcbiAgICBpZiAoZ2V0Q29ubmVjdGlvblR5cGUoKSA9PT0gY29ubmVjdGlvblR5cGUubm9uZSkge1xyXG4gICAgICAgIGFsZXJ0KFwiT29wcyEhIGxvb2tzIGxpa2UgeW91ciBkZXZpY2UgaXMgbm90IGNvbm5lY3RlZCB0byB0aGUgaW50ZXJuZXQgXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSAgICAgXHJcbiAgICAgICAgdGhpcy5Mb2dpblNlcnZpY2UuZ2V0QXNzb2NpYXRlZFJlcXVlc3QoKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAocmVzcG9uc2UpID0+IHsgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTdWNjZXNzIFJlc3BvbnNlXCIgKyByZXNwb25zZSkgICAgICAgIFxyXG4gICAgICAgIH0sICAgICAgICAgIFxyXG4gICAgICAgIChlcnJvcikgPT4geyBjb25zb2xlLmxvZyhcIkVycm9yIGhhcHBlbmVkXCIsIGVycm9yLm1lc3NhZ2UpfSxcclxuICAgICAgICAoKSA9PiB7IGNvbnNvbGUubG9nKFwic3J0IGlzIGNvbXBsZXRlZFwiKVxyXG4gICAgICAgfVxyXG4gICAgKTsgICAgICAgICBcclxuICB9XHJcblxyXG4gICAgc2hvd01lbnUoKXtcclxuICAgIGNvbmZpcm0oe1xyXG4gICAgICBtZXNzYWdlOiBcIkFyZSB5b3UgU3VyZSBZb3Ugd2FudCB0byBsb2cgb2ZmP1wiLFxyXG4gICAgICAvL2FjdGlvbnM6IFtcIlNoYXJlXCIsIFwiTG9nIE9mZlwiXSxcclxuICAgICAgb2tCdXR0b25UZXh0OiBcIllFU1wiLFxyXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNBTkNFTFwiXHJcbiAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICB0aGlzLmxvZ29mZigpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gICBsb2dvZmYoKSB7XHJcbiAgICB0aGlzLkxvZ2luU2VydmljZS5sb2dvZmYoKTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIlwiXSk7XHJcbiAgfVxyXG4gfVxyXG4iXX0=