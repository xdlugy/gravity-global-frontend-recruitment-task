window.onload = function(){

    const over = document.getElementsByClassName('over')[0];
    const button = document.getElementsByClassName('button')[0];
    const popup = document.getElementsByClassName('popup')[0];
    const close = document.getElementsByClassName('close')[0];
    const bold = document.getElementsByTagName('b')[0];
    const reset = document.getElementsByClassName('reset')[0];

    var licznik=document.cookie;

    button.onclick = function() {
        over.classList.add("over_animation");
        popup.classList.add("popup_animation");
        licznik++;
        bold.innerHTML=licznik+" times";
        document.cookie=licznik;

        if(document.cookie>5)
            reset.style.visibility="visible";
            else
            reset.style.visibility="hidden";
    }

    reset.onclick = function() {
        document.cookie=0;
        licznik=0;
        bold.innerHTML="0 times";
        reset.style.visibility="hidden";
    }

    window.onclick = function(event) {
        if (event.target == over) {
          popup.classList.remove("popup_animation");
          over.classList.remove("over_animation");
        }
    }

    close.onclick=function(){
        popup.classList.remove("popup_animation");
        over.classList.remove("over_animation");
    }
};