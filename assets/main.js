
let container = document.querySelector(".container");
let items = document.querySelectorAll(".item");
let declare = document.getElementById("declare")
const space = [];
let turn="x";
// items.forEach(function (item) {
//   item.addEventListener("click", function (e) {
//   });
// });
// function to change the turn

const changeTurn=()=>{
  return turn === "x" ? "0": "x"
}
items.forEach(function (item) {
  item.addEventListener("click", function (e) {
    if(e.target.innerText===''){
      e.target.innerText=turn;
    turn = changeTurn();

  console.log(e.target.innerText)
    }
  });
});