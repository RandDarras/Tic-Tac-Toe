var box = document.getElementsByTagName("td")
var boardArr = [[0,0,0],
                [0,0,0],
                [0,0,0]]

// board.addEventListener("click", myFunction);
// console.log(document.getElementsByTagName("td"))


box.onclick = function(){myFunction()}
function myFunction() {
//  alert("you just clicked")
 box.innerHTML = "X";
}