import { browser, by, element } from 'protractor';

export class LoginPage {
  selectors = {
    'form' : 'form',
    'email' : 'input[name="email"]',
    'password' : 'input[name="password"]',
    'selectGroup' : 'mat-select[name="group"]',
    'checkbox' : 'input[name="rememberMe"]',
    'button' : 'button[class="mat-button mat-primary"]'
  };

  navigateToLogin() {
    return browser.get('/login');
  }
  // tslint:disable-next-line:no-trailing-whitespace
  
  setEmail() {
    element(by.css(this.selectors['email'])).sendKeys('admin');
  }

  setPassword() {
    element(by.css(this.selectors['password'])).sendKeys('pass');
  }

  selectGroupOptionByValue() {
      element(by.css(this.selectors['selectGroup'])).click()
      .then(() => element.all(by.css('mat-option')).last().click());
  }

  logIn() {
      element(by.css(this.selectors['form'])).submit();
  }

}
