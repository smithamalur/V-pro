"use strict";
var application_settings_1 = require("application-settings");
var tokenKey = "token";
var BackendService = (function () {
    function BackendService() {
    }
    //static apiUrl = "http://vpromobilesvc.wobstaging.com/service1.svc/GetVesseloperator";
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
exports.BackendService = BackendService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw2REFBNEQ7QUFFNUQsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDO0FBRXpCO0lBQUE7SUFnQkEsQ0FBQztJQVpELHVGQUF1RjtJQUM5RSx5QkFBVSxHQUFqQjtRQUNFLE1BQU0sQ0FBQyxDQUFDLENBQUMsZ0NBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsc0JBQVcsdUJBQUs7YUFBaEI7WUFDRSxNQUFNLENBQUMsZ0NBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QixDQUFDO2FBRUQsVUFBaUIsUUFBZ0I7WUFDL0IsZ0NBQVMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDL0IsQ0FBQzs7O09BSkE7SUFLSCxxQkFBQztBQUFELENBQUMsQUFoQkQ7QUFDRSxrRUFBa0U7QUFDN0QscUJBQU0sR0FBRyxtRUFBbUUsQ0FBQztBQUM3RSx5QkFBVSxHQUFHLG1GQUFtRixDQUFDO0FBSDNGLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IGdldFN0cmluZywgc2V0U3RyaW5nIH0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcblxyXG5jb25zdCB0b2tlbktleSA9IFwidG9rZW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCYWNrZW5kU2VydmljZSB7XHJcbiAgLy9zdGF0aWMgYXBpVXJsID0gXCJodHRwczovL2FwaS5ldmVybGl2ZS5jb20vdjEvR1dmUnRYaTFMd3Q0amNxSy9cIjtcclxuc3RhdGljIGFwaVVybCA9IFwiaHR0cDovL3Zwcm9tb2JpbGVzdmMud29ic3RhZ2luZy5jb20vc2VydmljZTEuc3ZjL0F1dGhlbnRpY2F0ZVVzZXJcIjtcclxuc3RhdGljIHJlcXVlc3RVcmwgPSBcImh0dHA6Ly92cHJvbW9iaWxlc3ZjLndvYnN0YWdpbmcuY29tL3NlcnZpY2UxLnN2Yy9HZXRBc3NvY2lhdGVkUmVxdWVzdD91c2VyaWQ9MzUwN1wiO1xyXG4vL3N0YXRpYyBhcGlVcmwgPSBcImh0dHA6Ly92cHJvbW9iaWxlc3ZjLndvYnN0YWdpbmcuY29tL3NlcnZpY2UxLnN2Yy9HZXRWZXNzZWxvcGVyYXRvclwiO1xyXG4gIHN0YXRpYyBpc0xvZ2dlZEluKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhZ2V0U3RyaW5nKFwidG9rZW5cIik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IHRva2VuKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gZ2V0U3RyaW5nKFwidG9rZW5cIik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2V0IHRva2VuKHRoZVRva2VuOiBzdHJpbmcpIHtcclxuICAgIHNldFN0cmluZyhcInRva2VuXCIsIHRoZVRva2VuKTtcclxuICB9XHJcbn0iXX0=