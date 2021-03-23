var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

var listItems = document.querySelectorAll("li");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  var btn = document.createElement("button");
  btn.textContent = "delete";
  btn.classList.add("delete");
  li.appendChild(document.createTextNode(input.value));
  li.appendChild(btn);
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function toggleStrike(e) {
  var target = e.target;
  target.classList.toggle("done");
}

function deleteItem(e) {
  var item = e.target;
  var parent = item.parentElement;
  if (item.className === "delete") {
    parent.parentNode.removeChild(parent);
  }
}

listItems.forEach((item) => {
  item.addEventListener("click", toggleStrike);
});

ul.addEventListener("click", deleteItem);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
