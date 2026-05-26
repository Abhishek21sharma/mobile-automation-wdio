import { ILoginScreen } from "../interfaces/login.interface.ts";

export class AndroidLoginScreen implements ILoginScreen {
  private get username() {
    return $("~android_user_field");
  }
  private get submitBtn() {
    return $("~android_submit");
  }

  async enterCredentials(user: string, pass: string) {
    await this.username.setValue(user);
  }
  async clickSubmit() {
    await this.submitBtn.click();
  }
}
