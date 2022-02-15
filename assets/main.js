
let container = document.querySelector(".container");
let items = document.querySelectorAll(".item");
let declare = document.getElementById("declare")
const space = [];
let turn = "x";
let gameover = false;

// function to change the turn

const changeTurn = () => {
  return turn === "x" ? "0" : "x"
}

// function to makeWinner
const winnerFunction = (board) => {
  if ((container.children[0].innerText === "x") && (container.children[1].innerText === "x") && (container.children[2].innerText === "x")
  ||(container.children[0].innerText === "x") && (container.children[3].innerText === "x") && (container.children[6].innerText === "x")
  ||(container.children[0].innerText === "x") && (container.children[4].innerText === "x") && (container.children[8].innerText === "x")
  ) {
    gameover=true
    declare.innerText=`you win`
    // return true;
  }

  if ((container.children[4].innerText === "x") && (container.children[3].innerText === "x") && (container.children[5].innerText === "x")
  ||(container.children[4].innerText === "x") && (container.children[1].innerText === "x") && (container.children[7].innerText === "x")
  ||(container.children[4].innerText === "x") && (container.children[2].innerText === "x") && (container.children[6].innerText === "x")
  ) {
    gameover=true
    declare.innerText=`you win`
    // return true;
  }
  if ((container.children[8].innerText === "x") && (container.children[6].innerText === "x") && (container.children[7].innerText === "x")
  ||(container.children[8].innerText === "x") && (container.children[5].innerText === "x") && (container.children[2].innerText === "x")
  ) {
    gameover=true
    declare.innerText=`you win`
  }

}
items.forEach(function (item) {
  item.addEventListener("click", function (e) {
    let currentTarget = e.target;
    if (currentTarget.innerText === '') {
      currentTarget.innerText = turn;
      turn = changeTurn();
      winnerFunction(); 
    }
  });
});