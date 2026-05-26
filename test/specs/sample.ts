import { TIMEOUT } from "dns";

describe("Sample group of tests ", () => {
  before(async () => {
    //this is before hooks in WDIO
    await $("~some locator").click();
    //some API to run..
  });

  beforeEach(async () => {
    //this piece of code will run before any 'it' block...
  });

  after("close the DB connection", async () => {
    //closing the DB connection..
    await driver.browserClose(30);
  });

  afterEach("quit browser", async () => {
    await driver.close();
  });

  it("sample test 1", async () => {
    await driver.pause(5000);
  });
});
