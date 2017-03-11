import { browser, element, by } from 'protractor';

export class Auth0 {
	login(email, password) {
		expect(this.authGetLoginDialogHeader()).toEqual('Auth0');
		this.authEnterLoginEmail('demo@eplan.de');
		this.authEnterLoginPassword('Hallo123');
		let authButton = this.authGetLoginButton();
		expect(authButton.getText()).toEqual('LOG IN');
		this.authGetLoginButton().click();
	}

	private authGetLoginDialogHeader() {
		return element(by.css('.auth0-lock-header-welcome .auth0-lock-name')).getText();
	}

	private authEnterLoginEmail(email) {
		var ele = element(by.css('input[type=email]'));
		ele.sendKeys(email);
	}
	private authEnterLoginPassword(password) {
		var ele = element(by.css('input[type=password]'));
		ele.sendKeys(password);
	}
	private authGetLoginButton() {
		return element(by.css('.auth0-lock-submit'));
	}

}