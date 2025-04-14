var diceimage=[
    "/images/dice1.png",
    "/images/dice2.png",
    "/images/dice3.png",
    "/images/dice4.png",
    "/images/dice5.png",
    "/images/dice6.png"]
    ;  
    function rollDice() {
        var randomDice1 = Math.floor(Math.random() * 6) + 1;
        var randomDice2 = Math.floor(Math.random() * 6) + 1;
        document.querySelector(".img1").setAttribute("src", diceimage[randomDice1-1]);
        document.querySelector(".img2").setAttribute("src", diceimage[randomDice2-1]);
        if (randomDice1 > randomDice2) {
            document.querySelector("h1").innerHTML = "Player 1 Wins!";
        } else if (randomDice1 < randomDice2) {
            document.querySelector("h1").innerHTML = "Player 2 Wins!";
        } else {
            document.querySelector("h1").innerHTML = "Draw!";
        }
    }
    
    document.querySelector("button").addEventListener("click", rollDice);
                
    