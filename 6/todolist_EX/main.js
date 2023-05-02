let toDOList = [];
class ToDo {
    constructor(id,value){
        this.id = id
        this.value = value
    }
};

const list = document.querySelector("ul");
const btnAdd = document.getElementById("add");
const btnSort = document.getElementById("sort")
const input = document.querySelector("input");
const body = document.body;

btnAdd.addEventListener("click",addTodo);
btnSort.addEventListener("click",InOrder);


function addTodo(){
    if(input.value.length > 0){
        if(isDuplicate()){
            let msg = document.createElement("p");            
            body.appendChild(msg);
            msg.textContent = "Duplicates will not be added to the list."
        } else {
            let li = document.createElement("li");
            li.textContent = input.value;
            list.appendChild(li);
        }
    } else {
        //console.log("my value is empty. why?");
        let msg2 = document.createElement("p");   
        body.appendChild(msg2);
        msg2.textContent = "Empty value"
    }
}


function isDuplicate(){
    let result = false;

    //loop through list items and check if value is equal to our input value
    //find the list items, use forEach to find value of each item
    list.querySelectorAll("li").forEach(function(item){
        if(item.textContent.toLowerCase().trim() === input.value.toLowerCase().trim()){
            result = true;
        }
    });

    return result;
}