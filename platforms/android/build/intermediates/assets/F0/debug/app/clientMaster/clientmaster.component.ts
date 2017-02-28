import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Color } from "color";
import { connectionType, getConnectionType } from "connectivity";
import { Animation } from "ui/animation";
import { View } from "ui/core/view";
import { prompt } from "ui/dialogs";
import { Page } from "ui/page";
import { TextField } from "ui/text-field";

import { alert, LoginService, User } from "../shared";


@Component({
  selector: "clientMaster",
  moduleId: module.id,
  templateUrl: './clientmaster.component.html',
  styleUrls: ["./clientmaster.component.css"],
  //providers: [ClientMasterService]
})
 export class ClientMasterComponent implements OnInit{

  isLoading = false;

   constructor(private router: Router,
   private LoginService: LoginService,
   private page: Page) {}

   ngOnInit(){
     this.page.actionBarHidden = true;
   }

   showActivityIndicator() {
    this.isLoading = true;
  }
  hideActivityIndicator() {
    this.isLoading = false;
  }

loadsrt(){
  alert("OK");
//   if (getConnectionType() === connectionType.none) {
//       alert("Groceries requires an internet connection to log in.");
//       return;
//     }

//     this.LoginService.getAssociatedRequest()
//       .subscribe(
//         () => {
//           this.isAuthenticating = false;
//           this.router.navigate(["/"]);
//         },
//         (error) => {
//           alert("Unfortunately we could not find your account.");
//           this.isAuthenticating = false;
//         }
//       );
// }
 }
 }