import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Color } from "color";
import { confirm } from "ui/dialogs";
import { connectionType, getConnectionType } from "connectivity";
import { Animation } from "ui/animation";
import { View } from "ui/core/view";
import { prompt } from "ui/dialogs";
import { Page } from "ui/page";
import { TextField } from "ui/text-field";
import {RouterExtensions} from "nativescript-angular/router";
import { alert, LoginService, User } from "../shared";
import {registerElement} from "nativescript-angular/element-registry";

registerElement("Slide", () => require("nativescript-slides").Slide);
registerElement("SlideContainer", () => require("nativescript-slides").SlideContainer);

@Component({
  selector: "clientMaster",
  moduleId: module.id,
  templateUrl: './clientmaster.component.html',
  styleUrls: ["./clientmaster.component.css"],
  providers: [LoginService]
})
 export class ClientMasterComponent implements OnInit{

  isLoading = false;
 
   constructor(private router: Router,
   private LoginService: LoginService,
   private page: Page,
   private routerExtensions: RouterExtensions
   ) {}
   // @ViewChild("slides") slides: ElementRef;
   ngOnInit(){
     this.page.actionBarHidden = false;
      // let SlidesXml = this.slides.nativeElement;
      //  SlidesXml.constructView();
   }
    // ngAfterViewInit() {
    //     let SlidesXml = this.slides.nativeElement;
    //     SlidesXml.constructView();
    // }

   showActivityIndicator() {
    this.isLoading = true;
  }
  hideActivityIndicator() {
    this.isLoading = false;
  }

/**
 * gotoSRTPage
 */
public gotoSRTPage() {
  this.router.navigate(["srtDetails"])
}

public goBack() {
    this.routerExtensions.navigate([""], { clearHistory: true });
}
loadsrt(){
 // alert("OK");
    if (getConnectionType() === connectionType.none) {
      
        alert("Oops!! looks like your device is not connected to the internet ");
        return;
      }
      
        this.LoginService.getAssociatedRequest()
        .subscribe(
          (response) => { 
        console.log("Success Response" + response)
        
        },
          
        (error) => { console.log("Error happened", error.message)},
        () => { console.log("srt is completed")
       }
    );     
        
     
      
  }

    showMenu() {
    confirm({
      message: "Are you Sure You want to log off?",
      //actions: ["Share", "Log Off"],
      okButtonText: "YES",
      cancelButtonText: "CANCEL"
    }).then((result) => {
       if (result) {
        this.logoff();
      }
    });
  }

   logoff() {
    this.LoginService.logoff();
    this.router.navigate([""]);
  }
 }
