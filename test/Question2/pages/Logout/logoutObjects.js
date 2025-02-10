class logoutObjects{

    get logout(){
        return $("//a[@id='logout_sidebar_link']");
    }
    
}

module.exports = new logoutObjects();