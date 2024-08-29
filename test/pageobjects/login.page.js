//import { $ } from '@wdio/globals'
import Page from './page.js'; 

class LoginPage extends Page {
    get inputUsername () {
        return $('#user-name');
    }
    get inputPassword () {
        return $('#password');
    }
    get btnSubmit () {
        return $('#login-button');
    }
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        await browser.pause(2000)
    }
    open () {
        return super.open('');
    }
}
export default new LoginPage();
