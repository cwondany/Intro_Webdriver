var {describe, it, after, before} = require('selenium-webdriver/testing');
var Page = require('../lib/libraries_page');
var chai = require('chai');
var chaiAsPromised = require(('chai-as-promised'));
var should = chai.should();
var page;
chai.use(chaiAsPromised);

describe('library app scenarios: Library listing', function () {
    //needed timeout coz it´s fast to execute
    this.timeout(50000);

    beforeEach(function () {
        page = new Page();
        page.visit('http:/library-app.firebaseapp.com/libraries');

    });

    afterEach(function () {
        page.quit();
    });

    it('Should list libraries', function () {
        var libraries = page.listLibraries();
        libraries.should.eventually.have.length.above(10);
    });

    it('Should be able to add new library', function () {
        var addLibrary = page.addLibrary();
        addLibrary.libraryList.should.eventually.contain(addLibrary.libraryName);
    });

    it('Should be able to sort library', function () {
        var libraries = page.filterLibraries();
        libraries.libraryList.should.eventually.contain(libraries.newLibrary);
    });

})


//driver.quit();