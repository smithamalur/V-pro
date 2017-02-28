import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Color } from "color";
import { connectionType, getConnectionType } from "connectivity";
import { Animation } from "ui/animation";
import { View } from "ui/core/view";
import { prompt } from "ui/dialogs";
import { Page } from "ui/page";
import { TextField } from "ui/text-field";
 import { LoginService } from "../shared/login.service";
 import { User } from "../shared/user.model";
 import * as connectivity from "connectivity";
 

@Component({
  selector: "vp-login",
  moduleId: module.id,
  providers: [LoginService],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css", "./login.css"],
})
export class LoginComponent implements OnInit {
  user: User;
  isLoggingIn = true;
  isAuthenticating = false;
  data : any ;

  constructor(private router: Router,
    private loginService : LoginService,
    private page: Page) {
    this.user = new User();
  }

   ngOnInit() {
    this.page.actionBarHidden = true;
  }

 
 submit(){
    this.isAuthenticating = true;
     if (this.isLoggingIn) {
       this.login();
     }
 }

  login() {
    
      if (getConnectionType() === connectionType.none) {
        alert("Vessel-Pro requires an internet connection to log in.");
        return;
         }
 
     try {
      this.loginService.login(this.user)
      .subscribe(
        //(data) => this.data = data, // Reach here if res.status >= 200 && <= 299   
      () => {
          //alert("OK");
           this.isAuthenticating = false;
           this.router.navigate(["/clientMaster"]);
         },
        (error) => {
          alert("Unfortunately we could not find your account.");
          console.log("ERR: ",error);
          this.isAuthenticating = false;
          
        }
    );
 
    } catch (error) {
      console.log(error.message);
    }
   }


  //   login() {
  //     //alert("submitted");
      
  //        if (getConnectionType() === connectionType.none) {
  //     alert("Vessel-Pro requires an internet connection to log in.");
  //       return;
  //        }
 
  //    try {
  //     this.loginService.login(this.user)
  //     .subscribe( 
  //       () => {
  //        this.isAuthenticating = false;
  //         this.router.navigate(["clientMaster"]);
  //       },
  //       (error) => {
  //         alert("Unfortunately we could not find your account.");
  //         this.isAuthenticating = false;
          
  //       }
  //     );
  //   } catch (error) {
  //     console.log(error.message);
  //   }

  //  }
 
}




