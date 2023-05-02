//week 5 day 5 exam 2
const books = [
    {
      title: "The Design of EveryDay Things",
      author: "Don Norman",
      alreadyRead: false,
      cover:
        "https://images.thalia.media/00/-/40bff3117f3e4580a38dedf45dbd07e1/the-design-of-everyday-things-taschenbuch-donald-a-norman-englisch.jpeg",
    },
    {
      title: "The Most Human Human",
      author: "Brian Christian",
      alreadyRead: true,
      cover:
        "https://images.thalia.media/00/-/aca288c4146d4001b340543e317eab50/the-most-human-human-taschenbuch-brian-christian-englisch.jpeg",
    },
  ];
  const $ = (scope) => document.querySelector(scope);
  
  h1 = document.createElement("h1");
  $("body").append(h1);
  
  h1.innerText = "My Book List";
  
  ul = document.createElement("ul");
  $("body").append(ul);
  
  books.forEach((book) => {
    li = document.createElement("li");
    h3 = document.createElement("h3");
    p = document.createElement("p");
    img = document.createElement("img");
    span = document.createElement("span");
    br = document.createElement("br");
    $("ul").insertAdjacentElement("afterbegin", li);
    $("li").append(h3, p, img, br, span);
    h3.innerText = book.title;
    p.innerText = book.author;
    img.src = book.cover;
    span.innerText = book.alreadyRead ? "Already Read" : "Not Read";
    book.alreadyRead? li.style.color="blue" :li.style.color="red" ;
    if (book.alreadyRead) {
      li.style.opacity = "0.5";
    }
  });