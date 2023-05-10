var randomNumber1 = Math.floor(Math.random() * 6) + 1; // to get a random number bw 1 and 6 first we mutliplied i by 6 no we're getting numbers bw 0 and 5 . so we added 1 in th end to get numbers bw 1 and 6//
var randomDiceImage  = "dice" + randomNumber1 + ".png"; //  we'll get dice1.png to dice6.png using this//
var randomImageSource = "images/" + randomDiceImage; // we'll images/dice1.png to images/dice6.png using this//
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);


var randomNumber2 =Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);





if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins 😍";
}
else if (randomNumber2 >  randomNumber1)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins 😍";

}
else{
    document.querySelector("h1").innerHTML = "Draw 🙌";
}