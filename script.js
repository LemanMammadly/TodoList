"use strict";

let textArr = [];

function addList() {
  let textInp = document.getElementById("textInp");
  let ul = document.getElementById("ul");
  let remAll = document.getElementById("rem-All");

  if (textInp.value && !(textArr.includes(textInp.value))) {
    textArr.push(textInp.value);
    console.log(textArr.filter((x) => x != textInp.value));
    remAll.style.display = "block";
    document.getElementById("all-remove").disabled = false;
    textInp.value = "";
    textInp.classList.remove("is-invalid");
  } else {
    textInp.classList.add("is-invalid");
  }
  if (textArr.length == 6) {
    document.getElementById("addBtn").disabled = true;
  }
  Display();
}

function Delete(index) {
  textArr.splice(index, 1);
  document.getElementById("addBtn").disabled = false;
  if (textArr.length == 0) {
    document.getElementById("all-remove").disabled = true;
  }

  let messagediv = document.getElementById("message-div");
  messagediv.style.display = "block";

  setTimeout(() => {
    messagediv.style.display = "none";
  }, 2000);
  Display();
}

function Display() {
  let item = "";
  for (let i = 0; i < textArr.length; i++) {
    item += `<li class="list-group-item mb-3 d-flex justify-content-between align-items-center">${textArr[i]} <button onclick="Delete('${i}')" class="btn btn-danger mx-2">Delete</button> </li>`;
  }

  ul.innerHTML = item;
}

function RemoveAll() {
  textArr.splice(0, textArr.length);
  document.getElementById("all-remove").disabled = true;
  Display();
}
