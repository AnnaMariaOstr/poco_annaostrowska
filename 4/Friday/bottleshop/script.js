
function incrementMyButton(id) {
    let pTag = document.getElementById(id)
     pTag.innerHTML++
   
 }

function decrementMyButton(id) {
    let pTag = document.getElementById(id)
     pTag.innerHTML--
   
 }

 function incrementPrice(id,price){
    let pTag = document.getElementById(id)
    pTag.innerHTML = pTag.innerHTML + price
 }


 