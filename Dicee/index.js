
let randomNumber1 = Math.floor(Math.random()*6) + 1;

let randomDiceImg1 = "dice" + randomNumber1 +".png";

let randomSrcImg1 = "images/" + randomDiceImg1;

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomSrcImg1);

// document.querySelector("img.img1").setAttribute("src", randomDiceImg);

let randomNumber2 = Math.floor(Math.random()*6) + 1;

let randomDiceImg2 = "dice" + randomNumber2 +".png";

let randomSrcImg2 = "images/" + randomDiceImg2;

document.querySelectorAll("img.img2")[0].setAttribute("src", randomSrcImg2);





if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").innerHTML = "It's A Draw!";
}

