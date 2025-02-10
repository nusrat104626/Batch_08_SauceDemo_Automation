class priceObjects{

    get FirstProductPrice(){
        return $("//div[text()='49.99']");
    }
    get SecondProductPrice(){
        return $("//div[text()='7.99']");
    }
    get ThirdProductPrice(){
        return $("//div[text()='15.99']");
    }
    get TotalPrice(){
        return $("//div[@class='summary_subtotal_label']");
    }
    get PriceTax(){
        return $("//div[@class='summary_tax_label']");
    }
    get PriceWithTax(){
        return $("//div[@class='summary_total_label']")
    }
}

module.exports = new priceObjects();