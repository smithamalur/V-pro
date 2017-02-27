"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/catch");
var backend_service_1 = require("./backend.service");
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
    }
    /** GET API METHOD LOGIN ------------------------------------------------------------------------------------------*/
    // login(){
    //   return this.http.get(BackendService.apiUrl)
    //    // .map((res:Response) => JSON.parse(res.json()))\
    //    //.map(res => res.text())
    //    .map(res => {
    //      if(res.status < 200 || res.status >= 300) {
    //       throw new Error('This request has failed ' + res.status);
    //     } 
    //     // If everything went fine, return the response
    //     else {
    //       return res.json();
    //     }})
    //     .do(value => console.log("RESULT:", JSON.stringify(value)));
    // }
    /** ----------------------------------------------------------------------------------------------------------------- */
    LoginService.prototype.login = function (user) {
        var headers = new http_1.Headers();
        //In the headers object, the Content-Type specifies that the body represents JSON.
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        var urlSearchParams = new http_1.URLSearchParams();
        urlSearchParams.append('username', user.username);
        urlSearchParams.append('pwd', user.password);
        var body = urlSearchParams.toString();
        return this.http.post(backend_service_1.BackendService.apiUrl, body, { headers: headers })
            .map(function (response) {
            // login successful if there's a jwt token in the response
            // console.log("url: ", apiUrl);
            console.log("RESPONSE: ", response);
            var body = response.json();
            console.log("JSON BODY: ", JSON.stringify(body));
        })
            .catch(this.handleErrors);
    };
    /** HTTP POST LOGIN--------------------------------------------------------------------------------------------------  */
    // login(user: User) {
    //   //set headers for every request
    //   let headers = new Headers();
    //   //In the headers object, the Content-Type specifies that the body represents JSON.
    //   headers.append("Content-Type", "application/json");
    //   return this.http.post(
    //    BackendService.apiUrl,
    //     JSON.stringify({
    //       username: user.username, 
    //       pwd: user.password
    //     }),
    //     { headers: headers }
    //   )
    //   .map(response => response.json())
    //   .do(data => {
    //     BackendService.token = data.Result.access_token;
    //   })
    //   .catch(this.handleErrors);
    // }
    /** ---------------------------------------------------------------------------------------------------------------- */
    LoginService.prototype.logoff = function () {
        backend_service_1.BackendService.token = "";
    };
    LoginService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyQztBQUMzQyxzQ0FBeUU7QUFDekUsOEJBQXFDO0FBRXJDLGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFDL0IscUNBQW1DO0FBQ25DLG1DQUFpQztBQUdqQyxxREFBbUQ7QUFHbkQsSUFBYSxZQUFZO0lBQ3ZCLHNCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFJLENBQUM7SUFDckMscUhBQXFIO0lBQ3JILFdBQVc7SUFDWCxnREFBZ0Q7SUFDaEQsd0RBQXdEO0lBQ3hELCtCQUErQjtJQUMvQixtQkFBbUI7SUFDbkIsbURBQW1EO0lBQ25ELGtFQUFrRTtJQUNsRSxTQUFTO0lBQ1Qsc0RBQXNEO0lBQ3RELGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsVUFBVTtJQUNWLG1FQUFtRTtJQUVuRSxJQUFJO0lBQ0osd0hBQXdIO0lBRXhILDRCQUFLLEdBQUwsVUFBTSxJQUFVO1FBQ1osSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixrRkFBa0Y7UUFDbEYsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsbUNBQW1DLENBQUMsQ0FBQztRQUNwRSxJQUFJLGVBQWUsR0FBRyxJQUFJLHNCQUFlLEVBQUUsQ0FBQztRQUM1QyxlQUFlLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEQsZUFBZSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdDLElBQUksSUFBSSxHQUFHLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUVyQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ3BCLGdDQUFjLENBQUMsTUFBTSxFQUNyQixJQUFJLEVBQ0wsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFJbkIsR0FBRyxDQUFDLFVBQUMsUUFBa0I7WUFDWiwwREFBMEQ7WUFDM0QsZ0NBQWdDO1lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25DLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFBQSxDQUFDLENBQ2hEO2FBSVosS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUgseUhBQXlIO0lBQ3ZILHNCQUFzQjtJQUN0QixvQ0FBb0M7SUFDcEMsaUNBQWlDO0lBQ2pDLHVGQUF1RjtJQUN2Rix3REFBd0Q7SUFFeEQsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1Qix1QkFBdUI7SUFDdkIsa0NBQWtDO0lBQ2xDLDJCQUEyQjtJQUMzQixVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLE1BQU07SUFDTixzQ0FBc0M7SUFDdEMsa0JBQWtCO0lBQ2xCLHVEQUF1RDtJQUN2RCxPQUFPO0lBQ1AsK0JBQStCO0lBQy9CLElBQUk7SUFFSix1SEFBdUg7SUFFdkgsNkJBQU0sR0FBTjtRQUNFLGdDQUFjLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBSUQsbUNBQVksR0FBWixVQUFhLEtBQWU7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQW5GRCxJQW1GQztBQW5GWSxZQUFZO0lBRHhCLGlCQUFVLEVBQUU7cUNBRWUsV0FBSTtHQURuQixZQUFZLENBbUZ4QjtBQW5GWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSwgVVJMU2VhcmNoUGFyYW1zIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcblxyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvd1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiO1xyXG5cclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3VzZXIubW9kZWxcIjtcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi9iYWNrZW5kLnNlcnZpY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExvZ2luU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cclxuLyoqIEdFVCBBUEkgTUVUSE9EIExPR0lOIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8vIGxvZ2luKCl7XHJcbi8vICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoQmFja2VuZFNlcnZpY2UuYXBpVXJsKVxyXG4vLyAgICAvLyAubWFwKChyZXM6UmVzcG9uc2UpID0+IEpTT04ucGFyc2UocmVzLmpzb24oKSkpXFxcclxuLy8gICAgLy8ubWFwKHJlcyA9PiByZXMudGV4dCgpKVxyXG4vLyAgICAubWFwKHJlcyA9PiB7XHJcbi8vICAgICAgaWYocmVzLnN0YXR1cyA8IDIwMCB8fCByZXMuc3RhdHVzID49IDMwMCkge1xyXG4vLyAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgcmVxdWVzdCBoYXMgZmFpbGVkICcgKyByZXMuc3RhdHVzKTtcclxuLy8gICAgIH0gXHJcbi8vICAgICAvLyBJZiBldmVyeXRoaW5nIHdlbnQgZmluZSwgcmV0dXJuIHRoZSByZXNwb25zZVxyXG4vLyAgICAgZWxzZSB7XHJcbi8vICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4vLyAgICAgfX0pXHJcbi8vICAgICAuZG8odmFsdWUgPT4gY29uc29sZS5sb2coXCJSRVNVTFQ6XCIsIEpTT04uc3RyaW5naWZ5KHZhbHVlKSkpO1xyXG4gICAgICAgXHJcbi8vIH1cclxuLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5sb2dpbih1c2VyOiBVc2VyKSB7XHJcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAvL0luIHRoZSBoZWFkZXJzIG9iamVjdCwgdGhlIENvbnRlbnQtVHlwZSBzcGVjaWZpZXMgdGhhdCB0aGUgYm9keSByZXByZXNlbnRzIEpTT04uXHJcbiAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcclxuICAgIGxldCB1cmxTZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcbiAgICB1cmxTZWFyY2hQYXJhbXMuYXBwZW5kKCd1c2VybmFtZScsIHVzZXIudXNlcm5hbWUpO1xyXG4gICAgdXJsU2VhcmNoUGFyYW1zLmFwcGVuZCgncHdkJywgdXNlci5wYXNzd29yZCk7XHJcbiAgICBsZXQgYm9keSA9IHVybFNlYXJjaFBhcmFtcy50b1N0cmluZygpXHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxyXG4gICAgIEJhY2tlbmRTZXJ2aWNlLmFwaVVybCxcclxuICAgICBib2R5LFxyXG4gICAge2hlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgIFxyXG5cclxuXHJcbiAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGxvZ2luIHN1Y2Nlc3NmdWwgaWYgdGhlcmUncyBhIGp3dCB0b2tlbiBpbiB0aGUgcmVzcG9uc2VcclxuICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ1cmw6IFwiLCBhcGlVcmwpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSRVNQT05TRTogXCIscmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJvZHkgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkpTT04gQk9EWTogXCIsSlNPTi5zdHJpbmdpZnkoYm9keSkpO31cclxuICAgICAgICAgICAgICAgIClcclxuICAgIC8vIC5kbyhkYXRhID0+IHtcclxuICAgIC8vICAgQmFja2VuZFNlcnZpY2UudG9rZW4gPSBkYXRhLlJlc3VsdC5hY2Nlc3NfdG9rZW47XHJcbiAgICAvLyB9KVxyXG4gICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICB9XHJcbiAgIFxyXG4vKiogSFRUUCBQT1NUIExPR0lOLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gICovXHJcbiAgLy8gbG9naW4odXNlcjogVXNlcikge1xyXG4gIC8vICAgLy9zZXQgaGVhZGVycyBmb3IgZXZlcnkgcmVxdWVzdFxyXG4gIC8vICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gIC8vICAgLy9JbiB0aGUgaGVhZGVycyBvYmplY3QsIHRoZSBDb250ZW50LVR5cGUgc3BlY2lmaWVzIHRoYXQgdGhlIGJvZHkgcmVwcmVzZW50cyBKU09OLlxyXG4gIC8vICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG5cclxuICAvLyAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcclxuICAvLyAgICBCYWNrZW5kU2VydmljZS5hcGlVcmwsXHJcbiAgLy8gICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAvLyAgICAgICB1c2VybmFtZTogdXNlci51c2VybmFtZSwgXHJcbiAgLy8gICAgICAgcHdkOiB1c2VyLnBhc3N3b3JkXHJcbiAgLy8gICAgIH0pLFxyXG4gIC8vICAgICB7IGhlYWRlcnM6IGhlYWRlcnMgfVxyXG4gIC8vICAgKVxyXG4gIC8vICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgLy8gICAuZG8oZGF0YSA9PiB7XHJcbiAgLy8gICAgIEJhY2tlbmRTZXJ2aWNlLnRva2VuID0gZGF0YS5SZXN1bHQuYWNjZXNzX3Rva2VuO1xyXG4gIC8vICAgfSlcclxuICAvLyAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHJcbiAgLy8gfVxyXG4gIFxyXG4gIC8qKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4gIGxvZ29mZigpIHtcclxuICAgIEJhY2tlbmRTZXJ2aWNlLnRva2VuID0gXCJcIjtcclxuICB9XHJcblxyXG4gIFxyXG5cclxuICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcclxuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICB9XHJcbn1cclxuIl19