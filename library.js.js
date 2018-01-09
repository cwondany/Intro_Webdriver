var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('chrome').build();
//.get
driver.get('https://library-app.firebaseapp.com/');


var submitBtn = driver.findElement(By.css('.btn-lg'));
driver.findElement(By.css('input')).sendKeys('us');

//(+) explicit wait: .wait
driver.wait(function () {
    return submitBtn.getCssValue('opacity').then(function (result) {

        return result === '1';
    })
}, 15000);

submitBtn.click();

//(+) explicit wait: .until
driver.wait(until.elementLocated(By.css('.alert-success')), 5000).getText().then(function (txt) {
    console.log('Alert success text is: ' + txt);
});


//driver.quit();