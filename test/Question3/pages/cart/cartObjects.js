class cartObjects{

    get FirstProduct(){
        return $("(//div[@class='inventory_item_name '])[1]");
    }
    get FirstProductName(){
        return $("//div[@class='inventory_details_name large_size' and text()='Test.allTheThings() T-Shirt (Red)']");
    }
    get FirstProductPrice(){
        return $("//div[@class='inventory_details_price' and @data-test='inventory-item-price']");
    }
    get AddToCart(){
        return $("//button[@class='btn btn_primary btn_small btn_inventory']");
    }
    
    get BackToProduct()
    {
        return $("//button[@class='btn btn_secondary back btn_large inventory_details_back_button']")
    }
   
}

module.exports = new cartObjects();