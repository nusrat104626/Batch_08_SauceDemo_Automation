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
async clickonSecondProduct(productName){
    await cartObjects.SecondProduct.click();

}
async getSecondProductName(){
    return await cartObjects.SecondProductName.getText();
}
async getSecondProductPrice(){ 

    const secondProductPrice=await cartObjects.SecondProductPrice.getText();
    return utilities.textToNumber(secondProductPrice);
    
    
}
async clickonThirdProduct(){
    await cartObjects.ThirdProduct.click();
}
async getThirdProductName(){
    return await cartObjects.ThirdProductName.getText();
}
async getThirdProductPrice(){ 

    const thirdProductPrice=await cartObjects.SecondProductPrice.getText();
    return utilities.textToNumber(thirdProductPrice);
    
    
}
async clickonBackToProducts(){
    await cartObjects.BackToProduct.click();
    
}

async clickonAddToCart(){
    await cartObjects.AddToCart.click();
    
}

}
module.exports=new cartActions();