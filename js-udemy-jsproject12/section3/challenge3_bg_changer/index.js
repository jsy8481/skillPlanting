document.querySelector(".input").addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
       const li = document.createElement("li");
       li.classList.add("input-test-li")
       const textContent = document.createTextNode(this.value);
       li.addEventListener("click", function (e) {
           if (li.classList.contains("is-read")) {
               li.remove();
           }
           li.classList.toggle("is-read");
       })
       li.appendChild(textContent);
       document.querySelector(".input-test").appendChild(li);
       this.value = "";
   }
});
document.querySelector(".input-test-li").addEventListener("click", function (e) {
    this.remove();
})
