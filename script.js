var menu = document.querySelector("#this_icon");
var nav = document.querySelector("#nav_showup");
var a = 0;



menu.addEventListener("click", function () {
    if (a == 0){
        nav.style.display="block";
        a = 1;
    }else{
        nav.style.display="none";
        a = 0;
    }
})


