var validator = require("email-validator");

export class User {
  email: string;
  password: string;
  isValid() {
    return validator.validate(this.email);
  }
}