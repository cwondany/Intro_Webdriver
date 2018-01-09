var Page = require('./base_page');

Page.prototype.requestBtn = function () {
    this.write('input', this.fake().email);

    return {
        opacity:this.find('.btn-lg').getCssValue('opacity'),
        state: this.find('.btn-lg').isEnabled()
    }
}

Page.prototype.clickSubmit =function () {
    return this.find('.btn-lg').click();
    page.prototype.alertSuccess = function () {
        this.requestBtn();
        this.clickSubmit();
        return this.find('.alert-success').getText();
    }
}

Page.prototype.alertSuccess = function () {
    this.requestBtn();
    this.clickSubmit();
    return this.find('.alert-success').getText();
}
module.exports = Page;