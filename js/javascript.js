$(document).ready(function () {    
    
    const markX = []; // defining variables that will fill the squares on click 
    const markO= [];
    let count = 1; //count used to swap turns 
    const winningCombinations = [
        ["1","2","3"],
        ["4","5","6"],
        ["7","8","9"],
        ["1","4","7"],
        ["2","5","8"],
        ["3","6","9"],
        ["1","5","9"],
        ["3","5","7"]
            ];
    
    $("#turnIndicator").html("Player X, take your turn.");  //shows whose turn it is when page starts       
    $("#xWinner").hide(); //these are all hidden but will show at different points throughout the game
    $("#oWinner").hide(); 
    $("#restartPrompt").hide(); 
    $("#draw").hide(); 
    $("#button").hide(); 

        $('.box').on("click", function (event) { //click starts the game 
        count++; // counter goes up on click 
        $("#counter").html(count); 
        $("#counter").hide(); 

    if (event.target.innerHTML.length === 0) { //if the square is not filled do below 

    if (count %2 === 0) {    // if the counter is divisable by 2 it's x's turn 
    markX.push(event.target.id);
    event.target.innerHTML = "X"; // fills sqaure with players mark 
    console.log(markX); //creates array 
    $("#turnIndicator").html("Player O, take your turn."); // on click the counter goes up by 1 and changes whose turn it is 
} else {
        markO.push(event.target.id);
        event.target.innerHTML = "0";
        console.log(markO);
        $("#turnIndicator").html("Player X, take your turn.");
} 
} else { 
    alert('already clicked'); //if the square does not === 0 it will alert player to know it has already been used 
    (count = (count-1));
}
const xWins = winningCombinations.some(function(checkForWinner) { //checks through winning combination to see if the players array is present 
    return checkForWinner.every(function(xWins) {
      return markX.indexOf(xWins) !=-1
    })
})
const oWins = winningCombinations.some(function(checkForWinner) {
    return checkForWinner.every(function(oWins) {
        return markO.indexOf(oWins) !=-1
        })        
    })
    if (xWins) {
        $("#button").show(); //things showing at different times depending on what's happening in the game 
        $("#xWinner").show();
        $("#restartPrompt").show(); 
        $("#turnIndicator").hide(); 
        $('.box').on("click", function (event) {
        event.target.innerHTML = "";
        });
    }
    else if (oWins) {
        $("#button").show(); 
        $("#oWinner").show(); 
        $("#restartPrompt").show(); 
        $("#turnIndicator").hide(); 
        $('.box').on("click", function (event) {
        event.target.innerHTML = "";
        $("#xWinner").hide();
        });
            
    }
    if (count === 10) { //if all the squares are full players are told it's a draw and asked to play again 
        $("#button").show(); 
        $("#draw").show(); 
        $("#restartPrompt").show(); 
        $("#turnIndicator").hide(); 

    }
}
)});
