class checkoutObjects{

    get ShoppingCart(){
        return $("//a[@class='shopping_cart_link']");
    }
    get Checkout(){
        return $("//button[@class='btn btn_action btn_medium checkout_button ']");
    }
    
}

module.exports = new checkoutObjects();