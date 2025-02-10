const { browser } = require("selenium-webdriver");
const logoutObjects= require("./logoutObjects");
class logoutActions{
async clickonLogout(){ 
    await logoutObjects.logout.click();
    
}

}
module.exports=new logoutActions();