import { Injectable } from "@angular/core";
import { Http, Headers, Response, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs/Rx";

import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";

import { User } from "./user.model";
import { BackendService } from "./backend.service";

@Injectable()
export class LoginService {
  constructor(private http: Http) { }
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

login(user: User) {
    let headers = new Headers();
    //In the headers object, the Content-Type specifies that the body represents JSON.
    headers.append("Content-Type", "application/json");
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('username', user.username);
    urlSearchParams.append('pwd', user.password);
    let body = urlSearchParams.toString();

    return this.http.post(
     BackendService.apiUrl,
     body,
    {headers: headers })
    .map((response: Response) => { 
                // login successful if there's a jwt token in the response
                console.log("RESPONSE: ",response);
                var body = response.json();
                console.log("JSON BODY: ",JSON.stringify(body));}
                )
                
    .catch(this.handleErrors);
  }
   
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

getAssociatedRequest(){
let headers = new Headers();
    //In the headers object, the Content-Type specifies that the body represents JSON.

    return this.http.get(
     BackendService.requestUrl
  )
    .map((response: Response) => { 
                // login successful if there's a jwt token in the response
                console.log("RESPONSE: ",response);
                var body = response.json();
                console.log("JSON BODY: ",JSON.stringify(body));}
                )
                
    .catch(this.handleErrors);
  }

  logoff() {
    BackendService.token = "";
  }

  

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}
