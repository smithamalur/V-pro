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
        return this.http.post(backend_service_1.BackendService.apiUrl, body, { headers: headers })
            .map(function (response) {
            // login successful if there's a jwt token in the response
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyQztBQUMzQyxzQ0FBeUU7QUFDekUsOEJBQXFDO0FBRXJDLGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFDL0IscUNBQW1DO0FBQ25DLG1DQUFpQztBQUdqQyxxREFBbUQ7QUFHbkQsSUFBYSxZQUFZO0lBQ3ZCLHNCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFJLENBQUM7SUFDckMscUhBQXFIO0lBQ3JILFdBQVc7SUFDWCxnREFBZ0Q7SUFDaEQsd0RBQXdEO0lBQ3hELCtCQUErQjtJQUMvQixtQkFBbUI7SUFDbkIsbURBQW1EO0lBQ25ELGtFQUFrRTtJQUNsRSxTQUFTO0lBQ1Qsc0RBQXNEO0lBQ3RELGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsVUFBVTtJQUNWLG1FQUFtRTtJQUVuRSxJQUFJO0lBQ0osd0hBQXdIO0lBRXhILDRCQUFLLEdBQUwsVUFBTSxJQUFVO1FBQ1osSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixrRkFBa0Y7UUFDbEYsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNuRCxJQUFJLGVBQWUsR0FBRyxJQUFJLHNCQUFlLEVBQUUsQ0FBQztRQUM1QyxlQUFlLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEQsZUFBZSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdDLElBQUksSUFBSSxHQUFHLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUV0QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ3BCLGdDQUFjLENBQUMsTUFBTSxFQUNyQixJQUFJLEVBQ0wsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDbkIsR0FBRyxDQUFDLFVBQUMsUUFBa0I7WUFDWiwwREFBMEQ7WUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUMsUUFBUSxDQUFDLENBQUM7WUFDbkMsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUFBLENBQUMsQ0FDaEQ7YUFFWixLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFSCx5SEFBeUg7SUFDdkgsc0JBQXNCO0lBQ3RCLG9DQUFvQztJQUNwQyxpQ0FBaUM7SUFDakMsdUZBQXVGO0lBQ3ZGLHdEQUF3RDtJQUV4RCwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsMkJBQTJCO0lBQzNCLFVBQVU7SUFDViwyQkFBMkI7SUFDM0IsTUFBTTtJQUNOLHNDQUFzQztJQUN0QyxrQkFBa0I7SUFDbEIsdURBQXVEO0lBQ3ZELE9BQU87SUFDUCwrQkFBK0I7SUFDL0IsSUFBSTtJQUVKLHVIQUF1SDtJQUV2SCw2QkFBTSxHQUFOO1FBQ0UsZ0NBQWMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFJRCxtQ0FBWSxHQUFaLFVBQWEsS0FBZTtRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBN0VELElBNkVDO0FBN0VZLFlBQVk7SUFEeEIsaUJBQVUsRUFBRTtxQ0FFZSxXQUFJO0dBRG5CLFlBQVksQ0E2RXhCO0FBN0VZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlLCBVUkxTZWFyY2hQYXJhbXMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuXHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93XCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuL2JhY2tlbmQuc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG9naW5TZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxyXG4vKiogR0VUIEFQSSBNRVRIT0QgTE9HSU4gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLy8gbG9naW4oKXtcclxuLy8gICByZXR1cm4gdGhpcy5odHRwLmdldChCYWNrZW5kU2VydmljZS5hcGlVcmwpXHJcbi8vICAgIC8vIC5tYXAoKHJlczpSZXNwb25zZSkgPT4gSlNPTi5wYXJzZShyZXMuanNvbigpKSlcXFxyXG4vLyAgICAvLy5tYXAocmVzID0+IHJlcy50ZXh0KCkpXHJcbi8vICAgIC5tYXAocmVzID0+IHtcclxuLy8gICAgICBpZihyZXMuc3RhdHVzIDwgMjAwIHx8IHJlcy5zdGF0dXMgPj0gMzAwKSB7XHJcbi8vICAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyByZXF1ZXN0IGhhcyBmYWlsZWQgJyArIHJlcy5zdGF0dXMpO1xyXG4vLyAgICAgfSBcclxuLy8gICAgIC8vIElmIGV2ZXJ5dGhpbmcgd2VudCBmaW5lLCByZXR1cm4gdGhlIHJlc3BvbnNlXHJcbi8vICAgICBlbHNlIHtcclxuLy8gICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbi8vICAgICB9fSlcclxuLy8gICAgIC5kbyh2YWx1ZSA9PiBjb25zb2xlLmxvZyhcIlJFU1VMVDpcIiwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKSk7XHJcbiAgICAgICBcclxuLy8gfVxyXG4vKiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmxvZ2luKHVzZXI6IFVzZXIpIHtcclxuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIC8vSW4gdGhlIGhlYWRlcnMgb2JqZWN0LCB0aGUgQ29udGVudC1UeXBlIHNwZWNpZmllcyB0aGF0IHRoZSBib2R5IHJlcHJlc2VudHMgSlNPTi5cclxuICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgIGxldCB1cmxTZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcbiAgICB1cmxTZWFyY2hQYXJhbXMuYXBwZW5kKCd1c2VybmFtZScsIHVzZXIudXNlcm5hbWUpO1xyXG4gICAgdXJsU2VhcmNoUGFyYW1zLmFwcGVuZCgncHdkJywgdXNlci5wYXNzd29yZCk7XHJcbiAgICBsZXQgYm9keSA9IHVybFNlYXJjaFBhcmFtcy50b1N0cmluZygpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcclxuICAgICBCYWNrZW5kU2VydmljZS5hcGlVcmwsXHJcbiAgICAgYm9keSxcclxuICAgIHtoZWFkZXJzOiBoZWFkZXJzIH0pXHJcbiAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHsgXHJcbiAgICAgICAgICAgICAgICAvLyBsb2dpbiBzdWNjZXNzZnVsIGlmIHRoZXJlJ3MgYSBqd3QgdG9rZW4gaW4gdGhlIHJlc3BvbnNlXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJFU1BPTlNFOiBcIixyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYm9keSA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSlNPTiBCT0RZOiBcIixKU09OLnN0cmluZ2lmeShib2R5KSk7fVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xyXG4gIH1cclxuICAgXHJcbi8qKiBIVFRQIFBPU1QgTE9HSU4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgKi9cclxuICAvLyBsb2dpbih1c2VyOiBVc2VyKSB7XHJcbiAgLy8gICAvL3NldCBoZWFkZXJzIGZvciBldmVyeSByZXF1ZXN0XHJcbiAgLy8gICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgLy8gICAvL0luIHRoZSBoZWFkZXJzIG9iamVjdCwgdGhlIENvbnRlbnQtVHlwZSBzcGVjaWZpZXMgdGhhdCB0aGUgYm9keSByZXByZXNlbnRzIEpTT04uXHJcbiAgLy8gICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcblxyXG4gIC8vICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxyXG4gIC8vICAgIEJhY2tlbmRTZXJ2aWNlLmFwaVVybCxcclxuICAvLyAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gIC8vICAgICAgIHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lLCBcclxuICAvLyAgICAgICBwd2Q6IHVzZXIucGFzc3dvcmRcclxuICAvLyAgICAgfSksXHJcbiAgLy8gICAgIHsgaGVhZGVyczogaGVhZGVycyB9XHJcbiAgLy8gICApXHJcbiAgLy8gICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAvLyAgIC5kbyhkYXRhID0+IHtcclxuICAvLyAgICAgQmFja2VuZFNlcnZpY2UudG9rZW4gPSBkYXRhLlJlc3VsdC5hY2Nlc3NfdG9rZW47XHJcbiAgLy8gICB9KVxyXG4gIC8vICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICAvLyB9XHJcbiAgXHJcbiAgLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbiAgbG9nb2ZmKCkge1xyXG4gICAgQmFja2VuZFNlcnZpY2UudG9rZW4gPSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgXHJcblxyXG4gIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xyXG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gIH1cclxufVxyXG4iXX0=