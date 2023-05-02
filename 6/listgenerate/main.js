let input = document.getElementById("favcity");
let button = document.querySelector("button");
let list = document.getElementById("list");
let errormsg = document.getElementById("error");


function addelement() {
     let city = input.value;
     let cityel = document.createElement("li");
     cityel.innerText = city ;
     list.appendChild(cityel);
}

button.addEventListener("click", addelement);