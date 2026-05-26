import { config as sharedConfig } from "../wdio.conf";

sharedConfig.port = 4723;

sharedConfig.specs = ["./test/specs/android-findEle.spec.ts"];

// sharedConfig.capabilities = [
//     "appium:automationName": "",
//     "appium:platformVersion" : "",
//     "appium:app":""
// ]

export { sharedConfig };
