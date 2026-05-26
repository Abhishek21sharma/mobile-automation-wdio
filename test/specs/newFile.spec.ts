import { LoginPage } from "../screenObjects/ios/newTest.screen.ts";
describe("sample test to show best practices to use class", async () => {
  //define the class object here so it can be used for all it() blocks..

  let loginPage: LoginPage;

  beforeEach(async () => {
    loginPage = new LoginPage();
  });

  it("test starts from here", async () => {
    //this is the test here..
    loginPage.fun_name();
  });
});
