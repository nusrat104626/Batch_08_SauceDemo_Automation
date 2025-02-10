class Utilities{
    textToNumber(text){
        return parseFloat(/[^0-9.]/g, "");
    }

}
module.exports=new Utilities();