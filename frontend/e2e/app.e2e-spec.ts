import { FrontendPage } from './app.po';
import { browser } from 'protractor';

describe('frontend App', function() {
  let page: FrontendPage;

  beforeEach(() => {
    page = new FrontendPage();
  });

  it('should display message saying Topic', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Topic');
  });

  it('should display login button', () => {
    page.navigateTo();
    let loginButton = page.getLoginButton();
    expect(loginButton != null).toBe(true);
    expect(loginButton.getText()).toEqual('Login');
  });

  it('should login', () => {
    page.navigateTo();
    let loginButton = page.getLoginButton();
    loginButton.click();
    browser.ignoreSynchronization = true;
    browser.driver.sleep(1000);
    expect(page.authGetLoginDialogHeader()).toEqual('Auth0');
    page.authEnterLoginEmail('demo@eplan.de');
    page.authEnterLoginPassword('Hallo123');
    let authButton = page.authGetLoginButton();
    expect(authButton.getText()).toEqual('LOG IN');
    page.authGetLoginButton().click();
    browser.driver.sleep(1000);
    browser.ignoreSynchronization = false;
  });

  it ('should be loggged in', function() {
    let logoutButton = page.getLogoutButton();
    expect(logoutButton != null).toBe(true);
    expect(logoutButton.getText()).toEqual('Logout');    
  })


});
