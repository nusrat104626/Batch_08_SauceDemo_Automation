class loginObjects{

    get userName(){
        return $("//input[@placeholder='Username']");
    }
    get userPassword(){
        return $("//input[@placeholder='Password']");
    }
    get loginButton(){
        return $("//input[@class='submit-button btn_action']");
    }
    get errorMessage(){
        return $("//h3[@data-test='error']//text()[not(ancestor::button)]");
    }
}

module.exports = new loginObjects();