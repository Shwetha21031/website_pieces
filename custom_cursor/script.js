let myDiv = document.getElementById("mydiv");

function isTouch(){
    try{
        document.createEvent("TouchEvent");
        return true;
    }catch(e){
        return false;
    }
}

const move =(e) => {
    try{
        var x = !isTouch() ? e.pageX : e.touche[0].pageX;
        var y = !isTouch() ? e.pageY : e.touche[0].pageY;
    }catch (e) {}

    myDiv.style.left = x - 10 + "px";
    myDiv.style.top = y - 10 + "px";
};

document.addEventListener("mousemove",(e)=>{
    move(e);

});
document.addEventListener("touchmove",(e)=>{
    move(e);
});