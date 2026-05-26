describe("Android native feature test", () => {
  it("starting app with app activity", async () => {
    //it will directly load the 3rd screen , instead of first screen
    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.app.AlertDialogSamples",
    );

    await driver.pause(3000);
  });

  it.only("Handling dialog boxes - alerts", async () => {
    //to accept alert
    await driver.acceptAlert(); //any 1 alert is open at a time in the app
    //expect alert titile is no longer visible

    await expect($("~Id")).not.toExist();

    //similarly.. we can
    await driver.dismissAlert();

    //send data to alert
    await driver.getAlertText();

    await driver.sendAlertText("some text");
  });

  it("vertical scrolling into view", async () => {
    //1st check - if the screen is scrollable

    //scroll until the end of the screen

    //scroll text into the view

    await $("~App").click();
    await $("~Activity").click();

    //need to scroll here: using UiAutomator()
    //it will check if it's scrollable
    //how many times we want to scroll -> 1
    //speed of swipe -> 5
    await $(
      "android = new UiScrollable(new UiSelector().scrollable(true).scrollToEnd(1,5))",
    );

    //scroll into view:
    //this is more generic, flexible..
    //it will scroll up and down multiple times : until it finds the element
    //we can also set a limit or run it a loop too..
    await $(
      'android = new UiScrollable(new UiSelector().scrollable(true).scrollTextIntoView("Secure Surfaces")',
    );

    await $("~Secure Surfaces").click();
  });

  it("horizontal scrolling,", async () => {
    //only thing going to change is: we need to tell explicitly that it's a horizontal scroll
  });
});
