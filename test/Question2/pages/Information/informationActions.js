const { browser } = require("selenium-webdriver");
const informationObjects= require("./informationObjects");
const utilities= require ("../../utility/utilities");
class informationActions{
async enterFirstName(){ 
    await informationObjects.FieldFirstName.setValue("Nusrat");
    
}
async enterLastName(){ 
    await informationObjects.FieldLasttName.setValue("Jahan");
    
}
async enterPostalCode(){ 
    await informationObjects.FieldPostalCode.setValue("4212");
    
}
async clickonContinueButton(){ 
    await informationObjects.ContinueButton.click();
    
}
async getFirstProductName(){ 
   return await informationObjects.firstProductName.getText();
    
}
async getSecondProductName(){ 
    return await informationObjects.secondProductName.getText();
     
 }
 async getThirdProductName(){ 
    return await informationObjects.thirdProductName.getText();
     
 }
async getTotalPrice(){
   const totalPrice= await informationObjects.TotalPrice.getText();
   return utilities.textToNumber(totalPrice);
}
async clickonFinishButton(){ 
    await informationObjects.FinishButton.click();
    
}
async getVerifyMessage1(){ 
    return await informationObjects.VerifyMessage1.getText();
     
 }
 async getVerifyMessage2(){ 
    return await informationObjects.VerifyMessage2.getText();
     
 }
async clickonBackHomeButton(){ 
    await informationObjects.BackHomeButton.click();
    
}

}
module.exports=new informationActions();