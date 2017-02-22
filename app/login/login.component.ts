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
 

@Component({
  selector: "vp-login",
  moduleId: module.id,
  providers: [LoginService],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css", "./login.css"],
})
export class LoginComponent implements OnInit {
  user: User;


  constructor(private router: Router,
    private loginService : LoginService,
    private page: Page) {
    this.user = new User();
  }

   ngOnInit() {
    this.page.actionBarHidden = true;
  }

 

  login() {
    if (getConnectionType() === connectionType.none) {
      alert("Vessel-Pro requires an internet connection to log in.");
      return;
    }

    this.loginService.login(this.user)
      .subscribe( 
        () => {
         
          this.router.navigate(["/"]);
        },
        (error) => {
          alert("Unfortunately we could not find your account.");
          
        }
      );
  }
   
  }


