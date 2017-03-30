import { NativeScriptModule } from "nativescript-angular/nativescript.module";

// --- The built-in 'nativescript-telerik-ui-pro' modules
// import { NativeScriptUISideDrawerModule } from "nativescript-telerik-ui/sidedrawer/angular";
// import { NativeScriptUIListViewModule } from "nativescript-telerik-ui/listview/angular";
import listViewModule = require("nativescript-telerik-ui/listview");
import drawerModule = require("nativescript-telerik-ui/sidedrawer");

import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Color } from "color";
import { connectionType, getConnectionType } from "connectivity";
import { Animation } from "ui/animation";
import { confirm } from "ui/dialogs";
import { View } from "ui/core/view";
import { prompt } from "ui/dialogs";
import { Page } from "ui/page";
import { TextField } from "ui/text-field";
import {RouterExtensions} from "nativescript-angular/router";

import { alert, LoginService, User } from "../shared";

var jsonfile = require("../test.json")


@Component({
  selector: "vp-srt-list",
  moduleId: module.id,
  templateUrl: './srtdetails.component.html',
  styleUrls: ["./srtdetails.component.css"],
  providers: [LoginService]
})

export class SrtListComponent implements OnInit{

public source:Array<any>;

constructor( private router: Router,
   private LoginService: LoginService,
   private routerExtensions: RouterExtensions){}
  ngOnInit(){

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

}