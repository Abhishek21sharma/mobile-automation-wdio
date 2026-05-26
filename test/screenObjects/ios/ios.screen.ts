import { ILoginScreen } from "../interfaces/login.interface.ts";

export class IosLoginScreen implements ILoginScreen {
  private get username() {
    return $("~ios_user_field");
  }
  private get submitBtn() {
    return $("~ios_submit");
  }

  async enterCredentials(user: string, pass: string) {
    await this.username.setValue(user);
  }
  async clickSubmit() {
    await this.submitBtn.click();
  }
}
