const StQuantity = 4
let splash_text = sessionStorage.getItem("persist_splash_text");

if(splash_text == null){
    splash_text = Math.round(Math.random() * (StQuantity - 1)) + 1;
    sessionStorage.setItem("persist_splash_text", splash_text);
}
if(splash_text == 1){
    document.write("Gday! Cool website aye?");
}
else if(splash_text == 2){
    document.write("The birds are government spys!!!!!!!! :O")
}
else if(splash_text == 3){
    document.write("Good [afternoon/morning/night] my good [sir/lady/chap]")
}
else if(splash_text == 4){
    document.write("Eek!")
}