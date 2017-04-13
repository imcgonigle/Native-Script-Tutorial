import { Component } from "@angular/core";
import { User } from "./shared/user/user";

@Component({
  selector: "my-app",
  template: `
    <StackLayout>
      <Image src="res://logo_login" stretch="none" horizontalAlignment="center"></Image>
      <TextField hint="Email Address" keyboardType="email" [(ngModel)]="user.email"
        autocorrect="false" autocapitalizationType="none"></TextField>
      <TextField hint="Password" secure="true" [(ngModel)]="user.password"></TextField>

      <Button [text]="isLoggedIn ? 'Sign in' : 'Sign up'" class="submit-button" (tap)="submit()"></Button>
      <Button [text]="isLoggedIn ? 'Sign up' : 'Back to login'" (tap)="toggleDisplay()"></Button>
    </StackLayout>
  `,
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