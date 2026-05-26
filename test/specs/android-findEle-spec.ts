describe("Android findEles test", () => {
  it("Find ele by accessiblity", async () => {
    //find ele by accessblity ID
    //use ~ sign for accessblity

    //use locator chainging..
    const appOPtions = $("~App");

    //click on the element
    await appOPtions.click();

    //assertion
    //now check if action bar is visible ??
    const actionBar = $("~Action Bar");
    await expect(actionBar).toBeExisting();
  });

  it("Find element using class name or tag name", async () => {
    //note class name is not unique --> check the appium inspector
    //just type the tag itself
    const className = $("android.widget.TextView"); //$ returns the first element
    const text1 = await className.getText();
    console.log("text is: " + text1);
    await expect(className).toHaveText("API Demos");
  });

  it("By xpaths", async () => {
    //JUNIOR LEVEL APPROCH
    //INSTEAD USE: PLATFORM SPECIFIC NATIVE LOCATORS

    //different xpath strategy..
    //difficult to read , lon in nature and very fragile, super super slow
    //+ve's are: dynamic & flexible
    //finding alert dialog using xpath :
    //label we will use is : content-desc
    //tagname[@attribute=value] or we can use * also for searching thw whole tree
    const alertDialogue = $(
      "//android.widget.TextView[@content-desc='Alert Dialogs']",
    );
    await alertDialogue.click();

    //find by text..
    $('//android.widget.TextView[@text="Alert Dialogs"]');

    //partial text ?  contains text
    const element = await $('//*[contains(@text, "Submit")]');

    //instead of this use:
    // Partial text match using Android UIAutomator
    const element1 = await $('android=new UiSelector().textContains("Submit")');

    //For iOS (using Predicate Strings)
    //iOS provides a powerful, fast query language called Predicate Strings. It is much cleaner and more performant than XPath:

    // Partial text match using iOS Predicate
    const element2 = await $('ios=label CONTAINS "Submit"');
  });

  it("IMPORTANT - using platform native like UIAutomator selecotrs instead of xpaths..", async () => {
    //look at the example above..
    //see why we should never use xpath etc..
    //it provides advance search capablities.. check on the documentation
    //this is the bottom layer , it's very fast
    //we can chain multiple conditions together
    //eg: new UiSelector().text('Cancel').className('android.widgt.Button')
    //find an ele which text is cancel and class name is like above
  });

  it("working with multiple elements", async () => {
    //$$ returns the array of all the elements
    //$$ returns the first matching element

    //search by className and get all the elements
    const textList = $$("android.widget.TextView"); // returns the array..
    //using for-of loop
    for (const ele of textList) {
      console.log(await ele.getText());
    }

    //using advance for loop
    textList.forEach(async (e) => console.log(await e.getText()));
  });

  it("working with input fields", async () => {
    //select the element and call the method to send the data
    const inputField = $("~UserName");
    await inputField.addValue("firstName.lastName@gmail.com");
  });
});
