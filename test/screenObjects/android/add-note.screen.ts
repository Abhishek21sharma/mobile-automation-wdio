export class AddNoteScreen {
  //use getter functions and return the locator in them

  get skipBtn() {
    return $(
      'appium = new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip")',
    );
  }

  //to use the getter methods , we don't have to call them like a normal method call with paranthesis,
  //class itself
  //we call them using className.methodName --> look no () added in the end

  get addNoteText() {
    return $('//*[@text="Add note"]');
  }
}
