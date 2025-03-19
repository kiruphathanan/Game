var submitbutton=document.getElementById("submit");
var msg=document.getElementById("message");
var noOFlives=document.getElementById("livesNo");

var randomNumber=Math.round(Math.random()*100)
var lives=5;
submitbutton.onclick=() => {
    var userInput=document.getElementById("number").value;
    lives--;
    if(lives==0){
        location.href="./lose.html"
    }
    else if(randomNumber==userInput){
        location.href="./won.html"
    }
    else if(randomNumber<userInput){
        message="you're gusee is to low";
    }
    else if(randomNumber>userInput){
        message="you're gusee is to high";
    }
    msg.style.display="inherit";
    msg.innerHTML=message;
    noOFlives.innerHTML=lives;
}