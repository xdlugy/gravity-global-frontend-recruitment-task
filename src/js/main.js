window.onload = function(){

    const over = document.getElementById('over');
    const button = document.getElementById('button');
    const popup = document.getElementById('popup');
    const close = document.getElementById('close');
    const bold = document.getElementsByTagName('b');
    const reset = document.getElementById('reset');

    var licznik=document.cookie;

    button.onclick = function() {
        over.style.visibility="visible";
        over.style.backgroundColor="rgba(0,0,0,0.4)";
        popup.style.top="50%";
        licznik++;
        bold[0].innerHTML=licznik+" times";
        document.cookie=licznik;

        if(document.cookie>5)
            reset.style.visibility="visible";
            else
            reset.style.visibility="hidden";
    }

    reset.onclick = function() {
        document.cookie=0;
        licznik=0;
        bold[0].innerHTML="0 times";
        reset.style.visibility="hidden";
    }

    window.onclick = function(event) {
        if (event.target == over) {
          over.style.visibility = "hidden";
          popup.style.top="-50%";
          over.style.backgroundColor="rgba(0,0,0,0)";
        }
    }

    close.onclick= function(){
        over.style.visibility="hidden";
        popup.style.top="-50%";
        over.style.backgroundColor="rgba(0,0,0,0)";
    }
};