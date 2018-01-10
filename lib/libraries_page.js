var page = require('./base_page');
var selector = require('../utils/locators');
var libraryItem = selector.libraryItem;
var libraryName = selector.nameInput;
var libraryAddress = selector.addressInput;
var libraryPhone = selector.phoneInput;
var createBtn = selector.createBtn;
var libraryContainer = selector.libraryContainer;
var inputFilter = selector.inputFilter;

//List libraries
page.prototype.listLibraries = function () {
    return this.findAll(libraryItem);
}
//Add library
page.prototype.addLibrary = function (desiredName) {
    var fakeLibraryName;
    if (desiredName) {
        fakeLibraryName = desiredName;
    }else{
        fakeLibraryName= this.fake().libraryName;
    }

    var fakeLibraryAddress = this.fake().address;
    var fakeLibraryPhone = this.fake().phone;
    this.findLink("Add new").click();
    this.write(libraryName, fakeLibraryName);
    this.write(libraryAddress, fakeLibraryAddress);
    this.write(libraryPhone, fakeLibraryPhone);
    this.find(createBtn).click();

    return {
        libraryList: this.find(selector.libraryContainer).getText(),
        libraryName: fakeLibraryName
    }
}
//Sort libraries
page.prototype.filterLibraries = function () {
    //fakeLibrary name
    var newLibrary = this.fake().libraryName;
    //add library(fakeLibraryName)
    this.addLibrary(newLibrary);
    // write(input, fakeLibraryName)
    this.write(inputFilter,newLibrary);

    return {
        libraryList:this.find(libraryContainer).getText(),
        newLibrary: newLibrary
    }

}

module.exports = page;