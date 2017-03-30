"use strict";
var application_settings_1 = require("application-settings");
var tokenKey = "token";
var BackendService = (function () {
    function BackendService() {
    }
    BackendService.isLoggedIn = function () {
        return !!application_settings_1.getString("token");
    };
    Object.defineProperty(BackendService, "token", {
        get: function () {
            return application_settings_1.getString("token");
        },
        set: function (theToken) {
            application_settings_1.setString("token", theToken);
        },
        enumerable: true,
        configurable: true
    });
    return BackendService;
}());
//static apiUrl = "https://api.everlive.com/v1/GWfRtXi1Lwt4jcqK/";
BackendService.apiUrl = "http://vpromobilesvc.wobstaging.com/service1.svc/AuthenticateUser";
BackendService.requestUrl = "http://vpromobilesvc.wobstaging.com/service1.svc/GetAssociatedRequest?userid=3507";
//static apiUrl = "http://vpromobilesvc.wobstaging.com/service1.svc/GetVesseloperator";
BackendService.announcementUrl = "http://vpromobilesvc.wobstaging.com/Service1.svc/GetAnnouncements";
BackendService.calenderUrl = "http://vpromobilesvc.wobstaging.com/Service1.svc/GetEvents?Userid=196";
exports.BackendService = BackendService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw2REFBNEQ7QUFFNUQsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDO0FBRXpCO0lBQUE7SUFrQkEsQ0FBQztJQVhRLHlCQUFVLEdBQWpCO1FBQ0UsTUFBTSxDQUFDLENBQUMsQ0FBQyxnQ0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxzQkFBVyx1QkFBSzthQUFoQjtZQUNFLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLENBQUM7YUFFRCxVQUFpQixRQUFnQjtZQUMvQixnQ0FBUyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUMvQixDQUFDOzs7T0FKQTtJQUtILHFCQUFDO0FBQUQsQ0FBQyxBQWxCRDtBQUNFLGtFQUFrRTtBQUM3RCxxQkFBTSxHQUFHLG1FQUFtRSxDQUFDO0FBQzdFLHlCQUFVLEdBQUcsbUZBQW1GLENBQUM7QUFDeEcsdUZBQXVGO0FBQ2hGLDhCQUFlLEdBQUUsbUVBQW1FLENBQUE7QUFDcEYsMEJBQVcsR0FBRSx1RUFBdUUsQ0FBQTtBQU45RSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBnZXRTdHJpbmcsIHNldFN0cmluZyB9IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5cclxuY29uc3QgdG9rZW5LZXkgPSBcInRva2VuXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFja2VuZFNlcnZpY2Uge1xyXG4gIC8vc3RhdGljIGFwaVVybCA9IFwiaHR0cHM6Ly9hcGkuZXZlcmxpdmUuY29tL3YxL0dXZlJ0WGkxTHd0NGpjcUsvXCI7XHJcbnN0YXRpYyBhcGlVcmwgPSBcImh0dHA6Ly92cHJvbW9iaWxlc3ZjLndvYnN0YWdpbmcuY29tL3NlcnZpY2UxLnN2Yy9BdXRoZW50aWNhdGVVc2VyXCI7XHJcbnN0YXRpYyByZXF1ZXN0VXJsID0gXCJodHRwOi8vdnByb21vYmlsZXN2Yy53b2JzdGFnaW5nLmNvbS9zZXJ2aWNlMS5zdmMvR2V0QXNzb2NpYXRlZFJlcXVlc3Q/dXNlcmlkPTM1MDdcIjtcclxuLy9zdGF0aWMgYXBpVXJsID0gXCJodHRwOi8vdnByb21vYmlsZXN2Yy53b2JzdGFnaW5nLmNvbS9zZXJ2aWNlMS5zdmMvR2V0VmVzc2Vsb3BlcmF0b3JcIjtcclxuc3RhdGljIGFubm91bmNlbWVudFVybCA9XCJodHRwOi8vdnByb21vYmlsZXN2Yy53b2JzdGFnaW5nLmNvbS9TZXJ2aWNlMS5zdmMvR2V0QW5ub3VuY2VtZW50c1wiXHJcbnN0YXRpYyBjYWxlbmRlclVybCA9XCJodHRwOi8vdnByb21vYmlsZXN2Yy53b2JzdGFnaW5nLmNvbS9TZXJ2aWNlMS5zdmMvR2V0RXZlbnRzP1VzZXJpZD0xOTZcIlxyXG4gIHN0YXRpYyBpc0xvZ2dlZEluKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhZ2V0U3RyaW5nKFwidG9rZW5cIik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IHRva2VuKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gZ2V0U3RyaW5nKFwidG9rZW5cIik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2V0IHRva2VuKHRoZVRva2VuOiBzdHJpbmcpIHtcclxuICAgIHNldFN0cmluZyhcInRva2VuXCIsIHRoZVRva2VuKTtcclxuICB9XHJcbn0iXX0=