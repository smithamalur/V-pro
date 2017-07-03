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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyQztBQUMzQyxzQ0FBeUU7QUFDekUsOEJBQXFDO0FBRXJDLGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFDL0IscUNBQW1DO0FBQ25DLG1DQUFpQztBQUdqQyxxREFBbUQ7QUFHbkQsSUFBYSxZQUFZO0lBQ3ZCLHNCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFJLENBQUM7SUFDckMscUhBQXFIO0lBQ3JILFdBQVc7SUFDWCxnREFBZ0Q7SUFDaEQsd0RBQXdEO0lBQ3hELCtCQUErQjtJQUMvQixtQkFBbUI7SUFDbkIsbURBQW1EO0lBQ25ELGtFQUFrRTtJQUNsRSxTQUFTO0lBQ1Qsc0RBQXNEO0lBQ3RELGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsVUFBVTtJQUNWLG1FQUFtRTtJQUVuRSxJQUFJO0lBQ0osd0hBQXdIO0lBRXhILDRCQUFLLEdBQUwsVUFBTSxJQUFVO1FBQ1osSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixrRkFBa0Y7UUFDbEYsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNuRCxJQUFJLGVBQWUsR0FBRyxJQUFJLHNCQUFlLEVBQUUsQ0FBQztRQUM1QyxlQUFlLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEQsZUFBZSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdDLElBQUksSUFBSSxHQUFHLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUV0QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ3BCLGdDQUFjLENBQUMsTUFBTSxFQUNyQixJQUFJLEVBQ0wsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDbkIsR0FBRyxDQUFDLFVBQUMsUUFBa0I7WUFDWiwwREFBMEQ7WUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUMsUUFBUSxDQUFDLENBQUM7WUFFbkMsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUVsRCxDQUFDLENBQ0U7YUFFWixLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFSCx5SEFBeUg7SUFDdkgsc0JBQXNCO0lBQ3RCLG9DQUFvQztJQUNwQyxpQ0FBaUM7SUFDakMsdUZBQXVGO0lBQ3ZGLHdEQUF3RDtJQUV4RCwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsMkJBQTJCO0lBQzNCLFVBQVU7SUFDViwyQkFBMkI7SUFDM0IsTUFBTTtJQUNOLHNDQUFzQztJQUN0QyxrQkFBa0I7SUFDbEIsdURBQXVEO0lBQ3ZELE9BQU87SUFDUCwrQkFBK0I7SUFDL0IsSUFBSTtJQUVKLHVIQUF1SDtJQUV6SCwyQ0FBb0IsR0FBcEI7UUFDQSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQ3hCLGtGQUFrRjtRQUVsRixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ25CLGdDQUFjLENBQUMsVUFBVSxDQUMzQjthQUNFLEdBQUcsQ0FBQyxVQUFDLFFBQWtCO1lBQ1osMERBQTBEO1lBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25DLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDakQsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUFBLENBQUMsQ0FDM0I7YUFFWixLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCw2QkFBTSxHQUFOO1FBQ0UsZ0NBQWMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFJRCxtQ0FBWSxHQUFaLFVBQWEsS0FBZTtRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBbEdELElBa0dDO0FBbEdZLFlBQVk7SUFEeEIsaUJBQVUsRUFBRTtxQ0FFZSxXQUFJO0dBRG5CLFlBQVksQ0FrR3hCO0FBbEdZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlLCBVUkxTZWFyY2hQYXJhbXMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuXHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93XCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuL2JhY2tlbmQuc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG9naW5TZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxyXG4vKiogR0VUIEFQSSBNRVRIT0QgTE9HSU4gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLy8gbG9naW4oKXtcclxuLy8gICByZXR1cm4gdGhpcy5odHRwLmdldChCYWNrZW5kU2VydmljZS5hcGlVcmwpXHJcbi8vICAgIC8vIC5tYXAoKHJlczpSZXNwb25zZSkgPT4gSlNPTi5wYXJzZShyZXMuanNvbigpKSlcXFxyXG4vLyAgICAvLy5tYXAocmVzID0+IHJlcy50ZXh0KCkpXHJcbi8vICAgIC5tYXAocmVzID0+IHtcclxuLy8gICAgICBpZihyZXMuc3RhdHVzIDwgMjAwIHx8IHJlcy5zdGF0dXMgPj0gMzAwKSB7XHJcbi8vICAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyByZXF1ZXN0IGhhcyBmYWlsZWQgJyArIHJlcy5zdGF0dXMpO1xyXG4vLyAgICAgfSBcclxuLy8gICAgIC8vIElmIGV2ZXJ5dGhpbmcgd2VudCBmaW5lLCByZXR1cm4gdGhlIHJlc3BvbnNlXHJcbi8vICAgICBlbHNlIHtcclxuLy8gICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbi8vICAgICB9fSlcclxuLy8gICAgIC5kbyh2YWx1ZSA9PiBjb25zb2xlLmxvZyhcIlJFU1VMVDpcIiwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKSk7XHJcbiAgICAgICBcclxuLy8gfVxyXG4vKiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmxvZ2luKHVzZXI6IFVzZXIpIHtcclxuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIC8vSW4gdGhlIGhlYWRlcnMgb2JqZWN0LCB0aGUgQ29udGVudC1UeXBlIHNwZWNpZmllcyB0aGF0IHRoZSBib2R5IHJlcHJlc2VudHMgSlNPTi5cclxuICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgIGxldCB1cmxTZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcbiAgICB1cmxTZWFyY2hQYXJhbXMuYXBwZW5kKCd1c2VybmFtZScsIHVzZXIudXNlcm5hbWUpO1xyXG4gICAgdXJsU2VhcmNoUGFyYW1zLmFwcGVuZCgncHdkJywgdXNlci5wYXNzd29yZCk7XHJcbiAgICBsZXQgYm9keSA9IHVybFNlYXJjaFBhcmFtcy50b1N0cmluZygpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcclxuICAgICBCYWNrZW5kU2VydmljZS5hcGlVcmwsXHJcbiAgICAgYm9keSxcclxuICAgIHtoZWFkZXJzOiBoZWFkZXJzIH0pXHJcbiAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHsgXHJcbiAgICAgICAgICAgICAgICAvLyBsb2dpbiBzdWNjZXNzZnVsIGlmIHRoZXJlJ3MgYSBqd3QgdG9rZW4gaW4gdGhlIHJlc3BvbnNlXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJFU1BPTlNFOiBcIixyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdmFyIGJvZHkgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkpTT04gQk9EWTogXCIsSlNPTi5zdHJpbmdpZnkoYm9keSkpO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICBcclxuICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHJcbiAgfVxyXG4gICBcclxuLyoqIEhUVFAgUE9TVCBMT0dJTi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAqL1xyXG4gIC8vIGxvZ2luKHVzZXI6IFVzZXIpIHtcclxuICAvLyAgIC8vc2V0IGhlYWRlcnMgZm9yIGV2ZXJ5IHJlcXVlc3RcclxuICAvLyAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAvLyAgIC8vSW4gdGhlIGhlYWRlcnMgb2JqZWN0LCB0aGUgQ29udGVudC1UeXBlIHNwZWNpZmllcyB0aGF0IHRoZSBib2R5IHJlcHJlc2VudHMgSlNPTi5cclxuICAvLyAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuXHJcbiAgLy8gICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXHJcbiAgLy8gICAgQmFja2VuZFNlcnZpY2UuYXBpVXJsLFxyXG4gIC8vICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgLy8gICAgICAgdXNlcm5hbWU6IHVzZXIudXNlcm5hbWUsIFxyXG4gIC8vICAgICAgIHB3ZDogdXNlci5wYXNzd29yZFxyXG4gIC8vICAgICB9KSxcclxuICAvLyAgICAgeyBoZWFkZXJzOiBoZWFkZXJzIH1cclxuICAvLyAgIClcclxuICAvLyAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gIC8vICAgLmRvKGRhdGEgPT4ge1xyXG4gIC8vICAgICBCYWNrZW5kU2VydmljZS50b2tlbiA9IGRhdGEuUmVzdWx0LmFjY2Vzc190b2tlbjtcclxuICAvLyAgIH0pXHJcbiAgLy8gICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xyXG4gIC8vIH1cclxuICBcclxuICAvKiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuZ2V0QXNzb2NpYXRlZFJlcXVlc3QoKXtcclxubGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgLy9JbiB0aGUgaGVhZGVycyBvYmplY3QsIHRoZSBDb250ZW50LVR5cGUgc3BlY2lmaWVzIHRoYXQgdGhlIGJvZHkgcmVwcmVzZW50cyBKU09OLlxyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFxyXG4gICAgIEJhY2tlbmRTZXJ2aWNlLnJlcXVlc3RVcmxcclxuICApXHJcbiAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHsgXHJcbiAgICAgICAgICAgICAgICAvLyBsb2dpbiBzdWNjZXNzZnVsIGlmIHRoZXJlJ3MgYSBqd3QgdG9rZW4gaW4gdGhlIHJlc3BvbnNlXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJFU1BPTlNFOiBcIixyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYm9keSA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSlNPTiBCT0RZOiBcIixKU09OLnN0cmluZ2lmeShib2R5KSk7XHJcbiAgICAgICAgICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KGJvZHkpKTt9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICBcclxuICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHJcbiAgfVxyXG5cclxuICBsb2dvZmYoKSB7XHJcbiAgICBCYWNrZW5kU2VydmljZS50b2tlbiA9IFwiXCI7XHJcbiAgfVxyXG5cclxuICBcclxuXHJcbiAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XHJcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcbiAgfVxyXG59XHJcbiJdfQ==