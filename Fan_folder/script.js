let x=document.getElementsByClassName('fan');
function on(){
    x[0].style.animationName="spin";
}
function off(){
    x[0].style.animationName="";
}
function slow(){
    x[0].style.animationDuration=".8s";
}
function normal(){
    x[0].style.animationDuration=".5s";
}
function fast(){
    x[0].style.animationDuration="0.02s";
}



