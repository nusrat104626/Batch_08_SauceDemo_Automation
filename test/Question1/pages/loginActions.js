const { browser } = require("selenium-webdriver");
const loginObjects= require("./loginObjects");
class loginActions{
async enterUsername(){ 
    await loginObjects.userName.setValue("locked_out_user");
    
}
async enterUserPassword(productName){
    await loginObjects.userPassword.setValue("secret_sauce");

}
async clickonLoginButton(){
    await loginObjects.loginButton.click();
}
async getErrorMessage(){
    return await loginObjects.errorMessage.getText();
    
}
}
module.exports=new loginActions();