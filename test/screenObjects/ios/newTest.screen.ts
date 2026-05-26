export class LoginPage {
  /**
   * Get the PIN input field by Flutter Key
   * @returns WebdriverIO element
   */
  private get pinInputField() {
    return $(
      `//XCUIElementTypeTextField[@name='${Constants.PIN_INPUT_FIELD_KEY}']`,
    );
  }

  private get loginButton() {
    return $(`//XCUIElementTypeButton[@name='${Constants.LOGIN_BUTTON_KEY}']`);
  }

  /**
   * Get error message text on login screen
   * @returns WebdriverIO element
   */
  private get errorMessage() {
    return $('//XCUIElementTypeStaticText[contains(@value, "Invalid PIN")]');
  }

  async fun_name() {
    this.loginButton.click();
    //check error

    const error_msg = this.errorMessage.getText();
  }
}
