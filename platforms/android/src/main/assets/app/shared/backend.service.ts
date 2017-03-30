import { Injectable } from "@angular/core";
import { getString, setString } from "application-settings";

const tokenKey = "token";

export class BackendService {
  //static apiUrl = "https://api.everlive.com/v1/GWfRtXi1Lwt4jcqK/";
static apiUrl = "http://vpromobilesvc.wobstaging.com/service1.svc/AuthenticateUser";
static requestUrl = "http://vpromobilesvc.wobstaging.com/service1.svc/GetAssociatedRequest?userid=3507";
//static apiUrl = "http://vpromobilesvc.wobstaging.com/service1.svc/GetVesseloperator";
static announcementUrl ="http://vpromobilesvc.wobstaging.com/Service1.svc/GetAnnouncements"
static calenderUrl ="http://vpromobilesvc.wobstaging.com/Service1.svc/GetEvents?Userid=196"
  static isLoggedIn(): boolean {
    return !!getString("token");
  }

  static get token(): string {
    return getString("token");
  }

  static set token(theToken: string) {
    setString("token", theToken);
  }
}