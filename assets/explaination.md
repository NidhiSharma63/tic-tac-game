1.why define space
==>so that each time when user click the item box every time data-set-id came in the space variable and every time it check that id is not repeated if id is repeated then it will do nothing else it will place zero

items.forEach(function (item) {
  item.addEventListener("click", function (e) {
    let id = e.target.dataset.id;
    if (!space[id]) {
      e.target.innerText = current_player
      if (playerWon()) {
        return
      }
    }
  });

});