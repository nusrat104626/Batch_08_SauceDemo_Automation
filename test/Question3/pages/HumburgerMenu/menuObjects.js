class MenuActions{
    get SelectMenu(){
        return $("//button[@id='react-burger-menu-btn']");
    }
    get ResetAppState(){
        return $("//a[@id='reset_sidebar_link']");
    }
    get SelectCross(){
        return $("//button[@id='react-burger-cross-btn']")
    }
    
}
module.exports=new MenuActions();
