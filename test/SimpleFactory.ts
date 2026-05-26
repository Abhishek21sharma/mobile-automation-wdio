import { AndroidLoginScreen } from "./screenObjects/android/android.screen.ts";
import { IosLoginScreen } from "./screenObjects/ios/ios.screen.ts";
import { ILoginScreen } from "./screenObjects/interfaces/login.interface.ts";

// The Factory Logic happens seamlessly here
const LoginScreen: ILoginScreen = driver.isAndroid
  ? new AndroidLoginScreen()
  : new IosLoginScreen();

export default LoginScreen;
