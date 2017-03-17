import { FrontendPage } from './app.po';
import { Auth0 } from './auth0-login.po';
import { browser } from 'protractor';

describe('frontend App', function() {
  let page: FrontendPage;

  beforeEach(() => {
    page = new FrontendPage();
  });

  it('should display message saying Cloud Solutions', () => {
    page.navigateTo();
    expect(page.getMenuHeaderText()).toEqual('Cloud Solutions - delivery');
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

    let auth0Login = new Auth0();
    auth0Login.login('demo@eplan.de', 'Hallo123');

    browser.driver.sleep(1000);
    browser.ignoreSynchronization = false;
  });

  it ('should be loggged in', function() {
    let logoutButton = page.getLogoutButton();
    expect(logoutButton != null).toBe(true);
    expect(logoutButton.getText()).toEqual('Logout');
    expect(page.getUsername()).toEqual('demo');
  })

  

});
