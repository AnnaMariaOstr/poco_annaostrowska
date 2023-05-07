/* Load photos via  fetch and display 10 of them as images with title(as caption an as alt)
fetch the data turning json to object list
loop through the array 10 times
create element img tag to display the image
create 2nd el for title H tag or figcaption
we use figure as wrapper element for img and figcaption
we append figure elements to DOM to the main

*/

fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
  .then((response) => response.json())
  .then((json) => displayData(json));

const main = document.querySelector("main");

function displayData(data) {
  const ul = document.createElement("ul");
  main.appendChild(ul);

  data.slice(0, 10).forEach((photoObj) => {
    let li = document.createElement("li");
    ul.appendChild(li);

    let figure = document.createElement("figure");
    li.appendChild(figure);

    let img = document.createElement("img");
    img.src = photoObj.url;
    img.alt = photoObj.tittle;
    figure.appendChild(img);

    let figcaption = document.createElement("figcaption");
    figcaption.textContent = photoObj.tittle;
    figure.appendChild(figcaption);
  });
}
