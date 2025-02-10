const loginActions= require("../pages/loginActions");
import { expect } from "chai";
let ActualErrorMessage="";
const ExpectedErrorMessage1="Epic sadface: Sorry, this user has been locked out.";
const ExpectedErrorMessage2="Epic sadface: Username and password do not match any user in this service";
describe ("Swag labs Site search",()=>{
   
    it("Login with valid information" , async()=>{
  
   await loginActions.enterUsername();
   await loginActions.enterUserPassword();
   await browser.pause(3000);
   await loginActions.clickonLoginButton();
   ActualErrorMessage= await loginActions.getErrorMessage();
    });
   it("Verify The Error Message" , async()=>{

    if (ActualErrorMessage === ExpectedErrorMessage1) {
        expect(ActualErrorMessage).to.equal(ExpectedErrorMessage1);
    } else if (ActualErrorMessage === ExpectedErrorMessage2) {
        expect(ActualErrorMessage).to.equal(ExpectedErrorMessage2);
    }
   

        
         });
       
});