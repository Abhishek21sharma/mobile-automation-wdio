//import the factory class here

import LoginScreen from "../SimpleFactory.ts";

describe("Login flow", async () => {
  it("to run the login test", async () => {
    await LoginScreen.enterCredentials("", "");
    await LoginScreen.clickSubmit();
  });
});
