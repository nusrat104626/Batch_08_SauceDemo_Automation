class informationObjects{

    get FieldFirstName(){
        return $("//input[@placeholder='First Name']");
    }
    get FieldLasttName(){
        return $("//input[@placeholder='Last Name']");
    }
    get FieldPostalCode(){
        return $("//input[@placeholder='Zip/Postal Code']");
    }
    get ContinueButton(){
        return $("//input[@id='continue']");
    }
    get firstProductName(){

        return $("//div[@class='inventory_item_name' and text()='Test.allTheThings() T-Shirt (Red)']");
    }
    
    get TotalPrice(){
        return $("//div[@class='summary_subtotal_label']");
    }
   get FinishButton(){
        return $("//button[@id='finish']");
    }
    get VerifyMessage1(){
        return $("//h2[@class='complete-header' and text()='Thank you for your order!']");
    }
    get VerifyMessage2(){
        return $("//div[@class='complete-text' and text()='Your order has been dispatched, and will arrive just as fast as the pony can get there!']");
    }

    get BackHomeButton(){
        return $("//button[@class='btn btn_primary btn_small']")
    }
    
}

module.exports = new informationObjects();