"use strict";
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.email = "nativescriptrocks@telerik.com";
        this.isLoggedIn = true;
    }
    AppComponent.prototype.submit = function () {
        alert("You're using: " + this.email);
    };
    AppComponent.prototype.toggleDisplay = function () {
        this.isLoggedIn = !this.isLoggedIn;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n    <StackLayout>\n      <Image src=\"res://logo_login\" stretch=\"none\" horizontalAlignment=\"center\"></Image>\n      <TextField hint=\"Email Address\" keyboardType=\"email\" [(ngModel)]=\"email\"\n        autocorrect=\"false\" autocapitalizationType=\"none\"></TextField>\n      <TextField hint=\"Password\" secure=\"true\"></TextField>\n\n      <Button [text]=\"isLoggedIn ? 'Sign in' : 'Sign up'\" class=\"submit-button\" (tap)=\"submit()\"></Button>\n      <Button [text]=\"isLoggedIn ? 'Sign up' : 'Back to login'\" (tap)=\"toggleDisplay()\"></Button>\n    </StackLayout>\n  ",
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEwQztBQWtCMUMsSUFBYSxZQUFZO0lBZnpCO1FBZ0JFLFVBQUssR0FBRywrQkFBK0IsQ0FBQztRQUN4QyxlQUFVLEdBQUcsSUFBSSxDQUFDO0lBU3BCLENBQUM7SUFQQyw2QkFBTSxHQUFOO1FBQ0UsS0FBSyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsb0NBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3JDLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFYRCxJQVdDO0FBWFksWUFBWTtJQWZ4QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLDJrQkFVVDtRQUNELFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFFLHVCQUF1QixDQUFDO0tBQ3JFLENBQUM7R0FDVyxZQUFZLENBV3hCO0FBWFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3NoYXJlZC91c2VyL3VzZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxTdGFja0xheW91dD5cbiAgICAgIDxJbWFnZSBzcmM9XCJyZXM6Ly9sb2dvX2xvZ2luXCIgc3RyZXRjaD1cIm5vbmVcIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCI+PC9JbWFnZT5cbiAgICAgIDxUZXh0RmllbGQgaGludD1cIkVtYWlsIEFkZHJlc3NcIiBrZXlib2FyZFR5cGU9XCJlbWFpbFwiIFsobmdNb2RlbCldPVwiZW1haWxcIlxuICAgICAgICBhdXRvY29ycmVjdD1cImZhbHNlXCIgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cIm5vbmVcIj48L1RleHRGaWVsZD5cbiAgICAgIDxUZXh0RmllbGQgaGludD1cIlBhc3N3b3JkXCIgc2VjdXJlPVwidHJ1ZVwiPjwvVGV4dEZpZWxkPlxuXG4gICAgICA8QnV0dG9uIFt0ZXh0XT1cImlzTG9nZ2VkSW4gPyAnU2lnbiBpbicgOiAnU2lnbiB1cCdcIiBjbGFzcz1cInN1Ym1pdC1idXR0b25cIiAodGFwKT1cInN1Ym1pdCgpXCI+PC9CdXR0b24+XG4gICAgICA8QnV0dG9uIFt0ZXh0XT1cImlzTG9nZ2VkSW4gPyAnU2lnbiB1cCcgOiAnQmFjayB0byBsb2dpbidcIiAodGFwKT1cInRvZ2dsZURpc3BsYXkoKVwiPjwvQnV0dG9uPlxuICAgIDwvU3RhY2tMYXlvdXQ+XG4gIGAsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbG9naW4vbG9naW4tY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xvZ2luL2xvZ2luLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICBlbWFpbCA9IFwibmF0aXZlc2NyaXB0cm9ja3NAdGVsZXJpay5jb21cIjtcbiAgaXNMb2dnZWRJbiA9IHRydWU7XG5cbiAgc3VibWl0KCkge1xuICAgIGFsZXJ0KFwiWW91J3JlIHVzaW5nOiBcIiArIHRoaXMuZW1haWwpO1xuICB9XG5cbiAgdG9nZ2xlRGlzcGxheSgpIHtcbiAgICB0aGlzLmlzTG9nZ2VkSW4gPSAhdGhpcy5pc0xvZ2dlZEluO1xuICB9XG59Il19