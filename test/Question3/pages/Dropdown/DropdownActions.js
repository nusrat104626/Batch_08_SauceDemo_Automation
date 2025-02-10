const DropdownObjects = require("./DropdownObjects");
class dropdownActions{
async selectdropdown(){ 
   
     await DropdownObjects.selectDropdownButton.waitForDisplayed();
     await DropdownObjects.selectDropdownButton.click();
     await DropdownObjects.selectDropdownButton.selectByAttribute('value', 'za');
    
    
}
}
module.exports = new dropdownActions();
