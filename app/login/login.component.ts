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
 import * as utils from "../shared";
 

@Component({
  selector: "vp-login",
  moduleId: module.id,
  providers: [LoginService],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css", "./login.css"],
})



export class LoginComponent implements OnInit {
  user: User;
  //isLoggingIn = true;
  isAuthenticating = false;
  data : any ;

  @ViewChild("password") password: ElementRef;
  @ViewChild("mainContainer") mainContainer: ElementRef;
    @ViewChild("formControls") formControls: ElementRef;
    

  constructor(private router: Router,
    private loginService : LoginService,
    private page: Page) {
    this.user = new User();
  }

   ngOnInit() {
    this.page.actionBarHidden = true;
  }

   focusPassword() {
    this.password.nativeElement.focus();
  }

 
 submit(){
    //this.isAuthenticating = true;
    // if(!this.user.username && !this.user.password){
    //   alert("Username or Password cannot be empty");
    // }
    if(this.user.username && this.user.password)
    {
       this.isAuthenticating = true;
       this.login();
       
     }
     else alert("Username and Pasword required");
 }

  login() {
    
      if (getConnectionType() === connectionType.none) {
        alert("Vessel-Pro requires an internet connection to log in.");
        this.isAuthenticating = false;
        return;
         }
 
     try {
      this.loginService.login(this.user)
      .subscribe(
        // (response) =>{
        //     console.log("RESPONSE: "+response.url);    
        //     console.log("response json "+response.status);
        //    var body = response.json();
        //    console.log("JSON BODY: ",JSON.stringify(body));
        // }, 
        () => {
          //alert("OK");
           this.isAuthenticating = false;
           this.router.navigate(["/clientMaster"]);
         },
        (error) => {
          alert("Unfortunately we could not find your account.");
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
  //   startBackgroundAnimation(background) {
    
  // }

  onContentloaded(background) {
    
    background.animate({
      scale: { x: 1.0, y: 1.0 },
      duration: 10000
    }); 

    let mainContainer = <View>this.mainContainer.nativeElement;
    let formControls = <View>this.formControls.nativeElement;
    let animations = [];

    // Fade out the initial content over one half second
    mainContainer.animate({
      opacity: 0,
      duration: 500
    }).then(function() {
      // After the animation completes, hide the initial container and
      // show the main container and logo. The main container and logo will
      // not immediately appear because their opacity is set to 0 in CSS.
      
      mainContainer.style.visibility = "visible";
      

      // Fade in the main container and logo over one half second.
      animations.push({ target: mainContainer, opacity: 1, duration: 500 });
      

      // Slide up the form controls and sign up container.
      
      animations.push({ target: formControls, translate: { x: 0, y: 0 }, opacity: 1, delay: 650, duration: 150 });

      // Kick off the animation queue
      new Animation(animations, false).play();
    });
  }
 
}




