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
   private userService: LoginService){}
  ngOnInit(){

console.log("read json file");
        console.log(jsonfile);
        this.source=jsonfile;
  }

}