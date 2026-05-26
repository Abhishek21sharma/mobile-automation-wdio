export interface ILoginScreen {
  enterCredentials(user: string, pass: string): Promise<void>;
  clickSubmit(): Promise<void>;
}
