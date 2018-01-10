var Page = require('./base_page');
var selector = require('../utils/locators');
var emailInput = selector.emailInput;
var requestInviteBtn = selector.requestInviteBtn
var alertSuccess = selector.alertSuccess;

Page.prototype.requestBtn = function () {
    this.write(emailInput, this.fake().email);

    return {
        opacity: this.find(requestInviteBtn).getCssValue('opacity'),
        state: this.find(requestInviteBtn).isEnabled()
    }
}

Page.prototype.clickSubmit = function () {
    return this.find(requestInviteBtn).click();
    page.prototype.alertSuccess = function () {
        this.requestBtn();
        this.clickSubmit();
        return this.find(alertSuccess).getText();
    }
}

Page.prototype.alertSuccess = function () {
    this.requestBtn();
    this.clickSubmit();
    return this.find(alertSuccess).getText();
}
module.exports = Page;