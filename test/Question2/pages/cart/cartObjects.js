class cartObjects{

    get FirstProduct(){
        return $("(//div[@class='inventory_item_name '])[4]");
    }
    get FirstProductName(){
        return $("//div[@class='inventory_details_name large_size' and text()='Sauce Labs Fleece Jacket']");
    }
    get FirstProductPrice(){
        return $("//div[@class='inventory_details_price' and @data-test='inventory-item-price']");
    }

    get SecondProduct(){
        return $("(//div[@class='inventory_item_name '])[5]");
    }
    get SecondProductName(){
        return $("//div[@class='inventory_details_name large_size' and text()='Sauce Labs Onesie']");
    }
    get SecondProductPrice(){
        return $("//div[@class='inventory_details_price' and @data-test='inventory-item-price']");
    }

    get ThirdProduct(){
        return $("(//div[@class='inventory_item_name '])[6]");
    }
    get ThirdProductName(){
        return $("//div[@class='inventory_details_name large_size' and text()='Test.allTheThings() T-Shirt (Red)']");
    }
    get ThirdProductPrice(){
        return $("//div[@class='inventory_details_price' and @data-test='inventory-item-price']");
    }
    get BackToProduct()
    {
        return $("//button[@class='btn btn_secondary back btn_large inventory_details_back_button']")
    }
    get AddToCart(){
        return $("//button[@class='btn btn_primary btn_small btn_inventory']");
    }
}

module.exports = new cartObjects();