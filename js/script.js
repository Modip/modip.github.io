const menubtn=document.getElementById("menu-btn") ;
const sidemenu=document.getElementById("sidemenu") ;

menubtn.onclick = function(){
    menubtn.classList.toggle('active');
    sidemenu.classList.toggle('active');
}

document.onclick = function(clickEvent){
    if(clickEvent.target.id !== "menu-btn" && clickEvent.target.id !== "sidemenu"){
       
        menubtn.classList.toggle('active'); 
        sidemenu.classList.toggle('active');
    }
}