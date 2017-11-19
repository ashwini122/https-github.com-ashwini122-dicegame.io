/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore,activePlayer;
init();

//1.calculate a random number
/*dice = Math.floor(Math.random()*6)+1;*/
/*console.log(dice);*/

//2.To update the value of dice in current box

/*document.querySelector("#current-0").textContent = dice;
document.querySelector("#current-1").textContent = dice;*/

//3.These above lines can only be used manually to update to current-0 and current-1 but do dynamically
 
//document.querySelector("#current-" + activePlayer).textContent = dice;
 //4. here based the activeplayer value the current- will append with active player. ex: #current + 0= #current-0 because of type conversion

//hiding the dice
/*
document.querySelector(".dice").style.display = "none";
//set everything to none
document.getElementById('current-0').innerHTML = "0";
document.getElementById('current-1').innerHTML = "0";
document.getElementById('score-0').innerHTML = "0";
document.getElementById('score-1').innerHTML = "0";
*/

//on clicking the option button roll the value should be updated to current

document.querySelector('.btn-roll').addEventListener('click' ,function() {
    //1.random number
    var dice;
    dice = Math.floor(Math.random()*6)+1;
    //2.Display result
    var diceDom =  document.querySelector(".dice");
    diceDom.style.display = "block";
    diceDom.src = "dice-"  + dice +".png";
    
    document.querySelector("#current-" + activePlayer).textContent = dice;
    //3.ADD the current score to the total round score
    if (dice !== 1){
         scores[activePlayer] +=dice;
        document.querySelector('#score-' + activePlayer).innerHTML = scores[activePlayer];
    }
    else if(scores[activePlayer] >= 10){
             document.querySelector('#name-' + activePlayer).innerHTML = "winner!!!"
        document.querySelector(".dice").style.display="none";
        document.querySelector('.player-' +activePlayer +'panel').classList.add('winner');
        document.querySelector('.player-' +activePlayer +'panel').classList.remove('active');
           
           }
    else{
        alert("Now player" + (activePlayer +1) +" total score is zero!!!!");
        scores[activePlayer] = 0;
        nextPlayer();
       
    }
} );
document.querySelector(".btn-hold").addEventListener('click', function(){
    
    //1.add current score to the global score
    scores[activePlayer] += roundScore;
    //2. update the ui
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    nextPlayer();
    
    
    //3.to check if the player won the game
    if (scores[activePlayer] >= 10){
        document.querySelector('#name-' + activePlayer).innerHTML = "winner!!!"
        document.querySelector(".dice").style.display="none";
    }
     
});
document.querySelector(".btn-new").addEventListener('click' ,init);
    


function init(){
scores = [0,0];
roundScore = 0;
activePlayer = 0;
    document.querySelector(".dice").style.display = "none";
//set everything to none
document.getElementById('current-0').innerHTML = "0";
document.getElementById('current-1').innerHTML = "0";
document.getElementById('score-0').innerHTML = "0";
document.getElementById('score-1').innerHTML = "0";
document.getElementById("name-0").innerHTML = prompt("enter the first player's name!!!");
document.getElementById("name-1").innerHTML = prompt("enter the second player's name!!!");
    
}
function nextPlayer(){
        document.querySelector('#score-' + activePlayer).innerHTML = scores[activePlayer];
        document.querySelector('#current-' + activePlayer).innerHTML = "0";
        activePlayer === 0 ? activePlayer =1 : activePlayer =0;
        //4.change the active player
        document.querySelector(".player-0-panel").classList.toggle('active');
        document.querySelector(".player-1-panel").classList.toggle('active');
        document.querySelector(".dice").style.display="none";
}

































