const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");

//const button = document.querySelector(".button");

box1.addEventListener("click", (e) =>{
    alert("you clicked on box1");
});

 box1.addEventListener("click", (e) =>{
//     //e.target
   console.log(e);
   e.target.style.backgroundColor = "red"
 });

 window.addEventListener("resize", () =>{
    // console.log(window.innerWidth);
     box2.textContent = `Width: ${window.innerWidth}, Height:${window.innerHeight}`;
 });
 window.addEventListener("load", () =>{
    // console.log(window.innerWidth);
     box2.textContent = `Width: ${window.innerWidth}, Height:${window.innerHeight}`;
 });

 
 

