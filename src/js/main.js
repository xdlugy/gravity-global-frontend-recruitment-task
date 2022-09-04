document.cookie="0";
window.onload = function(){

    const over = document.getElementById('over');
    const button = document.getElementById('button');
    const popup = document.getElementById('popup');
    const close = document.getElementById('close');
    var licznik=document.cookie;

    button.onclick = function() {
        over.style.display="block";
        licznik++;
        popup.innerHTML=licznik;
        document.cookie=licznik;
    }

    window.onclick = function(event) {
        if (event.target == over) {
          over.style.display = "none";
        }
    }

    close.onclick= function(){
        over.style.display="none";
    }
};