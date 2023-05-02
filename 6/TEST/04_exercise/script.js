
// Create an array called books in JavaScript. It should contain the title and author of each book, if the book has been sold out or is in stock, plus the price of the book. Add 3 books to the array. Show the elements of this array listed alphabetically in the HTML, and add a way for the user to add books. Style the HTML using CSS flex.

// Estimated time: 45 minutes
// Total points: 45


const body = document.querySelector("body");
const ul = document.createElement("ul");





const books = [
    {
      title: 'BOOK1',
      author: 'ANNA',
      stock: false,
      price:10.00,
    }, 
    {
      title: 'Book2',
      author: 'Thomas',
      stock: true,
      price:20.00,
    },
    {
        title: 'Book3',
        author: 'Brian',
        stock: true,
        price:30.00,
    }
  ];

  books.forEach(book => {
    let bookli = document.createElement("li");
    bookli.textContent = `"${book.title}" by ${book.author} is in stock ${book.stock} current price ${book.price} CHF` ;
        
    ul.appendChild(bookli);
    
});
body.appendChild(ul);
  


