var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var {describe, it, after, before} = require('selenium-webdriver/testing');
var Page = require('../lib/home_page');
var chai = require('chai');
var chaiAsPromised = require(('chai-as-promised'));
var should= chai.should();
var page;
chai.use(chaiAsPromised);

describe('library app scenarios', function () {
    //needed timeout coz it´s fast to execute
    this.timeout(50000);

    beforeEach(function () {
        page = new Page();
        page.visit('http:/library-app.firebaseapp.com');

    });

    afterEach(function () {
        page.quit();
    });

    it('Typing valid email changes button opacity to 1', function () {
        var btn=page.requestBtn();
        btn.opacity.should.eventually.equal('1');

        /*        var submitBtn = page.driver.findElement(By.css('.btn-lg'));
                page.driver.findElement(By.css('input')).sendKeys('us@fakemail.com');
                page.driver.wait(function () {
                    return submitBtn.getCssValue('opacity').then(function(result) {
                        return result === '1';
                    });
                }, 5000);*/

    });

    it('Typing a valid email enables request button', function () {
        var btn=page.requestBtn();
        btn.state.should.eventually.be.true;
        /*       var submitBtn = page.driver.findElement(By.css('.btn-lg'));
               page.driver.findElement(By.css('input')).sendKeys('us@fakemail.com');
               submitBtn.click();
               page.driver.wait(until.elementLocated(By.css('.alert-success')), 5000);*/
    });

    it('Clicking request invitation triggers a cofirmation alert', function () {
        var alert = page.alertSuccess();
        alert.should.eventually.contain('Thank you!');
        // page.driver.findElements(By.css('nav'));
    });

})


//driver.quit();