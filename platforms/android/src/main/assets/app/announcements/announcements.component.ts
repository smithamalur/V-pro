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

var jsonfile = require("../announcement.json")

@Component({
	selector: 'announcements',
	moduleId: module.id,
	templateUrl: './announcements.component.html',
	styleUrls: ['./announcements.component.css'],
	providers: [LoginService]
})
export class AnnouncementsComponent implements OnInit {

	public source:Array<any>;

   constructor(private router: Router,
   private LoginService: LoginService,
   private page: Page,
   private routerExtensions: RouterExtensions) { }

	ngOnInit() {
		console.log("read json file");
        console.log(jsonfile);
        this.source=jsonfile;
	 }
	 public goBack() {
    this.routerExtensions.navigate(["/clientMaster"], { clearHistory: true });
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
	loadAnnouncements(){
    if (getConnectionType() === connectionType.none) {
        alert("Oops!! looks like your device is not connected to the internet ");
        return;
      }     
        this.LoginService.getAnouncements()
        .subscribe(
          (response) => { 
        console.log("Announcement Response" + response)        
        },          
        (error) => { console.log("Error happened", error.message)},
        () => { console.log("Announcement is completed")
       }
    );         
  }
}