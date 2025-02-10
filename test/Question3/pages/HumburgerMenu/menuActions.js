const { browser } = require("selenium-webdriver");
const menuObjects= require("./menuObjects");
class menuActions{
async clickonMenu(){ 
    await menuObjects.SelectMenu.click();
    
}
async clickonResetAppState(){
    await menuObjects.ResetAppState.click();

}
async clickonCrossButton(){
    await menuObjects.SelectCross.click();
}

}
module.exports=new menuActions();