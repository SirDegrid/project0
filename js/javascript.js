$(document).ready(function () {    
    
    const markX = [];
    const markO= [];
    let count = 0;

    $('.box').on("click", function (event) {
            
        count++; 
        $("#counter").html(+count);
        $("#counter").hide(); 

if (count %2 === 0) {
    markX.push(event.target.id);
    event.target.innerHTML = "X";
    console.log(markX); 

} else {
        markO.push(event.target.id);
        console.log(markO);
        event.target.innerHTML = "0";
}

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
const xWins = winningCombinations.some(function(checkForWinner) {
    return checkForWinner.every(function(why) {
      return markX.indexOf(why) !=-1
    })
})
    console.log(xWins);

const oWins = winningCombinations.some(function(checkForWinner) {
    return checkForWinner.every(function(why) {
        return markO.indexOf(why) !=-1
        })        
    })
        console.log(oWins);
}
)});



