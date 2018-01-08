
var webdriver = require ('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('chrome').build();
//.get
driver.get('https://library-app.firebaseapp.com/');;

//.write in input and click btn, getText from alert-success 
driver.findElement(By.css('input')).sendKeys('user@email.com');
driver.findElement(By.css('.btn-lg')).click();

//(+) explicit wait: .until (docs)
driver.wait(until.elementLocated(By.css('.alert-success')),5000).getText().then(function(txt){
	console.log('Alert success text is: '+ txt);
});

// bad practice, only for debugging
//driver.sleep(1500);

// (-)implicit waits for one thing
//driver.manage().timeouts().implicitlyWait(5000);
//driver.findElement(By.css('.alert-success')).getText().then(function(txt){
//		console.log("Alert success text is: "+txt);
//});

//.findElement
driver.findElement(By.css('input')).then(function(el){
		console.log("success "+el);
});

driver.findElement(By.css('.btn-lg')).then(function(el){
		console.log("button found: "+el);
});

//.getText
driver.findElement(By.css('.btn-lg')).getText().then(function(txt){
		console.log("the text of the button is: "+txt);
});



driver.findElements(By.css('nav li')).then(function(array){
		console.log("found the nav elements"+array);
});
driver.findElements(By.css('nav li')).then(function(elements){
	elements.map(function(el){
		el.getText().then(function(txt){
		console.log("the text of the navbar element is "+txt);
});
});
});


//driver.quit();