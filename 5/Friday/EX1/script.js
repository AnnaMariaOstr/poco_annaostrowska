
// let text = "hello"
// // for(let i=0; i<3; i++){
// // text = text+[i]
// // };
// // document.getElementById("h1").innerHTML = text;
// let text = "hello"
// for(let i=0; i<3; i++){
// text = text+[i]
// };
// document.getElementById("h1").innerHTML = text;

// // document.getElementById("h1").innerHTML = "New text!";
// // // document.getElementById("p").innerHTML = "Weather is good";
// // // document.getElementById("a").innerHTML = "not google";// 


let heading = document.querySelector("h1");
let text = document.querySelector("p");
let link = document.querySelector("a");

for (let i=0; i<2; i++ ){
    heading.textContent = heading.textContent + i
};

for (let i=0; i<4; i++ ){
    text.textContent =  i + text.textContent
};
for (let i=0; i<7; i++ ){
    link.textContent =  i 
};








