import { browser, element, by } from 'protractor';

export class FrontendPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getLoginButton() {
    return element(by.css('#login'));
  }
  
  getLogoutButton() {
    return element(by.css('#logout'));
  }

  authGetLoginDialogHeader() {
    return element(by.css('.auth0-lock-header-welcome .auth0-lock-name')).getText();
  }
  
  authEnterLoginEmail(email) {
    var ele = element(by.css('input[type=email]'));
    ele.sendKeys(email);
  }
  authEnterLoginPassword(password) {
    var ele = element(by.css('input[type=password]'));
    ele.sendKeys(password);
  }
  authGetLoginButton() {
    return element(by.css('.auth0-lock-submit'));
  }
}
