$(document).ready(function () {    
    
    const markX = [];
    const markO= [];
    let count = 1;
    $("#turnIndicator").html("Player X, take your turn.");
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
            
    $("#xWinner").hide(); 
    $("#oWinner").hide(); 
    $("#restartPrompt").hide(); 
    $("#draw").hide(); 
    $("#button").hide(); 

        $('.box').on("click", function (event) {
        count++; 
        $("#counter").html(count);
        $("#counter").hide(); 
if (event.target.innerHTML.length === 0) {

    if (count %2 === 0) {    
    markX.push(event.target.id);
    event.target.innerHTML = "X";
    console.log(markX); 
    $("#turnIndicator").html("Player O, take your turn."); 
} else {
        markO.push(event.target.id);
        event.target.innerHTML = "0";
        console.log(markO);
        $("#turnIndicator").html("Player X, take your turn.");
} 
} else { 
    alert('already clicked');
    (count = (count-1));
}
const xWins = winningCombinations.some(function(checkForWinner) {
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
        $("#button").show(); 
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
    if (count === 10) {
        $("#button").show(); 
        $("#draw").show(); 
        $("#restartPrompt").show(); 
        $("#turnIndicator").hide(); 

    }
}
)});
