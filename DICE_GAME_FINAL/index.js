var player1 = "Player 1";
   var player2 = "Player 2";
      var player3 = "Player 3";

   // Function to change the player name
   function editNames() {
       player1 = prompt("Change Player1 name");
       player2 = prompt("Change player2 name");
       player3 = prompt("Change player3 name");

       document.querySelector("p.Player1").innerHTML = player1;
       document.querySelector("p.Player2").innerHTML = player2;
       document.querySelector("p.Player3").innerHTML = player2;
   }

   // Function to roll the dice
   function rollTheDice() {
       setTimeout(function () {
         var randomNumber1= Math.floor(Math.random() * 6) + 1;
//mapping random images in image folder
var randomImage1="images/dice" + randomNumber1 + ".png";

var image1=document.querySelectorAll("img")[0]; //player 1
image1.setAttribute("src",randomImage1);


//player 02
var randomNumber2= Math.floor(Math.random() * 6) + 1;
var randomImage2="images/dice" + randomNumber2 + ".png";
var image2=document.querySelectorAll("img")[1]; //player 2
image2.setAttribute("src",randomImage2);


//player 03
var randomNumber3= Math.floor(Math.random() * 6) + 1;
var randomImage3="images/dice" + randomNumber3 + ".png";
var image3=document.querySelectorAll("img")[2]; //player 3
image3.setAttribute("src",randomImage3);




 if(randomNumber1 > randomNumber2 && randomNumber1 > randomNumber3)
         {
           document.querySelector("h1").innerHTML = (player1 + " WINS!");
         }


         else if(randomNumber2 > randomNumber1 && randomNumber2 > randomNumber3)
         {
           document.querySelector("h1").innerHTML = (player2 + " WINS!");
         }

         else if(randomNumber2 > randomNumber3)
         {
           document.querySelector("h1").innerHTML = (player2 + " WINS!");
         }

         else if(randomNumber1 == randomNumber2 && randomNumber1==randomNumber3)
         {
           document.querySelector("h1").innerHTML = "DRAWS!";
         }
         else
         {

         document.querySelector("h1").innerHTML = (player3 + " WINS!");
         }
       }, 250);
   }
