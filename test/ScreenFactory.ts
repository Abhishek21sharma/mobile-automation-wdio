//Factory handles the platform version and returns the underlying screen objects..
type Platform = "Android" | "iOS";

export class ScreenFactory {
  public static getplatform(): Platform {
    const platform = driver.capabilities.platformName?.toLowerCase();
    return platform?.includes("android") ? "Android" : "iOS";
  }

  static getaddnotescreen() {}
}
