const loginActions= require("../pages/Login/loginActions");
const menuActions= require("../pages/HumburgerMenu/menuActions");
const cartActions= require("../pages/cart/cartActions");
const checkoutActions=require("../pages/CheckOut/checkoutActions");
const informationActions= require("../pages/Information/informationActions");
const logoutActions= require("../pages/Logout/logoutActions");
import { expect } from "chai";
let TotalPrice=0;
let ActualTotalPrice=1;
let firstProductName="";
let expectedFirstProductName="";


let secondProductName="";
let expectedsecondProductName="";

let thirdProductName="";
let expectedthirdProductName="";

let verifymessage1="";
let verifymessage2="";



describe ("Swag labs Site search",()=>{
   
    it("Login with valid information" , async()=>{
   await browser.pause(3000);
   await loginActions.enterUsername();
   await loginActions.enterUserPassword();
   await browser.pause(3000);
   await loginActions.clickonLoginButton();
   await browser.pause(3000);
    });

    it("Select Humburger Menu" , async()=>{
        await browser.pause(3000);
        await menuActions.clickonMenu();
        await menuActions.clickonResetAppState();
        await browser.pause(3000);
        await menuActions.clickonCrossButton();
         });

    it("Select The Product" , async()=>{
            //First Product
        await browser.pause(3000);
        await cartActions.clickonFirstProduct();
        firstProductName=await cartActions.getFirstProductName();
        const p1=await cartActions.getFirstProductPrice();
        await cartActions.clickonAddToCart();
        await cartActions.clickonBackToProducts();
        await browser.pause(3000);
        //Second Product
        await cartActions.clickonSecondProduct();
        secondProductName=await cartActions.getSecondProductName();
        const p2=await cartActions.getSecondProductPrice();
        await cartActions.clickonAddToCart();
        await cartActions.clickonBackToProducts();
        await browser.pause(3000);
        //Third Product
        await cartActions.clickonThirdProduct();
        thirdProductName=await cartActions.getThirdProductName();
        const p3=await cartActions.getThirdProductPrice();
        await cartActions.clickonAddToCart();
        await cartActions.clickonBackToProducts();
        await browser.pause(3000);
        TotalPrice=p1+p2+p3;
        
            
             });
    it("Checkout Products" , async()=>{
        await browser.pause(3000);
        await checkoutActions.clickonShoppingCart();
        await browser.pause(3000);
        await checkoutActions.clickonCheckout();
        
                 });
    it("Fillup Information" , async()=>{
        await browser.pause(3000);
        await informationActions.enterFirstName();
        await browser.pause(3000);
        await informationActions.enterLastName();
        await browser.pause(3000);
        await informationActions.enterPostalCode();
        await browser.pause(3000);
        await informationActions.clickonContinueButton();
        await browser.pause(3000);
        expectedFirstProductName=await informationActions.getFirstProductName();
        expectedsecondProductName=await informationActions.getSecondProductName();
        expectedthirdProductName=await informationActions.getThirdProductName();

        ActualTotalPrice=await informationActions.getTotalPrice();
        await informationActions.clickonFinishButton();
        await browser.pause(3000);
        verifymessage1=await informationActions.getVerifyMessage1();
        verifymessage2=await informationActions.getVerifyMessage2();
        await informationActions.clickonBackHomeButton();
        
                  
        });
        it("Select Humburger Menu for logout" , async()=>{
            await browser.pause(3000);
            await menuActions.clickonMenu();
            await menuActions.clickonResetAppState();
            await browser.pause(3000);
            await logoutActions.clickonLogout();
            await browser.pause(3000);
             });
it("Verify Product Price" , async()=>{
    await browser.pause(3000);
    console.log(TotalPrice);
    //const expectedTotal=await cartActions.TotalPrice();
    expect(TotalPrice).to.eql(ActualTotalPrice);
    });
    it("Verify Products Name" , async()=>{
        await browser.pause(3000);
        expect(firstProductName).to.include(expectedFirstProductName);
        expect(secondProductName).to.include(expectedsecondProductName);
        expect(thirdProductName).to.include(expectedthirdProductName);
        });
        it("Verify Succesfull Message" , async()=>{
            await browser.pause(3000);
            expect("Thank you for your order!").to.include(verifymessage1);
            expect("Your order has been dispatched, and will arrive just as fast as the pony can get there!").to.include(verifymessage2);
            
            });
            
});