$(document).ready(function () {
    
    const markX = [];
    const markO= [];
    let count = 0;    
    $('.box').on("click", function (event) {

        count++; 
        console.log(count);
        $("#counter").html(+count);
if (count %2 === 0)    
{
    markX.push(event.target.id);
    event.target.innerHTML = "X";
    console.log(markX); 
}
else {
        markO.push(event.target.id);
        console.log(markO);
        event.target.innerHTML = "0";

}

// make array of x's choices 


const XChoices = [];
XChoices.push(markX);
console.log(XChoices);

// $('img').hide(); 

// const winningCombinations = 
//     [["1","2","3"],["4","5","6"],["7","8","9"],["1","4","7"],["2","5","8"],["3","6","9"],["1","5","9"],["3","5","7"]];

// winningCombinations(markX, "X");
// winningCombinations(markO, "O");


})});





//         for (let i = 0; i <= 20; i++) {
//         console.log(i);
//         // markX.push(event.target.id);
//         // event.target.innerHTML = "X";
//         // console.log(markX);    
//     } else {       
//          //  markO.push(event.target.id);
//         // console.log(markO);
//         // event.target.innerHTML = "0";

//     console.log(i);
// }
//     }
//         count++;
// }});


    //MAKE A HIDDEN thing TO COUNT TURNS
// ****ODD OR EVEN*****
    // for (let i = 0; i <= 20; i++) {
    //     if (i % 2 === 0) {
    //         console.log(`${ i } is even`);
    //     } else {
    //         console.log(`${ i } is odd`);
    //     }
    // }
       
 
        



//     ***test alert *** $('#foo').bind('click', function() {
//         alert('User clicked on "foo."');
// //       });
// $('.box').on("click", function () {
//     alert ('Hello');
//     }
//  ****      
   
    // add your player mark in selected box 
    
    // const markX = "X";
    // const boxSelection = 

    
    // const player mark
    // const box 

 
   




//    const playerO =
//    const playerX = 