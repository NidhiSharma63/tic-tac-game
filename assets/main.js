
let container = document.querySelector(".container");
let items = document.querySelectorAll(".item");
let declare = document.getElementById("declare")
let turn = "x";
let gameover = false;

// function to change the turn

const changeTurn = () => {
  return turn === "x" ? "0" : "x"
}

// function to makeWinner
const winnerFunctionX = () => {
  if ((container.children[0].innerText === "x") && (container.children[1].innerText === "x") && (container.children[2].innerText === "x")
  ||(container.children[0].innerText === "x") && (container.children[3].innerText === "x") && (container.children[6].innerText === "x")
  ||(container.children[0].innerText === "x") && (container.children[4].innerText === "x") && (container.children[8].innerText === "x")
  ) {
    gameover=true
    declare.innerText=`you win x`
  }

  if ((container.children[4].innerText === "x") && (container.children[3].innerText === "x") && (container.children[5].innerText === "x")
  ||(container.children[4].innerText === "x") && (container.children[1].innerText === "x") && (container.children[7].innerText === "x")
  ||(container.children[4].innerText === "x") && (container.children[2].innerText === "x") && (container.children[6].innerText === "x")
  ) {
    gameover=true
    declare.innerText=`you win x`
  }
  if ((container.children[8].innerText === "x") && (container.children[6].innerText === "x") && (container.children[7].innerText === "x")
  ||(container.children[8].innerText === "x") && (container.children[5].innerText === "x") && (container.children[2].innerText === "x")
  ) {
    gameover=true
    declare.innerText=`you win x`
  }
}

// draw function
const winnerFunction0 = () =>{
  if ((container.children[0].innerText === "0") && (container.children[1].innerText === "0") && (container.children[2].innerText === "0")
  ||(container.children[0].innerText === "0") && (container.children[3].innerText === "0") && (container.children[6].innerText === "0")
  ||(container.children[0].innerText === "0") && (container.children[4].innerText === "0") && (container.children[8].innerText === "0")
  ) {
    gameover=true
    declare.innerText=`you win 0`
  }

  if ((container.children[4].innerText === "0") && (container.children[3].innerText === "0") && (container.children[5].innerText === "0")
  ||(container.children[4].innerText === "0") && (container.children[1].innerText === "0") && (container.children[7].innerText === "0")
  ||(container.children[4].innerText === "0") && (container.children[2].innerText === "0") && (container.children[6].innerText === "0")
  ) {
    gameover=true
    declare.innerText=`you win 0`
  }
  if ((container.children[8].innerText === "0") && (container.children[6].innerText === "0") && (container.children[7].innerText === "0")
  ||(container.children[8].innerText === "0") && (container.children[5].innerText === "0") && (container.children[2].innerText === "0")
  ) {
    gameover=true
    declare.innerText=`you win 0`
  }
}
// draw function
const Drawfunction = () =>{
  if ((container.children[4].innerText === "0") && (container.children[0].innerText === "0") && (container.children[2].innerText === "0")
  ||(container.children[6].innerText === "0") && (container.children[4].innerText === "0") && (container.children[8].innerText === "0")
  ||(container.children[4].innerText === "0") && (container.children[0].innerText === "0") && (container.children[6].innerText === "0")
  ||(container.children[4].innerText === "0") && (container.children[2].innerText === "0") && (container.children[8].innerText === "0")
  ) {
    gameover=true
    declare.innerText=`game will be tie`
  }
  if ((container.children[4].innerText === "x") && (container.children[0].innerText === "x") && (container.children[2].innerText === "x")
  ||(container.children[6].innerText === "x") && (container.children[4].innerText === "x") && (container.children[8].innerText === "x")
  ||(container.children[4].innerText === "x") && (container.children[0].innerText === "x") && (container.children[6].innerText === "x")
  ||(container.children[4].innerText === "x") && (container.children[2].innerText === "x") && (container.children[8].innerText === "x")
  ) {
    gameover=true
    declare.innerText=`game will be tie`
  }
}
items.forEach(function (item) {
  item.addEventListener("click", function (e) {
    let currentTarget = e.target;
    if (currentTarget.innerText === '') {
      currentTarget.innerText = turn;
      turn = changeTurn();
      winnerFunctionX(); 
      winnerFunction0();
      Drawfunction();
      // !gameover==>gamover is false
      if(gameover){
        setTimeout(() => {
          items.forEach(function(item){
            item.innerText=''
            declare.innerText=''
            currentTarget.innerText=''
            gameover=false
          })
        }, 1000);
      }
    }
  });
});