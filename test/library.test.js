var webdriver = require('selenium-webdriver'),
    {describe, it, after, before} = require('selenium-webdriver/testing');
By = webdriver.By,
    assert = require('assert');
until = webdriver.until;

var driver;
var find;

describe('library app scenarios', function () {
    //needed timeout coz it´s fast to execute
    this.timeout(50000);
    beforeEach(function () {
        driver = new webdriver.Builder().forBrowser('chrome').build();
        driver.get('https://library-app.firebaseapp.com/');
    });

    afterEach(function () {
        driver.quit();
    });

    it('Changes Button opacity upon email being filled out', function () {
        var submitBtn = driver.findElement(By.css('.btn-lg'));
        driver.findElement(By.css('input')).sendKeys('us@fakemail.com');

        return submitBtn.getCssValue('opacity').then(function (result) {
            assert(result === '1');
        });

    });

    it('wait for mailadress @-sign,click btn and get success test:', function () {
        var submitBtn = driver.findElement(By.css('.btn-lg'));
        driver.findElement(By.css('input')).sendKeys('us@fakemail.com');
        submitBtn.click();
        driver.wait(until.elementLocated(By.css('.alert-success')), 5000);
        driver.findElements(By.css('.alert-success')).then(function(result) {
            assert.equal(result.length, 1, "alert-success were found");
        });
    });

    it('shows nav bar:', function () {
        driver.findElements(By.css('nav')).then(function (result) {
            assert.equal(result.length, 1, "nav bars were found");
        })
    });

})


//driver.quit();