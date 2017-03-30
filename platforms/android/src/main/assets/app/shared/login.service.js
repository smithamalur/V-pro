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
    LoginService.prototype.getAnouncements = function () {
        var headers = new http_1.Headers();
        //In the headers object, the Content-Type specifies that the body represents JSON.
        return this.http.get(backend_service_1.BackendService.announcementUrl)
            .map(function (response) {
            // login successful if there's a jwt token in the response
            console.log("Announcement Response: ", response);
            var body = response.json();
            console.log("JSON BODY: ", JSON.stringify(body));
            alert(JSON.stringify(body));
        })
            .catch(this.handleErrors);
    };
    LoginService.prototype.getCalenderEvents = function () {
        var headers = new http_1.Headers();
        //In the headers object, the Content-Type specifies that the body represents JSON.
        return this.http.get(backend_service_1.BackendService.calenderUrl)
            .map(function (response) {
            // login successful if there's a jwt token in the response
            console.log("Calender Response: ", response);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyQztBQUMzQyxzQ0FBeUU7QUFDekUsOEJBQXFDO0FBRXJDLGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFDL0IscUNBQW1DO0FBQ25DLG1DQUFpQztBQUdqQyxxREFBbUQ7QUFHbkQsSUFBYSxZQUFZO0lBQ3ZCLHNCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFJLENBQUM7SUFDckMscUhBQXFIO0lBQ3JILFdBQVc7SUFDWCxnREFBZ0Q7SUFDaEQsd0RBQXdEO0lBQ3hELCtCQUErQjtJQUMvQixtQkFBbUI7SUFDbkIsbURBQW1EO0lBQ25ELGtFQUFrRTtJQUNsRSxTQUFTO0lBQ1Qsc0RBQXNEO0lBQ3RELGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsVUFBVTtJQUNWLG1FQUFtRTtJQUVuRSxJQUFJO0lBQ0osd0hBQXdIO0lBRXhILDRCQUFLLEdBQUwsVUFBTSxJQUFVO1FBQ1osSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixrRkFBa0Y7UUFDbEYsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNuRCxJQUFJLGVBQWUsR0FBRyxJQUFJLHNCQUFlLEVBQUUsQ0FBQztRQUM1QyxlQUFlLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEQsZUFBZSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdDLElBQUksSUFBSSxHQUFHLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBQyxJQUFJLENBQUMsQ0FBQztRQUV6QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ3BCLGdDQUFjLENBQUMsTUFBTSxFQUNyQixJQUFJLEVBQ0wsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDbkIsR0FBRyxDQUFDLFVBQUMsUUFBUTtZQUNGLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNoQiwwREFBMEQ7WUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlDLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFbEQsQ0FBQyxDQUNFO2FBR1osS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBR0gseUhBQXlIO0lBQ3ZILHNCQUFzQjtJQUN0QixvQ0FBb0M7SUFDcEMsaUNBQWlDO0lBQ2pDLHVGQUF1RjtJQUN2Rix3REFBd0Q7SUFFeEQsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1Qix1QkFBdUI7SUFDdkIsa0NBQWtDO0lBQ2xDLDJCQUEyQjtJQUMzQixVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLE1BQU07SUFDTixzQ0FBc0M7SUFDdEMsa0JBQWtCO0lBQ2xCLHVEQUF1RDtJQUN2RCxPQUFPO0lBQ1AsK0JBQStCO0lBQy9CLElBQUk7SUFFSix1SEFBdUg7SUFFekgsMkNBQW9CLEdBQXBCO1FBQ0EsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUN4QixrRkFBa0Y7UUFFbEYsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNuQixnQ0FBYyxDQUFDLFVBQVUsQ0FDM0I7YUFDRSxHQUFHLENBQUMsVUFBQyxRQUFrQjtZQUNaLDBEQUEwRDtZQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBQyxRQUFRLENBQUMsQ0FBQztZQUNuQyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2pELEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFBQSxDQUFDLENBQzNCO2FBRVosS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsc0NBQWUsR0FBZjtRQUNGLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDeEIsa0ZBQWtGO1FBRWxGLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDbkIsZ0NBQWMsQ0FBQyxlQUFlLENBQ2hDO2FBQ0UsR0FBRyxDQUFDLFVBQUMsUUFBa0I7WUFDWiwwREFBMEQ7WUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBQyxRQUFRLENBQUMsQ0FBQztZQUNoRCxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2pELEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFBQSxDQUFDLENBQzNCO2FBRVosS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBSUQsd0NBQWlCLEdBQWpCO1FBQ0YsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUN4QixrRkFBa0Y7UUFFbEYsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNuQixnQ0FBYyxDQUFDLFdBQVcsQ0FDNUI7YUFDRSxHQUFHLENBQUMsVUFBQyxRQUFrQjtZQUNaLDBEQUEwRDtZQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVDLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDakQsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUFBLENBQUMsQ0FDM0I7YUFFWixLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCw2QkFBTSxHQUFOO1FBQ0UsZ0NBQWMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFJRCxtQ0FBWSxHQUFaLFVBQWEsS0FBZTtRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBNUlELElBNElDO0FBNUlZLFlBQVk7SUFEeEIsaUJBQVUsRUFBRTtxQ0FFZSxXQUFJO0dBRG5CLFlBQVksQ0E0SXhCO0FBNUlZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlLCBVUkxTZWFyY2hQYXJhbXMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuXHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93XCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuL2JhY2tlbmQuc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG9naW5TZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxyXG4vKiogR0VUIEFQSSBNRVRIT0QgTE9HSU4gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLy8gbG9naW4oKXtcclxuLy8gICByZXR1cm4gdGhpcy5odHRwLmdldChCYWNrZW5kU2VydmljZS5hcGlVcmwpXHJcbi8vICAgIC8vIC5tYXAoKHJlczpSZXNwb25zZSkgPT4gSlNPTi5wYXJzZShyZXMuanNvbigpKSlcXFxyXG4vLyAgICAvLy5tYXAocmVzID0+IHJlcy50ZXh0KCkpXHJcbi8vICAgIC5tYXAocmVzID0+IHtcclxuLy8gICAgICBpZihyZXMuc3RhdHVzIDwgMjAwIHx8IHJlcy5zdGF0dXMgPj0gMzAwKSB7XHJcbi8vICAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyByZXF1ZXN0IGhhcyBmYWlsZWQgJyArIHJlcy5zdGF0dXMpO1xyXG4vLyAgICAgfSBcclxuLy8gICAgIC8vIElmIGV2ZXJ5dGhpbmcgd2VudCBmaW5lLCByZXR1cm4gdGhlIHJlc3BvbnNlXHJcbi8vICAgICBlbHNlIHtcclxuLy8gICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbi8vICAgICB9fSlcclxuLy8gICAgIC5kbyh2YWx1ZSA9PiBjb25zb2xlLmxvZyhcIlJFU1VMVDpcIiwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKSk7XHJcbiAgICAgICBcclxuLy8gfVxyXG4vKiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmxvZ2luKHVzZXI6IFVzZXIpIHtcclxuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIC8vSW4gdGhlIGhlYWRlcnMgb2JqZWN0LCB0aGUgQ29udGVudC1UeXBlIHNwZWNpZmllcyB0aGF0IHRoZSBib2R5IHJlcHJlc2VudHMgSlNPTi5cclxuICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgIGxldCB1cmxTZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcbiAgICB1cmxTZWFyY2hQYXJhbXMuYXBwZW5kKCd1c2VybmFtZScsIHVzZXIudXNlcm5hbWUpO1xyXG4gICAgdXJsU2VhcmNoUGFyYW1zLmFwcGVuZCgncHdkJywgdXNlci5wYXNzd29yZCk7XHJcbiAgICBsZXQgYm9keSA9IHVybFNlYXJjaFBhcmFtcy50b1N0cmluZygpO1xyXG4gICAgY29uc29sZS5sb2coXCJib2R5XCIrYm9keSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxyXG4gICAgIEJhY2tlbmRTZXJ2aWNlLmFwaVVybCxcclxuICAgICBib2R5LFxyXG4gICAge2hlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgIC5tYXAoKHJlc3BvbnNlICkgPT4geyBcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIC8vIGxvZ2luIHN1Y2Nlc3NmdWwgaWYgdGhlcmUncyBhIGp3dCB0b2tlbiBpbiB0aGUgcmVzcG9uc2VcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUkVTUE9OU0U6IFwiK3Jlc3BvbnNlLnVybCk7ICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZSBqc29uIFwiK3Jlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYm9keSA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSlNPTiBCT0RZOiBcIixKU09OLnN0cmluZ2lmeShib2R5KSk7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xyXG4gIH1cclxuICBcclxuICAgXHJcbi8qKiBIVFRQIFBPU1QgTE9HSU4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgKi9cclxuICAvLyBsb2dpbih1c2VyOiBVc2VyKSB7XHJcbiAgLy8gICAvL3NldCBoZWFkZXJzIGZvciBldmVyeSByZXF1ZXN0XHJcbiAgLy8gICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgLy8gICAvL0luIHRoZSBoZWFkZXJzIG9iamVjdCwgdGhlIENvbnRlbnQtVHlwZSBzcGVjaWZpZXMgdGhhdCB0aGUgYm9keSByZXByZXNlbnRzIEpTT04uXHJcbiAgLy8gICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcblxyXG4gIC8vICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxyXG4gIC8vICAgIEJhY2tlbmRTZXJ2aWNlLmFwaVVybCxcclxuICAvLyAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gIC8vICAgICAgIHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lLCBcclxuICAvLyAgICAgICBwd2Q6IHVzZXIucGFzc3dvcmRcclxuICAvLyAgICAgfSksXHJcbiAgLy8gICAgIHsgaGVhZGVyczogaGVhZGVycyB9XHJcbiAgLy8gICApXHJcbiAgLy8gICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAvLyAgIC5kbyhkYXRhID0+IHtcclxuICAvLyAgICAgQmFja2VuZFNlcnZpY2UudG9rZW4gPSBkYXRhLlJlc3VsdC5hY2Nlc3NfdG9rZW47XHJcbiAgLy8gICB9KVxyXG4gIC8vICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICAvLyB9XHJcbiAgXHJcbiAgLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmdldEFzc29jaWF0ZWRSZXF1ZXN0KCl7XHJcbmxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIC8vSW4gdGhlIGhlYWRlcnMgb2JqZWN0LCB0aGUgQ29udGVudC1UeXBlIHNwZWNpZmllcyB0aGF0IHRoZSBib2R5IHJlcHJlc2VudHMgSlNPTi5cclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChcclxuICAgICBCYWNrZW5kU2VydmljZS5yZXF1ZXN0VXJsXHJcbiAgKVxyXG4gICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7IFxyXG4gICAgICAgICAgICAgICAgLy8gbG9naW4gc3VjY2Vzc2Z1bCBpZiB0aGVyZSdzIGEgand0IHRva2VuIGluIHRoZSByZXNwb25zZVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSRVNQT05TRTogXCIscmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJvZHkgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkpTT04gQk9EWTogXCIsSlNPTi5zdHJpbmdpZnkoYm9keSkpO1xyXG4gICAgICAgICAgICAgICBhbGVydChKU09OLnN0cmluZ2lmeShib2R5KSk7fVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xyXG4gIH1cclxuICBcclxuICBnZXRBbm91bmNlbWVudHMoKXtcclxubGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgLy9JbiB0aGUgaGVhZGVycyBvYmplY3QsIHRoZSBDb250ZW50LVR5cGUgc3BlY2lmaWVzIHRoYXQgdGhlIGJvZHkgcmVwcmVzZW50cyBKU09OLlxyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFxyXG4gICAgIEJhY2tlbmRTZXJ2aWNlLmFubm91bmNlbWVudFVybFxyXG4gIClcclxuICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4geyBcclxuICAgICAgICAgICAgICAgIC8vIGxvZ2luIHN1Y2Nlc3NmdWwgaWYgdGhlcmUncyBhIGp3dCB0b2tlbiBpbiB0aGUgcmVzcG9uc2VcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQW5ub3VuY2VtZW50IFJlc3BvbnNlOiBcIixyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYm9keSA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSlNPTiBCT0RZOiBcIixKU09OLnN0cmluZ2lmeShib2R5KSk7XHJcbiAgICAgICAgICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KGJvZHkpKTt9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICBcclxuICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHJcbiAgfVxyXG5cclxuIFxyXG5cclxuICBnZXRDYWxlbmRlckV2ZW50cygpe1xyXG5sZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAvL0luIHRoZSBoZWFkZXJzIG9iamVjdCwgdGhlIENvbnRlbnQtVHlwZSBzcGVjaWZpZXMgdGhhdCB0aGUgYm9keSByZXByZXNlbnRzIEpTT04uXHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXHJcbiAgICAgQmFja2VuZFNlcnZpY2UuY2FsZW5kZXJVcmxcclxuICApXHJcbiAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHsgXHJcbiAgICAgICAgICAgICAgICAvLyBsb2dpbiBzdWNjZXNzZnVsIGlmIHRoZXJlJ3MgYSBqd3QgdG9rZW4gaW4gdGhlIHJlc3BvbnNlXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNhbGVuZGVyIFJlc3BvbnNlOiBcIixyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYm9keSA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSlNPTiBCT0RZOiBcIixKU09OLnN0cmluZ2lmeShib2R5KSk7XHJcbiAgICAgICAgICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KGJvZHkpKTt9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICBcclxuICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHJcbiAgfVxyXG5cclxuICBsb2dvZmYoKSB7XHJcbiAgICBCYWNrZW5kU2VydmljZS50b2tlbiA9IFwiXCI7XHJcbiAgfVxyXG5cclxuICBcclxuXHJcbiAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XHJcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcbiAgfVxyXG59XHJcbiJdfQ==