const { browser } = require("selenium-webdriver");
const checkoutObjects= require("./checkoutObjects");
class checkoutActions{
async clickonShoppingCart(){ 
    await checkoutObjects.ShoppingCart.click();
    
}
async clickonCheckout(){
    await checkoutObjects.Checkout.click();

}

}
module.exports=new checkoutActions();