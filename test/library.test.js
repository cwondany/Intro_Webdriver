var webdriver = require('selenium-webdriver'),
    {describe, it, after, before} = require('selenium-webdriver/testing');
    By = webdriver.By,
    until = webdriver.until;

    var driver;

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
            driver.wait(function () {
                return submitBtn.getCssValue('opacity').then(function (result) {
                    return result === '1';
                })
            }, 5000);
        });

        it('wait for mailadress @-sign,click btn and get success test:', function () {
            var submitBtn = driver.findElement(By.css('.btn-lg'));
            driver.findElement(By.css('input')).sendKeys('us@fakemail.com');
            submitBtn.click();
            driver.wait(until.elementLocated(By.css('.alert-success')), 5000).getText().then(function (txt) {
                console.log('Alert success text is: ' + txt);
            });
        });

        it('shows nav bar:', function () {
            driver.findElement(By.css('nav')).getText().then(function (txt) {
                console.log('write nav elements names: '+txt);
            })
        });

})


//driver.quit();