const { browser } = require("selenium-webdriver");
const loginObjects= require("./loginObjects");
class loginActions{
async enterUsername(){ 
    await loginObjects.userName.setValue("standard_user");
    
}
async enterUserPassword(productName){
    await loginObjects.userPassword.setValue("secret_sauce");

}
async clickonLoginButton(){
    await loginObjects.loginButton.click();
}

}
module.exports=new loginActions();