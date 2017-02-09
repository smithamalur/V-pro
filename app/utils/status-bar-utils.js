"use strict";
var application = require("application");
var platform = require("platform");
var utils = require("utils/utils");
function setStatusBarColors() {
    // Make the iOS status bar transparent with white text.
    // See https://github.com/burkeholland/nativescript-statusbar/issues/2
    // for details on the technique used.
    if (application.ios) {
        var AppDelegate = UIResponder.extend({
            applicationDidFinishLaunchingWithOptions: function () {
                utils.ios.getter(UIApplication, UIApplication.sharedApplication).statusBarStyle = UIStatusBarStyle.LightContent;
                return true;
            }
        }, {
            name: "AppDelegate",
            protocols: [UIApplicationDelegate]
        });
        application.ios.delegate = AppDelegate;
    }
    // Make the Android status bar transparent.
    // See http://bradmartin.net/2016/03/10/fullscreen-and-navigation-bar-color-in-a-nativescript-android-app/
    // for details on the technique used.
    if (application.android) {
        application.android.onActivityStarted = function () {
            if (application.android && platform.device.sdkVersion >= "21") {
                var View = android.view.View;
                var window_1 = application.android.startActivity.getWindow();
                window_1.setStatusBarColor(0x000000);
                var decorView = window_1.getDecorView();
                decorView.setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                    | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                    | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                    | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
            }
        };
    }
}
exports.setStatusBarColors = setStatusBarColors;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLWJhci11dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0YXR1cy1iYXItdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlDQUEyQztBQUMzQyxtQ0FBcUM7QUFDckMsbUNBQXFDO0FBUXJDO0lBQ0UsdURBQXVEO0lBQ3ZELHNFQUFzRTtJQUN0RSxxQ0FBcUM7SUFDckMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEIsSUFBSSxXQUFXLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUNuQyx3Q0FBd0MsRUFBRTtnQkFDeEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLGNBQWMsR0FBRyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUM7Z0JBQ2hILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDZCxDQUFDO1NBQ0YsRUFBRTtZQUNDLElBQUksRUFBRSxhQUFhO1lBQ25CLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1NBQ25DLENBQUMsQ0FBQztRQUNMLFdBQVcsQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztJQUN6QyxDQUFDO0lBRUQsMkNBQTJDO0lBQzNDLDBHQUEwRztJQUMxRyxxQ0FBcUM7SUFDckMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDeEIsV0FBVyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsR0FBRztZQUN0QyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzlELElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUM3QixJQUFJLFFBQU0sR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDM0QsUUFBTSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUVuQyxJQUFJLFNBQVMsR0FBRyxRQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3RDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FDN0IsSUFBSSxDQUFDLDRCQUE0QjtzQkFDL0IsSUFBSSxDQUFDLHFDQUFxQztzQkFDMUMsSUFBSSxDQUFDLGdDQUFnQztzQkFDckMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUM7WUFDNUMsQ0FBQztRQUNILENBQUMsQ0FBQztJQUNKLENBQUM7QUFDSCxDQUFDO0FBcENELGdEQW9DQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gXCJhcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgKiBhcyBwbGF0Zm9ybSBmcm9tIFwicGxhdGZvcm1cIjtcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcInV0aWxzL3V0aWxzXCI7XHJcblxyXG5kZWNsYXJlIHZhciBhbmRyb2lkOiBhbnk7XHJcbmRlY2xhcmUgdmFyIFVJUmVzcG9uZGVyOiBhbnk7XHJcbmRlY2xhcmUgdmFyIFVJU3RhdHVzQmFyU3R5bGU6IGFueTtcclxuZGVjbGFyZSB2YXIgVUlBcHBsaWNhdGlvbjogYW55O1xyXG5kZWNsYXJlIHZhciBVSUFwcGxpY2F0aW9uRGVsZWdhdGU6IGFueTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTdGF0dXNCYXJDb2xvcnMoKSB7XHJcbiAgLy8gTWFrZSB0aGUgaU9TIHN0YXR1cyBiYXIgdHJhbnNwYXJlbnQgd2l0aCB3aGl0ZSB0ZXh0LlxyXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYnVya2Vob2xsYW5kL25hdGl2ZXNjcmlwdC1zdGF0dXNiYXIvaXNzdWVzLzJcclxuICAvLyBmb3IgZGV0YWlscyBvbiB0aGUgdGVjaG5pcXVlIHVzZWQuXHJcbiAgaWYgKGFwcGxpY2F0aW9uLmlvcykge1xyXG4gICAgbGV0IEFwcERlbGVnYXRlID0gVUlSZXNwb25kZXIuZXh0ZW5kKHtcclxuICAgICAgYXBwbGljYXRpb25EaWRGaW5pc2hMYXVuY2hpbmdXaXRoT3B0aW9uczogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdXRpbHMuaW9zLmdldHRlcihVSUFwcGxpY2F0aW9uLCBVSUFwcGxpY2F0aW9uLnNoYXJlZEFwcGxpY2F0aW9uKS5zdGF0dXNCYXJTdHlsZSA9IFVJU3RhdHVzQmFyU3R5bGUuTGlnaHRDb250ZW50O1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogXCJBcHBEZWxlZ2F0ZVwiLFxyXG4gICAgICAgIHByb3RvY29sczogW1VJQXBwbGljYXRpb25EZWxlZ2F0ZV1cclxuICAgICAgfSk7XHJcbiAgICBhcHBsaWNhdGlvbi5pb3MuZGVsZWdhdGUgPSBBcHBEZWxlZ2F0ZTtcclxuICB9XHJcblxyXG4gIC8vIE1ha2UgdGhlIEFuZHJvaWQgc3RhdHVzIGJhciB0cmFuc3BhcmVudC5cclxuICAvLyBTZWUgaHR0cDovL2JyYWRtYXJ0aW4ubmV0LzIwMTYvMDMvMTAvZnVsbHNjcmVlbi1hbmQtbmF2aWdhdGlvbi1iYXItY29sb3ItaW4tYS1uYXRpdmVzY3JpcHQtYW5kcm9pZC1hcHAvXHJcbiAgLy8gZm9yIGRldGFpbHMgb24gdGhlIHRlY2huaXF1ZSB1c2VkLlxyXG4gIGlmIChhcHBsaWNhdGlvbi5hbmRyb2lkKSB7XHJcbiAgICBhcHBsaWNhdGlvbi5hbmRyb2lkLm9uQWN0aXZpdHlTdGFydGVkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmIChhcHBsaWNhdGlvbi5hbmRyb2lkICYmIHBsYXRmb3JtLmRldmljZS5zZGtWZXJzaW9uID49IFwiMjFcIikge1xyXG4gICAgICAgIGxldCBWaWV3ID0gYW5kcm9pZC52aWV3LlZpZXc7XHJcbiAgICAgICAgbGV0IHdpbmRvdyA9IGFwcGxpY2F0aW9uLmFuZHJvaWQuc3RhcnRBY3Rpdml0eS5nZXRXaW5kb3coKTtcclxuICAgICAgICB3aW5kb3cuc2V0U3RhdHVzQmFyQ29sb3IoMHgwMDAwMDApO1xyXG5cclxuICAgICAgICBsZXQgZGVjb3JWaWV3ID0gd2luZG93LmdldERlY29yVmlldygpO1xyXG4gICAgICAgIGRlY29yVmlldy5zZXRTeXN0ZW1VaVZpc2liaWxpdHkoXHJcbiAgICAgICAgICBWaWV3LlNZU1RFTV9VSV9GTEFHX0xBWU9VVF9TVEFCTEVcclxuICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19MQVlPVVRfSElERV9OQVZJR0FUSU9OXHJcbiAgICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX0ZVTExTQ1JFRU5cclxuICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19JTU1FUlNJVkVfU1RJQ0tZKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19