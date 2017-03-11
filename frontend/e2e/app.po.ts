import { browser, element, by } from 'protractor';

export class FrontendPage {
  navigateTo() {
    return browser.get('/');
  }

  getMenuHeaderText() {
    return element(by.css('#menu-header')).getText();
  }

  getLoginButton() {
    return element(by.css('#login'));
  }
  
  getLogoutButton() {
    return element(by.css('#logout'));
  }

  getUsername() {
    return element(by.css('#username')).getText();
  }

}
