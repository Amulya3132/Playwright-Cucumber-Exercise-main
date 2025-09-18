"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
class Login {
    constructor(page) {
        this.password = 'secret_sauce';
        this.passwordField = 'input[id="password"]';
        this.userNameField = 'input[id="user-name"]';
        this.loginButton = 'input[id="login-button"]';
        this.page = page;
    }
    async validateTitle(expectedTitle) {
        const pageTitle = await this.page.title();
        if (pageTitle !== expectedTitle) {
            throw new Error(`Expected title to be ${expectedTitle} but found ${pageTitle}`);
        }
    }
    async loginAsUser(userName) {
        await this.page.locator(this.userNameField).fill(userName);
        await this.page.locator(this.passwordField).fill(this.password);
        await this.page.locator(this.loginButton).click();
    }
}
exports.Login = Login;
