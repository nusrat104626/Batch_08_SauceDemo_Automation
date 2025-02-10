const { browser } = require("selenium-webdriver");
const priceObjects= require("./priceObjects");
const utilities= require ("../../utility/utilities");
class priceActions{
async getFirstProductPrice(){ 
    const firstProductPrice=await priceObjects.FirstProductPrice.getText();
    return utilities.textToNumber(firstProductPrice);
    
    
}
async getSecondProductPrice(){ 
    const secondProductPrice=await priceObjects.SecondProductPrice.getText();
    return utilities.textToNumber(secondProductPrice);
    
}
async getThirdProductPrice(){ 
   const thirdProductPrice= await priceObjects.ThirdProductPrice.getText();
   return utilities.textToNumber(thirdProductPrice);
    
}
async getTotalPrice(){
   const totalPrice= await priceObjects.TotalPrice.getText();
   return utilities.textToNumber(totalPrice);
}
async getTotalTax(){
    const Tax=await priceObjects.PriceTax.getText();
    return utilities.textToNumber(Tax);
}
async getPriceWithText(){
     const priceWithTax=await priceObjects.PriceWithTax.getText();
     return utilities.textToNumber(priceWithTax);
}



}
module.exports=new priceActions();