"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var connectivity_1 = require("connectivity");
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
    /**
     * gotoSRTPage
     */
    ClientMasterComponent.prototype.gotoSRTPage = function () {
        this.router.navigate(["srtDetails"]);
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
        page_1.Page])
], ClientMasterComponent);
exports.ClientMasterComponent = ClientMasterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50bWFzdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsaWVudG1hc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5RTtBQUN6RSwwQ0FBeUM7QUFFekMsNkNBQWlFO0FBSWpFLGdDQUErQjtBQUcvQixvQ0FBc0Q7QUFVckQsSUFBYSxxQkFBcUI7SUFJaEMsK0JBQW9CLE1BQWMsRUFDMUIsWUFBMEIsRUFDMUIsSUFBVTtRQUZFLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUpuQixjQUFTLEdBQUcsS0FBSyxDQUFDO0lBSUksQ0FBQztJQUV0Qix3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ25DLENBQUM7SUFFRCxxREFBcUIsR0FBckI7UUFDQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBQ0QscURBQXFCLEdBQXJCO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUVIOztPQUVHO0lBQ0ksMkNBQVcsR0FBbEI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUE7SUFDdEMsQ0FBQztJQUNELHVDQUFPLEdBQVA7UUFDQyxlQUFlO1FBQ1osRUFBRSxDQUFDLENBQUMsZ0NBQWlCLEVBQUUsS0FBSyw2QkFBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDOUMsY0FBSyxDQUFDLGlFQUFpRSxDQUFDLENBQUM7WUFDekUsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUVDLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLEVBQUU7YUFDdkMsU0FBUyxDQUNSLFVBQUMsUUFBUTtZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsUUFBUSxDQUFDLENBQUE7UUFFMUMsQ0FBQyxFQUVELFVBQUMsS0FBSyxJQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUEsQ0FBQyxFQUMxRDtZQUFRLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtRQUN4QyxDQUFDLENBQ0gsQ0FBQztJQUlKLENBQUM7SUFDRiw0QkFBQztBQUFELENBQUMsQUEvQ0QsSUErQ0M7QUEvQ1kscUJBQXFCO0lBUGxDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsY0FBYztRQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLCtCQUErQjtRQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztRQUMzQyxTQUFTLEVBQUUsQ0FBQyxxQkFBWSxDQUFDO0tBQzFCLENBQUM7cUNBSzZCLGVBQU07UUFDWixxQkFBWTtRQUNwQixXQUFJO0dBTlAscUJBQXFCLENBK0NqQztBQS9DWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xyXG5pbXBvcnQgeyBjb25uZWN0aW9uVHlwZSwgZ2V0Q29ubmVjdGlvblR5cGUgfSBmcm9tIFwiY29ubmVjdGl2aXR5XCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCJ1aS9hbmltYXRpb25cIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuaW1wb3J0IHsgcHJvbXB0IH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcblxyXG5pbXBvcnQgeyBhbGVydCwgTG9naW5TZXJ2aWNlLCBVc2VyIH0gZnJvbSBcIi4uL3NoYXJlZFwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImNsaWVudE1hc3RlclwiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NsaWVudG1hc3Rlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2NsaWVudG1hc3Rlci5jb21wb25lbnQuY3NzXCJdLFxyXG4gIHByb3ZpZGVyczogW0xvZ2luU2VydmljZV1cclxufSlcclxuIGV4cG9ydCBjbGFzcyBDbGllbnRNYXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcblxyXG4gIGlzTG9hZGluZyA9IGZhbHNlO1xyXG5cclxuICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgcHJpdmF0ZSBMb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSxcclxuICAgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7fVxyXG5cclxuICAgbmdPbkluaXQoKXtcclxuICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgfVxyXG5cclxuICAgc2hvd0FjdGl2aXR5SW5kaWNhdG9yKCkge1xyXG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gIH1cclxuICBoaWRlQWN0aXZpdHlJbmRpY2F0b3IoKSB7XHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbi8qKlxyXG4gKiBnb3RvU1JUUGFnZVxyXG4gKi9cclxucHVibGljIGdvdG9TUlRQYWdlKCkge1xyXG4gIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInNydERldGFpbHNcIl0pXHJcbn1cclxubG9hZHNydCgpe1xyXG4gLy8gYWxlcnQoXCJPS1wiKTtcclxuICAgIGlmIChnZXRDb25uZWN0aW9uVHlwZSgpID09PSBjb25uZWN0aW9uVHlwZS5ub25lKSB7XHJcbiAgICAgICAgYWxlcnQoXCJPb3BzISEgbG9va3MgbGlrZSB5b3VyIGRldmljZSBpcyBub3QgY29ubmVjdGVkIHRvIHRoZSBpbnRlcm5ldCBcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIHRoaXMuTG9naW5TZXJ2aWNlLmdldEFzc29jaWF0ZWRSZXF1ZXN0KClcclxuICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgKHJlc3BvbnNlKSA9PiB7IFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU3VjY2VzcyBSZXNwb25zZVwiICsgcmVzcG9uc2UpXHJcbiAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICAgIFxyXG4gICAgICAgIChlcnJvcikgPT4geyBjb25zb2xlLmxvZyhcIkVycm9yIGhhcHBlbmVkXCIsIGVycm9yLm1lc3NhZ2UpfSxcclxuICAgICAgICAoKSA9PiB7IGNvbnNvbGUubG9nKFwic3J0IGlzIGNvbXBsZXRlZFwiKVxyXG4gICAgICAgfVxyXG4gICAgKTsgICAgIFxyXG4gICAgICAgIFxyXG4gICAgIFxyXG4gICAgICBcclxuICB9XHJcbiB9XHJcbiJdfQ==