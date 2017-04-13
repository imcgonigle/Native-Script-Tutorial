"use strict";
var core_1 = require("@angular/core");
var user_1 = require("./shared/user/user");
var user_service_1 = require("./shared/user/user.service");
var AppComponent = (function () {
    function AppComponent(userService) {
        this.userService = userService;
        this.isLoggingIn = true;
        this.user = new user_1.User();
    }
    AppComponent.prototype.submit = function () {
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    AppComponent.prototype.login = function () {
        // TODO: Define
    };
    AppComponent.prototype.signUp = function () {
        var _this = this;
        this.userService.register(this.user)
            .subscribe(function () {
            alert("Your account was successfully created.");
            _this.toggleDisplay();
        }, function () { return alert("Unfortunately we were unable to create your account."); });
    };
    AppComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [user_service_1.UserService],
        templateUrl: "pages/login/login.html",
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEwQztBQUUxQywyQ0FBMEM7QUFDMUMsMkRBQXlEO0FBUXpELElBQWEsWUFBWTtJQUl2QixzQkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFGNUMsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFHakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCw2QkFBTSxHQUFOO1FBQ0UsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUM7SUFDSCxDQUFDO0lBRUQsNEJBQUssR0FBTDtRQUNFLGVBQWU7SUFDakIsQ0FBQztJQUVELDZCQUFNLEdBQU47UUFBQSxpQkFTRDtRQVJDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDakMsU0FBUyxDQUNSO1lBQ0UsS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7WUFDaEQsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFDRCxjQUFNLE9BQUEsS0FBSyxDQUFDLHNEQUFzRCxDQUFDLEVBQTdELENBQTZELENBQ3BFLENBQUM7SUFDTixDQUFDO0lBRUMsb0NBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3ZDLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFsQ0QsSUFrQ0M7QUFsQ1ksWUFBWTtJQU54QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztRQUN4QixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFFLHVCQUF1QixDQUFDO0tBQ3JFLENBQUM7cUNBS2lDLDBCQUFXO0dBSmpDLFlBQVksQ0FrQ3hCO0FBbENZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3NoYXJlZC91c2VyL3VzZXJcIjtcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9sb2dpbi9sb2dpbi5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbG9naW4vbG9naW4tY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xvZ2luL2xvZ2luLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICB1c2VyOiBVc2VyO1xuICBpc0xvZ2dpbmdJbiA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHtcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICB9XG5cbiAgc3VibWl0KCkge1xuICAgIGlmKHRoaXMuaXNMb2dnaW5nSW4pIHtcbiAgICAgIHRoaXMubG9naW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaWduVXAoKTtcbiAgICB9XG4gIH1cblxuICBsb2dpbigpIHtcbiAgICAvLyBUT0RPOiBEZWZpbmVcbiAgfVxuXG4gIHNpZ25VcCgpIHtcbiAgdGhpcy51c2VyU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpXG4gICAgLnN1YnNjcmliZShcbiAgICAgICgpID0+IHtcbiAgICAgICAgYWxlcnQoXCJZb3VyIGFjY291bnQgd2FzIHN1Y2Nlc3NmdWxseSBjcmVhdGVkLlwiKTtcbiAgICAgICAgdGhpcy50b2dnbGVEaXNwbGF5KCk7XG4gICAgICB9LFxuICAgICAgKCkgPT4gYWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIHdlcmUgdW5hYmxlIHRvIGNyZWF0ZSB5b3VyIGFjY291bnQuXCIpXG4gICAgKTtcbn1cbiAgXG4gIHRvZ2dsZURpc3BsYXkoKSB7XG4gICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xuICB9XG59Il19