import { Constants } from "../../config/constant.ts";

//we follow DRY principle here...
//this is best for clean code prespective.

//TypeScript Elegance: Unlike Java, where you might need complex dependency injection,
//abstract classes, or PageFactory annotations to handle varying platform elements,
//TypeScript's native get syntax combined with WDIO’s lazy $() evaluation
//makes this incredibly lightweight.

//The Flutter Advantage:
//Since the target application is built in Flutter,
//95% of your locators will actually be identical across both platforms
//(using byValueKey or bySemanticsLabel). If you split the folders,
// you would literally be copy-pasting identical Flutter locators into two different files.

export class BaseLoginPage {
  private get pinInputField() {
    //#################################################
    //MOST IMPORTANT USE CASE OF CONDITIONAL STATEMENT......
    return $(driver.isAndroid ? "~submitBtnAndroid" : "~submitBtnIos");
  }

  private get loginButton() {
    return $(
      driver.isAndroid
        ? "~loginBtn"
        : `//XCUIElementTypeButton[@name='${Constants.LOGIN_BUTTON_KEY}']`,
    );
  }

  async fun_name() {
    this.loginButton.click();
    //check error
  }
}
