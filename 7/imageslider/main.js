let counter = 0;
let imgTag = document.getElementsByTagName("img")[0];
let prevBtn = document.getElementsByTagName("button")[0];
let nextBtn = document.getElementsByTagName("button")[1];
let  images;

fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => displayImages(data))
    .catch(error => console.error(error));

function displayImages(data) {
    images = data;
    imgTag.src=images[counter].url;
}

prevBtn.addEventListener("click",slideToPrev);
nextBtn.addEventListener("click",slideToNext);

function slideToNext(){
    //console.log(counter+" >");
    counter++;
    if(counter === images.length){
        counter = 0;
    }
    if(counter < images.length){
        let nextSlide = images[counter].url;
        imgTag.src = nextSlide;
    }
}

function slideToPrev(){
    //console.log(counter+" <");
    counter--;    
    if(counter < 0){
        counter = images.length-1;
    }
    if(counter >= 0){
        let prevSlide = images[counter].url;
        imgTag.src = prevSlide;
    }
}

function slide(){
    /** direction: next or previous slide */
    /** currentSlide: which image (index of the images array is visible) */
    /** container for that image: img-tag to replace the src attribute */
    let currentSlide = images[counter];

}