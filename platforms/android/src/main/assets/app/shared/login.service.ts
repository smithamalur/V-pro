import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
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


  login(user: User) {
    //set headers for every request
    let headers = new Headers();
    //In the headers object, the Content-Type specifies that the body represents JSON.
    headers.append("Content-Type", "application/json");

    return this.http.post(
     BackendService.apiUrl,
      JSON.stringify({
        username: user.username, 
        password: user.password
      }),
      { headers: headers }
    )
    .map(response => response.json())
    .do(data => {
      BackendService.token = data.Result.access_token;
    })
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
