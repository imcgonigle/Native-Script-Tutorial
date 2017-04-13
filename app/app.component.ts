import { Component } from "@angular/core";
import { User } from "./shared/user/user";

@Component({
  selector: "my-app",
  templateUrl: "pages/login/login.html",
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class AppComponent {
  user: User;
  isLoggedIn = true;

  constructor() {
    this.user = new User();
  }

  submit() {
    alert("You're using: " + this.user.email);
  }

  toggleDisplay() {
    this.isLoggedIn = !this.isLoggedIn;
  }
}