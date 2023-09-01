import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
        return $('#user-name');
    }

    get inputPassword() {
        return $('#password');
    }

    get btnLogin() {
        return $('#login-button');
    }

    get errMessage() {
        return $('h3[data-test="error"]');
    }

    /**
     * Login to the page using the provided username and password.
     * 
     * @param {string} username - The username to login with.
     * @param {string} password - The password to login with.
     */
    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    /**
     * Logs in without a username by entering the provided password and clicking the login button.
     * 
     * @param {string} password - The password to use for logging in.
     */
    async loginWithoutUsername(password) {
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    /**
     * Logs in a user without a password.
     * 
     * @param {string} username - The username of the user.
     */
    async loginWithoutPassword(username) {
        // Set the username input value
        await this.inputUsername.setValue(username);

        // Click the login button
        await this.btnLogin.click();
    }

    /**
     * Logs in without username and password.
     */
    async loginWithoutUsernameAndPassword() {
        // Clicks on the login button
        await this.btnLogin.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('');
    }
}

export default new LoginPage();
