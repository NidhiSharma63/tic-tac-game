

let container = document.querySelector(".container");
let items = document.querySelectorAll(".item");
const space = [];
const tick_zero = "0";
const tick_cross = "x";
let current_player = tick_zero;
items.forEach(function (item) {
 item.addEventListener("click",function(e){
  let id = e.target.dataset.id;
  if(!space[id]){
    e.target.innerHTML=current_player
  }
 })
  

})
// make the border using js
