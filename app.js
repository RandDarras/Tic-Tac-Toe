var board = document.getElementsByTagName("td")
// boardIndexes = [0,1,2,
//                 3,4,5,
//                 6,7,8]
console.log(board[0])

// to count the number of clicks in order to display [x or o]
// if counter is odd number display x else o
var counter = 0; 


//board onclicks
board[0].onclick = function(){
    counter++
    myFunction()
};
board[1].onclick = function(){
    counter++
    myFunction1()
};
board[2].onclick = function(){
    counter++
    myFunction2()
};
board[3].onclick = function(){
    counter++
    myFunction3()
};
board[4].onclick = function(){
    counter++
    myFunction4()
}
board[5].onclick = function(){
    counter++
    myFunction5()
};
board[6].onclick = function(){
    counter++
    myFunction6()
};
board[7].onclick = function(){
    counter++
    myFunction7()
};
board[8].onclick = function(){
    counter++
    myFunction8()
};
//what happens when we click
function myFunction() {
    if(counter%2 === 1){
        board[0].innerHTML = "X";
    } else {
        board[0].innerHTML = "O"; 
    }
}

function myFunction1() {
    if(counter%2 === 1){
        board[1].innerHTML = "X";
    } else {
        board[1].innerHTML = "O"; 
    }
}

function myFunction2() {
    if(counter%2 === 1){
        board[2].innerHTML = "X";
    } else {
        board[2].innerHTML = "O"; 
    }
}

function myFunction3() {
    if(counter%2 === 1){
        board[3].innerHTML = "X";
    } else {
        board[3].innerHTML = "O"; 
    }
}

function myFunction4() {
    if(counter%2 === 1){
        board[4].innerHTML = "X";
    } else {
        board[4].innerHTML = "O"; 
    }
}

function myFunction5() {
    if(counter%2 === 1){
        board[5].innerHTML = "X";
    } else {
        board[5].innerHTML = "O"; 
    }
}

function myFunction6() {
    if(counter%2 === 1){
        board[6].innerHTML = "X";
    } else {
        board[6].innerHTML = "O"; 
    }
}

function myFunction7() {
    if(counter%2 === 1){
        board[7].innerHTML = "X";
    } else {
        board[7].innerHTML = "O"; 
    }
}

function myFunction8() {
    if(counter%2 === 1){
        board[8].innerHTML = "X";
    } else {
        board[8].innerHTML = "O"; 
    }
}


