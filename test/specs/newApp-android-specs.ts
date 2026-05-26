import { AddNoteScreen } from "../screenObjects/android/add-note.screen.ts";

describe("color note - notepade tests ", async () => {
  it("app loading", async () => {
    driver.pause();
  });

  it("Skip tutorial if present", async () => {
    //click on SKIP button so that screen is enabled

    await new AddNoteScreen().skipBtn.click();
    const skip_button = $(
      'appium = new UiSelector().resourceId("com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip")',
    );
    if (await skip_button.waitForDisplayed({ timeout: 5000 })) {
      await skip_button.click();
    }

    //assert make sure -> Add Note screen is visible
    await expect($('//*[@text="Add note"]')).toBeDisabled();
  });
});
