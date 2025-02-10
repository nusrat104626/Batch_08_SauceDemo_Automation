const { browser } = require("selenium-webdriver");
const cartObjects= require("./cartObjects");
const utilities= require ("../../utility/utilities");
class cartActions{
async clickonFirstProduct(){ 
    await cartObjects.FirstProduct.click();
    
}
async getFirstProductName(){
     return await cartObjects.FirstProductName.getText();
}
async getFirstProductPrice(){ 

    const firstProductPrice=await cartObjects.FirstProductPrice.getText();
    return utilities.textToNumber(firstProductPrice);
    
    
}
async clickonAddToCart(){
    await cartObjects.AddToCart.click();
    
}

async clickonBackToProducts(){
    await cartObjects.BackToProduct.click();
    
}



}
module.exports=new cartActions();