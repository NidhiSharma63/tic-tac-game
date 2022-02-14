var container = document.querySelector(".container");
var items = document.querySelectorAll(".item");
items.forEach(function (item) {
  if (item) {
    item.addEventListener("click", function () {
    //   if(winnner){
    //       alert("your are winner")
    //   } 
      var firstChildNode = item.childNodes[1];
      var secondChildNode = item.childNodes[3];
      if (!secondChildNode.classList.contains("show")) {
        firstChildNode.classList.add("show");
      } else {
      }
      items.forEach(function (lastItem) {
        if (lastItem == item) {
        }
      });
      var randomId = Math.floor(Math.random() * 10);
      console.log(randomId);
      var firstChild = container.children[randomId].firstElementChild;
      var lastChild = container.children[randomId].lastElementChild;

      setTimeout(() => {
        if (
          firstChild.classList.contains("show") ||
          lastChild.classList.contains("show")
        ) {
        } else {
          lastChild.classList.add("show");
        }
      }, 20);
    
    });
    
  }
});

function winnner() {
  return (
    (container.children[0].firstElementChild.classList.contains("show") &&
      container.children[1].firstElementChild.classList.contains("show") &&
      container.children[2].firstElementChild.classList.contains("show")) ||
    (container.children[3].firstElementChild.classList.contains("show") &&
      container.children[4].firstElementChild.classList.contains("show") &&
      container.children[5].firstElementChild.classList.contains("show")) ||
    (container.children[6].firstElementChild.classList.contains("show") &&
      container.children[7].firstElementChild.classList.contains("show") &&
      container.children[8].firstElementChild.classList.contains("show")) ||
    (container.children[0].firstElementChild.classList.contains("show") &&
      container.children[4].firstElementChild.classList.contains("show") &&
      container.children[8].firstElementChild.classList.contains("show")) ||
    (container.children[2].firstElementChild.classList.contains("show") &&
      container.children[4].firstElementChild.classList.contains("show") &&
      container.children[6].firstElementChild.classList.contains("show")) ||
    (container.children[0].firstElementChild.classList.contains("show") &&
      container.children[3].firstElementChild.classList.contains("show") &&
      container.children[6].firstElementChild.classList.contains("show")) ||
    (container.children[1].firstElementChild.classList.contains("show") &&
      container.children[4].firstElementChild.classList.contains("show") &&
      container.children[7].firstElementChild.classList.contains("show")) ||
    (container.children[2].firstElementChild.classList.contains("show") &&
      container.children[5].firstElementChild.classList.contains("show") &&
      container.children[8].firstElementChild.classList.contains("show"))
  );
}
