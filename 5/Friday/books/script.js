
//let x = books[0];

// document.getElementById("p").innerHTML = `${x.title} ${x.author}`;

const body = document.querySelector("body");
const ul = document.createElement("ul");

const books = [
    {
      title: 'The Design of EveryDay Things',
      author: 'Don Norman',
      alreadyRead: false,
      url: "https://m.media-amazon.com/images/I/51Dl6lXXesL._SL500_.jpg"
    }, 
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      alreadyRead: true,
      url: "https://images.thalia.media/00/-/fea975ff72b14aafa6a781790140a360/the-most-human-human-what-artificial-intelligence-teaches-us-about-being-alive-taschenbuch-brian-christian-englisch.jpeg"
    }
  ];
  

books.forEach(book => {
    let bookli = document.createElement("li");
    bookli.textContent = `"${book.title}" by ${book.author}`;
    
    
    let img = document.createElement("img");
    img.src = book.url;

    ul.appendChild(bookli);
    ul.appendChild(img);
    
    if (book.alreadyRead === true) {
  
        img.style.border = "5px solid red";
    }
    img.addEventListener("mouseenter", () => {
      img.style.borderColor = "blue";
    });
    
    img.addEventListener("mouseleave", () =>{
         img.style.borderColor = "yellow";
    });

    img.addEventListener("wheel", zoom, { passive: false });

    let count = 0;


    function zoom(event) {
      event.preventDefault();
      if (event.deltaY>0) {
        console.log("right");
        count = count+10;
        img.style.transform = `translateX(${count}px)`;
       

      }
      else {
        console.log("left");
        count = count-10;
        img.style.transform = `translateX(${count}px)`;
        
      };

      // transform: translateX(-10px);
    }

   
      


    });
    body.appendChild(ul);





