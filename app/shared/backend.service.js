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
exports.BackendService = BackendService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw2REFBNEQ7QUFFNUQsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDO0FBRXpCO0lBQUE7SUFlQSxDQUFDO0lBWkQsdUZBQXVGO0lBQzlFLHlCQUFVLEdBQWpCO1FBQ0UsTUFBTSxDQUFDLENBQUMsQ0FBQyxnQ0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxzQkFBVyx1QkFBSzthQUFoQjtZQUNFLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLENBQUM7YUFFRCxVQUFpQixRQUFnQjtZQUMvQixnQ0FBUyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUMvQixDQUFDOzs7T0FKQTtJQUtILHFCQUFDO0FBQUQsQ0FBQyxBQWZEO0FBQ0Usa0VBQWtFO0FBQzdELHFCQUFNLEdBQUcsbUVBQW1FLENBQUM7QUFGdkUsd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgZ2V0U3RyaW5nLCBzZXRTdHJpbmcgfSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuXHJcbmNvbnN0IHRva2VuS2V5ID0gXCJ0b2tlblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhY2tlbmRTZXJ2aWNlIHtcclxuICAvL3N0YXRpYyBhcGlVcmwgPSBcImh0dHBzOi8vYXBpLmV2ZXJsaXZlLmNvbS92MS9HV2ZSdFhpMUx3dDRqY3FLL1wiO1xyXG5zdGF0aWMgYXBpVXJsID0gXCJodHRwOi8vdnByb21vYmlsZXN2Yy53b2JzdGFnaW5nLmNvbS9zZXJ2aWNlMS5zdmMvQXV0aGVudGljYXRlVXNlclwiO1xyXG4vL3N0YXRpYyBhcGlVcmwgPSBcImh0dHA6Ly92cHJvbW9iaWxlc3ZjLndvYnN0YWdpbmcuY29tL3NlcnZpY2UxLnN2Yy9HZXRWZXNzZWxvcGVyYXRvclwiO1xyXG4gIHN0YXRpYyBpc0xvZ2dlZEluKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhZ2V0U3RyaW5nKFwidG9rZW5cIik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IHRva2VuKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gZ2V0U3RyaW5nKFwidG9rZW5cIik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2V0IHRva2VuKHRoZVRva2VuOiBzdHJpbmcpIHtcclxuICAgIHNldFN0cmluZyhcInRva2VuXCIsIHRoZVRva2VuKTtcclxuICB9XHJcbn0iXX0=