const ul = document.querySelector("ul");
const lis = document.querySelectorAll("li");
const listAdder = document.querySelector(".list-adder");

function ulClickListener(e) {
   const currentRemoveSpan = e.target.querySelector("span");
   if (currentRemoveSpan) {
      currentRemoveSpan.remove();
   } else {
      const removeSpan = document.createElement("span");
      removeSpan.textContent = " X";
      removeSpan.addEventListener("click", function () {
         e.target.remove();
      });
      e.target.appendChild(removeSpan);
   }
   e.target.classList.toggle("red");
}

ul.addEventListener("click", ulClickListener)

listAdder.addEventListener("keydown", function (e) {
   if (e.keyCode === 13 && this.value) {
      const newListItem = document.createElement("li");
      newListItem.textContent = this.value;
      ul.appendChild(newListItem);
      this.value = "";
   }
});
