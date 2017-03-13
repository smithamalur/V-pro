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
        headers.append("Content-Type", "application/json");
        var urlSearchParams = new http_1.URLSearchParams();
        urlSearchParams.append('username', user.username);
        urlSearchParams.append('pwd', user.password);
        var body = urlSearchParams.toString();
        console.log("body" + body);
        return this.http.post(backend_service_1.BackendService.apiUrl, body, { headers: headers })
            .map(function (response) {
            response.json();
            // login successful if there's a jwt token in the response
            console.log("RESPONSE: " + response.url);
            console.log("response json " + response.status);
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
    LoginService.prototype.getAssociatedRequest = function () {
        var headers = new http_1.Headers();
        //In the headers object, the Content-Type specifies that the body represents JSON.
        return this.http.get(backend_service_1.BackendService.requestUrl)
            .map(function (response) {
            // login successful if there's a jwt token in the response
            console.log("RESPONSE: ", response);
            var body = response.json();
            console.log("JSON BODY: ", JSON.stringify(body));
            alert(JSON.stringify(body));
        })
            .catch(this.handleErrors);
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyQztBQUMzQyxzQ0FBeUU7QUFDekUsOEJBQXFDO0FBRXJDLGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFDL0IscUNBQW1DO0FBQ25DLG1DQUFpQztBQUdqQyxxREFBbUQ7QUFHbkQsSUFBYSxZQUFZO0lBQ3ZCLHNCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFJLENBQUM7SUFDckMscUhBQXFIO0lBQ3JILFdBQVc7SUFDWCxnREFBZ0Q7SUFDaEQsd0RBQXdEO0lBQ3hELCtCQUErQjtJQUMvQixtQkFBbUI7SUFDbkIsbURBQW1EO0lBQ25ELGtFQUFrRTtJQUNsRSxTQUFTO0lBQ1Qsc0RBQXNEO0lBQ3RELGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsVUFBVTtJQUNWLG1FQUFtRTtJQUVuRSxJQUFJO0lBQ0osd0hBQXdIO0lBRXhILDRCQUFLLEdBQUwsVUFBTSxJQUFVO1FBQ1osSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixrRkFBa0Y7UUFDbEYsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNuRCxJQUFJLGVBQWUsR0FBRyxJQUFJLHNCQUFlLEVBQUUsQ0FBQztRQUM1QyxlQUFlLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEQsZUFBZSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdDLElBQUksSUFBSSxHQUFHLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBQyxJQUFJLENBQUMsQ0FBQztRQUV6QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ3BCLGdDQUFjLENBQUMsTUFBTSxFQUNyQixJQUFJLEVBQ0wsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDbkIsR0FBRyxDQUFDLFVBQUMsUUFBUTtZQUNGLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNoQiwwREFBMEQ7WUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlDLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFbEQsQ0FBQyxDQUNFO2FBR1osS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBR0gseUhBQXlIO0lBQ3ZILHNCQUFzQjtJQUN0QixvQ0FBb0M7SUFDcEMsaUNBQWlDO0lBQ2pDLHVGQUF1RjtJQUN2Rix3REFBd0Q7SUFFeEQsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1Qix1QkFBdUI7SUFDdkIsa0NBQWtDO0lBQ2xDLDJCQUEyQjtJQUMzQixVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLE1BQU07SUFDTixzQ0FBc0M7SUFDdEMsa0JBQWtCO0lBQ2xCLHVEQUF1RDtJQUN2RCxPQUFPO0lBQ1AsK0JBQStCO0lBQy9CLElBQUk7SUFFSix1SEFBdUg7SUFFekgsMkNBQW9CLEdBQXBCO1FBQ0EsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUN4QixrRkFBa0Y7UUFFbEYsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNuQixnQ0FBYyxDQUFDLFVBQVUsQ0FDM0I7YUFDRSxHQUFHLENBQUMsVUFBQyxRQUFrQjtZQUNaLDBEQUEwRDtZQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBQyxRQUFRLENBQUMsQ0FBQztZQUNuQyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2pELEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFBQSxDQUFDLENBQzNCO2FBRVosS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsNkJBQU0sR0FBTjtRQUNFLGdDQUFjLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBSUQsbUNBQVksR0FBWixVQUFhLEtBQWU7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQXRHRCxJQXNHQztBQXRHWSxZQUFZO0lBRHhCLGlCQUFVLEVBQUU7cUNBRWUsV0FBSTtHQURuQixZQUFZLENBc0d4QjtBQXRHWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSwgVVJMU2VhcmNoUGFyYW1zIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcblxyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvd1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiO1xyXG5cclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3VzZXIubW9kZWxcIjtcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi9iYWNrZW5kLnNlcnZpY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExvZ2luU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cclxuLyoqIEdFVCBBUEkgTUVUSE9EIExPR0lOIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8vIGxvZ2luKCl7XHJcbi8vICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoQmFja2VuZFNlcnZpY2UuYXBpVXJsKVxyXG4vLyAgICAvLyAubWFwKChyZXM6UmVzcG9uc2UpID0+IEpTT04ucGFyc2UocmVzLmpzb24oKSkpXFxcclxuLy8gICAgLy8ubWFwKHJlcyA9PiByZXMudGV4dCgpKVxyXG4vLyAgICAubWFwKHJlcyA9PiB7XHJcbi8vICAgICAgaWYocmVzLnN0YXR1cyA8IDIwMCB8fCByZXMuc3RhdHVzID49IDMwMCkge1xyXG4vLyAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgcmVxdWVzdCBoYXMgZmFpbGVkICcgKyByZXMuc3RhdHVzKTtcclxuLy8gICAgIH0gXHJcbi8vICAgICAvLyBJZiBldmVyeXRoaW5nIHdlbnQgZmluZSwgcmV0dXJuIHRoZSByZXNwb25zZVxyXG4vLyAgICAgZWxzZSB7XHJcbi8vICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4vLyAgICAgfX0pXHJcbi8vICAgICAuZG8odmFsdWUgPT4gY29uc29sZS5sb2coXCJSRVNVTFQ6XCIsIEpTT04uc3RyaW5naWZ5KHZhbHVlKSkpO1xyXG4gICAgICAgXHJcbi8vIH1cclxuLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5sb2dpbih1c2VyOiBVc2VyKSB7XHJcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAvL0luIHRoZSBoZWFkZXJzIG9iamVjdCwgdGhlIENvbnRlbnQtVHlwZSBzcGVjaWZpZXMgdGhhdCB0aGUgYm9keSByZXByZXNlbnRzIEpTT04uXHJcbiAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICBsZXQgdXJsU2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xyXG4gICAgdXJsU2VhcmNoUGFyYW1zLmFwcGVuZCgndXNlcm5hbWUnLCB1c2VyLnVzZXJuYW1lKTtcclxuICAgIHVybFNlYXJjaFBhcmFtcy5hcHBlbmQoJ3B3ZCcsIHVzZXIucGFzc3dvcmQpO1xyXG4gICAgbGV0IGJvZHkgPSB1cmxTZWFyY2hQYXJhbXMudG9TdHJpbmcoKTtcclxuICAgIGNvbnNvbGUubG9nKFwiYm9keVwiK2JvZHkpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcclxuICAgICBCYWNrZW5kU2VydmljZS5hcGlVcmwsXHJcbiAgICAgYm9keSxcclxuICAgIHtoZWFkZXJzOiBoZWFkZXJzIH0pXHJcbiAgICAubWFwKChyZXNwb25zZSApID0+IHsgXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICAvLyBsb2dpbiBzdWNjZXNzZnVsIGlmIHRoZXJlJ3MgYSBqd3QgdG9rZW4gaW4gdGhlIHJlc3BvbnNlXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJFU1BPTlNFOiBcIityZXNwb25zZS51cmwpOyAgICBcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2UganNvbiBcIityZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJvZHkgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkpTT04gQk9EWTogXCIsSlNPTi5zdHJpbmdpZnkoYm9keSkpO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICB9XHJcbiAgXHJcbiAgIFxyXG4vKiogSFRUUCBQT1NUIExPR0lOLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gICovXHJcbiAgLy8gbG9naW4odXNlcjogVXNlcikge1xyXG4gIC8vICAgLy9zZXQgaGVhZGVycyBmb3IgZXZlcnkgcmVxdWVzdFxyXG4gIC8vICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gIC8vICAgLy9JbiB0aGUgaGVhZGVycyBvYmplY3QsIHRoZSBDb250ZW50LVR5cGUgc3BlY2lmaWVzIHRoYXQgdGhlIGJvZHkgcmVwcmVzZW50cyBKU09OLlxyXG4gIC8vICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG5cclxuICAvLyAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcclxuICAvLyAgICBCYWNrZW5kU2VydmljZS5hcGlVcmwsXHJcbiAgLy8gICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAvLyAgICAgICB1c2VybmFtZTogdXNlci51c2VybmFtZSwgXHJcbiAgLy8gICAgICAgcHdkOiB1c2VyLnBhc3N3b3JkXHJcbiAgLy8gICAgIH0pLFxyXG4gIC8vICAgICB7IGhlYWRlcnM6IGhlYWRlcnMgfVxyXG4gIC8vICAgKVxyXG4gIC8vICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgLy8gICAuZG8oZGF0YSA9PiB7XHJcbiAgLy8gICAgIEJhY2tlbmRTZXJ2aWNlLnRva2VuID0gZGF0YS5SZXN1bHQuYWNjZXNzX3Rva2VuO1xyXG4gIC8vICAgfSlcclxuICAvLyAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHJcbiAgLy8gfVxyXG4gIFxyXG4gIC8qKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5nZXRBc3NvY2lhdGVkUmVxdWVzdCgpe1xyXG5sZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAvL0luIHRoZSBoZWFkZXJzIG9iamVjdCwgdGhlIENvbnRlbnQtVHlwZSBzcGVjaWZpZXMgdGhhdCB0aGUgYm9keSByZXByZXNlbnRzIEpTT04uXHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXHJcbiAgICAgQmFja2VuZFNlcnZpY2UucmVxdWVzdFVybFxyXG4gIClcclxuICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4geyBcclxuICAgICAgICAgICAgICAgIC8vIGxvZ2luIHN1Y2Nlc3NmdWwgaWYgdGhlcmUncyBhIGp3dCB0b2tlbiBpbiB0aGUgcmVzcG9uc2VcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUkVTUE9OU0U6IFwiLHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIHZhciBib2R5ID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJKU09OIEJPRFk6IFwiLEpTT04uc3RyaW5naWZ5KGJvZHkpKTtcclxuICAgICAgICAgICAgICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkoYm9keSkpO31cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICB9XHJcblxyXG4gIGxvZ29mZigpIHtcclxuICAgIEJhY2tlbmRTZXJ2aWNlLnRva2VuID0gXCJcIjtcclxuICB9XHJcblxyXG4gIFxyXG5cclxuICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcclxuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICB9XHJcbn1cclxuIl19