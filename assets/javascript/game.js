
        //declaring variables
    var psychic
    var guest
    var aBc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var wins = 0
    var losses = 0
    var guessesLeft = 10
    var guessesUsed = 0
   // var newGame = guessesLeft = 10, guessesUsed = 0
   
//     function newGame (){
//        guessesLeft = 10;
//        guessesUsed = 0;
//    }

        var psychic = aBc [Math.floor(Math.random() * aBc.length)];

        console.log(psychic)

        document.onkeypress = function(event) {
         var guest = event.key;

          if(guest === psychic)
          {
             wins++;
         }
         else{
             guessesLeft--;
             guessesUsed++;
         }

         if(guessesLeft === 0){
            losses++
         }

         if((guessesLeft == 0) && (guessesUsed == 10)) {
             alert("GAME OVER");
             
            //  function newGame(alert){
            //      guessesLeft = 10;
            //      guessesUsed = 0;
            //  }
                        // I couldn't figure out out to restart the game and change my global variables.
         }
         document.getElementById('wins').innerHTML = "WINS: " + wins;
         document.getElementById('losses').innerHTML = "LOSSES: " + losses;
         document.getElementById('left').innerHTML = "YOUR GUESSES LEFT: " + guessesLeft;
         document.getElementById('soFar').innerHTML = "YOUR GUESSES SO FAR: " + guessesUsed;

         }

    