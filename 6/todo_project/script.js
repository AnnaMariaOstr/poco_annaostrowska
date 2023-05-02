let toDOList = [];
class ToDo {
    constructor(id,value){
        this.id = id
        this.value = value
    }
}

function pressEnterCheck(id){
    document.getElementById(id).focus();
    document.addEventListener('keydown',(event)=>{
        if(event.key ==="Enter"){
            generateList("my-input-field");
        }
    });
}

function generateList(id){
    const value = document.getElementById(id).value;
    console.log(value);
    
    if(value ===""){
        alert("enter a value please");
    } else {
        toDOList.push(new ToDo(toDOList.length,value));
        document.getElementById(id).value = "";
        resetList();
    }
}
function resetList(){
    const parent = document.getElementById("parent-list");
    parent.innerHTML = "";

    for(let i = 0; i<toDOList.length; i++ ){
        //create ptag in html
        let todo = document.createElement("p");
        //For css
        todo.className = "task";
        //giving to do id so we can delete them
        todo.id = i;
        //fill todo with the value os input field
        todo.innerHTML = toDOList[i].value;
        todo.onclick= deleteTodo;
        parent.appendChild(todo);

    }
}

function deleteTodo(event){
toDOList.splice(event.target.id,1);
resetList();
}