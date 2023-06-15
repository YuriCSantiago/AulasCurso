
/*const book = {     // Dentro do objeto se usa ':' e nao '='
    bookTitle: 'Atomic Habits',
    bookAuthor: 'James Clear',
    bookPages: 306,
    bookChapters: {
        chap1: 'Fundamentals',
        chap2: '1st law'
    },
    printBook: function() {
        console.log('Printing...')
    }
}
// book.printBook()

function printBook() {
    console.log('printing...')
}
*/

// Factory
/*
function createBook (title, author, pages) {
    const book = { 
        bookTitle: title,
        bookAuthor: author,
        bookPages: pages,
        printBook: function() {
            console.log('Printing...')
        }
    }
    return book
}

const book1 = createBook('Atomic', 'James', 306);
const book2 = createBook('Think', 'Napolean', 450);

book1.color = 'White';

console.log(book1);
console.log(book2);
*/


// Constructor
/*
function CreateBook (title, author, pages) {
 
    this.bookTitle = title;
    this.bookAuthor = author;
    this.bookPages = pages
}
const book1 = new CreateBook('Atomic', 'James', 306);
console.log(book1);
*/

// Built in
// console.log(Math.round(5.4))
/*
let message = 'Hey, my name is Andre';
console.log(message.endsWith('Andre'));
*/

// Template Leterals
let firstName = 'Joe';

const email = 'Hi '+ firstName + ', \nThe meeting is confirmed! \nAndre';
const email2 = `Hi ${firstName}, 
The meeting is confirmed! 
Andre`;
console.log(email);
console.log(email2)
