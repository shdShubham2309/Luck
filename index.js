var randomNumer1=Math.floor(Math.random() *6)+1;

var randomDiceImageSource= "dice" + randomNumer1 + ".png";

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImageSource);

var randomNumer2=Math.floor(Math.random() *6)+1;

var randomDiceImageSource2= "dice" + randomNumer2 + ".png";

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceImageSource2);

if(randomNumer1>randomNumer2){
    document.querySelector("h1").innerHTML="Player1 Wins!";
}
else if(randomNumer2>randomNumer1){
    document.querySelector("h1").innerHTML="Player2 Wins!";

}
else{
    document.querySelector("h1").innerHTML="Draw!";

}