class dropdownObjects{

    get selectDropdownButton(){
        return $("//select[@class='product_sort_container']");
    }
    
}

module.exports = new dropdownObjects();