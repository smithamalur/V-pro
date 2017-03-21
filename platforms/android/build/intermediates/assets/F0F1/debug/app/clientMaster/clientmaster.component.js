"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dialogs_1 = require("ui/dialogs");
var connectivity_1 = require("connectivity");
var page_1 = require("ui/page");
var router_2 = require("nativescript-angular/router");
var shared_1 = require("../shared");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("Slide", function () { return require("nativescript-slides").Slide; });
element_registry_1.registerElement("SlideContainer", function () { return require("nativescript-slides").SlideContainer; });
var ClientMasterComponent = (function () {
    function ClientMasterComponent(router, LoginService, page, routerExtensions) {
        this.router = router;
        this.LoginService = LoginService;
        this.page = page;
        this.routerExtensions = routerExtensions;
        this.isLoading = false;
    }
    // @ViewChild("slides") slides: ElementRef;
    ClientMasterComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = false;
        // let SlidesXml = this.slides.nativeElement;
        //  SlidesXml.constructView();
    };
    // ngAfterViewInit() {
    //     let SlidesXml = this.slides.nativeElement;
    //     SlidesXml.constructView();
    // }
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
    ClientMasterComponent.prototype.goBack = function () {
        this.routerExtensions.navigate([""], { clearHistory: true });
    };
    ClientMasterComponent.prototype.loadsrt = function () {
        // alert("OK");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50bWFzdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsaWVudG1hc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5RTtBQUN6RSwwQ0FBeUM7QUFFekMsc0NBQXFDO0FBQ3JDLDZDQUFpRTtBQUlqRSxnQ0FBK0I7QUFFL0Isc0RBQTZEO0FBQzdELG9DQUFzRDtBQUN0RCwwRUFBc0U7QUFFdEUsa0NBQWUsQ0FBQyxPQUFPLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEtBQUssRUFBcEMsQ0FBb0MsQ0FBQyxDQUFDO0FBQ3JFLGtDQUFlLENBQUMsZ0JBQWdCLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLGNBQWMsRUFBN0MsQ0FBNkMsQ0FBQyxDQUFDO0FBU3RGLElBQWEscUJBQXFCO0lBSWhDLCtCQUFvQixNQUFjLEVBQzFCLFlBQTBCLEVBQzFCLElBQVUsRUFDVixnQkFBa0M7UUFIdEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUMxQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUwzQyxjQUFTLEdBQUcsS0FBSyxDQUFDO0lBTWQsQ0FBQztJQUNKLDJDQUEyQztJQUMzQyx3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLDZDQUE2QztRQUM3Qyw4QkFBOEI7SUFDakMsQ0FBQztJQUNBLHNCQUFzQjtJQUN0QixpREFBaUQ7SUFDakQsaUNBQWlDO0lBQ2pDLElBQUk7SUFFTCxxREFBcUIsR0FBckI7UUFDQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBQ0QscURBQXFCLEdBQXJCO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUVIOztPQUVHO0lBQ0ksMkNBQVcsR0FBbEI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUE7SUFDdEMsQ0FBQztJQUVNLHNDQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBQ0QsdUNBQU8sR0FBUDtRQUNDLGVBQWU7UUFDWixFQUFFLENBQUMsQ0FBQyxnQ0FBaUIsRUFBRSxLQUFLLDZCQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUU5QyxjQUFLLENBQUMsaUVBQWlFLENBQUMsQ0FBQztZQUN6RSxNQUFNLENBQUM7UUFDVCxDQUFDO1FBRUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsRUFBRTthQUN2QyxTQUFTLENBQ1IsVUFBQyxRQUFRO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxRQUFRLENBQUMsQ0FBQTtRQUUxQyxDQUFDLEVBRUQsVUFBQyxLQUFLLElBQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUEsQ0FBQSxDQUFDLEVBQzFEO1lBQVEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1FBQ3hDLENBQUMsQ0FDSCxDQUFDO0lBSUosQ0FBQztJQUVDLHdDQUFRLEdBQVI7UUFBQSxpQkFXRDtRQVZDLGlCQUFPLENBQUM7WUFDTixPQUFPLEVBQUUsbUNBQW1DO1lBQzVDLGdDQUFnQztZQUNoQyxZQUFZLEVBQUUsS0FBSztZQUNuQixnQkFBZ0IsRUFBRSxRQUFRO1NBQzNCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1lBQ1osRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDWixLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDaEIsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVBLHNDQUFNLEdBQU47UUFDQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0YsNEJBQUM7QUFBRCxDQUFDLEFBOUVELElBOEVDO0FBOUVZLHFCQUFxQjtJQVBsQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGNBQWM7UUFDeEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSwrQkFBK0I7UUFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7UUFDM0MsU0FBUyxFQUFFLENBQUMscUJBQVksQ0FBQztLQUMxQixDQUFDO3FDQUs2QixlQUFNO1FBQ1oscUJBQVk7UUFDcEIsV0FBSTtRQUNRLHlCQUFnQjtHQVAvQixxQkFBcUIsQ0E4RWpDO0FBOUVZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XHJcbmltcG9ydCB7IGNvbmZpcm0gfSBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBjb25uZWN0aW9uVHlwZSwgZ2V0Q29ubmVjdGlvblR5cGUgfSBmcm9tIFwiY29ubmVjdGl2aXR5XCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCJ1aS9hbmltYXRpb25cIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuaW1wb3J0IHsgcHJvbXB0IH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBhbGVydCwgTG9naW5TZXJ2aWNlLCBVc2VyIH0gZnJvbSBcIi4uL3NoYXJlZFwiO1xyXG5pbXBvcnQge3JlZ2lzdGVyRWxlbWVudH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcclxuXHJcbnJlZ2lzdGVyRWxlbWVudChcIlNsaWRlXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc2xpZGVzXCIpLlNsaWRlKTtcclxucmVnaXN0ZXJFbGVtZW50KFwiU2xpZGVDb250YWluZXJcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zbGlkZXNcIikuU2xpZGVDb250YWluZXIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiY2xpZW50TWFzdGVyXCIsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2xpZW50bWFzdGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFtcIi4vY2xpZW50bWFzdGVyLmNvbXBvbmVudC5jc3NcIl0sXHJcbiAgcHJvdmlkZXJzOiBbTG9naW5TZXJ2aWNlXVxyXG59KVxyXG4gZXhwb3J0IGNsYXNzIENsaWVudE1hc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHJcbiAgaXNMb2FkaW5nID0gZmFsc2U7XHJcbiBcclxuICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgcHJpdmF0ZSBMb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSxcclxuICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxyXG4gICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcclxuICAgKSB7fVxyXG4gICAvLyBAVmlld0NoaWxkKFwic2xpZGVzXCIpIHNsaWRlczogRWxlbWVudFJlZjtcclxuICAgbmdPbkluaXQoKXtcclxuICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gZmFsc2U7XHJcbiAgICAgIC8vIGxldCBTbGlkZXNYbWwgPSB0aGlzLnNsaWRlcy5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAvLyAgU2xpZGVzWG1sLmNvbnN0cnVjdFZpZXcoKTtcclxuICAgfVxyXG4gICAgLy8gbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgLy8gICAgIGxldCBTbGlkZXNYbWwgPSB0aGlzLnNsaWRlcy5uYXRpdmVFbGVtZW50O1xyXG4gICAgLy8gICAgIFNsaWRlc1htbC5jb25zdHJ1Y3RWaWV3KCk7XHJcbiAgICAvLyB9XHJcblxyXG4gICBzaG93QWN0aXZpdHlJbmRpY2F0b3IoKSB7XHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgfVxyXG4gIGhpZGVBY3Rpdml0eUluZGljYXRvcigpIHtcclxuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuLyoqXHJcbiAqIGdvdG9TUlRQYWdlXHJcbiAqL1xyXG5wdWJsaWMgZ290b1NSVFBhZ2UoKSB7XHJcbiAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wic3J0RGV0YWlsc1wiXSlcclxufVxyXG5cclxucHVibGljIGdvQmFjaygpIHtcclxuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG59XHJcbmxvYWRzcnQoKXtcclxuIC8vIGFsZXJ0KFwiT0tcIik7XHJcbiAgICBpZiAoZ2V0Q29ubmVjdGlvblR5cGUoKSA9PT0gY29ubmVjdGlvblR5cGUubm9uZSkge1xyXG4gICAgICBcclxuICAgICAgICBhbGVydChcIk9vcHMhISBsb29rcyBsaWtlIHlvdXIgZGV2aWNlIGlzIG5vdCBjb25uZWN0ZWQgdG8gdGhlIGludGVybmV0IFwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgdGhpcy5Mb2dpblNlcnZpY2UuZ2V0QXNzb2NpYXRlZFJlcXVlc3QoKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAocmVzcG9uc2UpID0+IHsgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTdWNjZXNzIFJlc3BvbnNlXCIgKyByZXNwb25zZSlcclxuICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgKGVycm9yKSA9PiB7IGNvbnNvbGUubG9nKFwiRXJyb3IgaGFwcGVuZWRcIiwgZXJyb3IubWVzc2FnZSl9LFxyXG4gICAgICAgICgpID0+IHsgY29uc29sZS5sb2coXCJzcnQgaXMgY29tcGxldGVkXCIpXHJcbiAgICAgICB9XHJcbiAgICApOyAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgXHJcbiAgICAgIFxyXG4gIH1cclxuXHJcbiAgICBzaG93TWVudSgpIHtcclxuICAgIGNvbmZpcm0oe1xyXG4gICAgICBtZXNzYWdlOiBcIkFyZSB5b3UgU3VyZSBZb3Ugd2FudCB0byBsb2cgb2ZmP1wiLFxyXG4gICAgICAvL2FjdGlvbnM6IFtcIlNoYXJlXCIsIFwiTG9nIE9mZlwiXSxcclxuICAgICAgb2tCdXR0b25UZXh0OiBcIllFU1wiLFxyXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNBTkNFTFwiXHJcbiAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICB0aGlzLmxvZ29mZigpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gICBsb2dvZmYoKSB7XHJcbiAgICB0aGlzLkxvZ2luU2VydmljZS5sb2dvZmYoKTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIlwiXSk7XHJcbiAgfVxyXG4gfVxyXG4iXX0=