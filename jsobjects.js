function Books(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;

    this.bookList  = [];

    this.bookInfo = function(){
        console.log(`${this.title} by ${this.author} has a total of ${this.pages} pages.`);
    }

    this.addBook = function(book){
        this.bookList.push(book);
        console.log(`${this.title} has been added to the library`);
    }


    this.pageCount = function(){
        let over100 = this.bookList.filter(count => count > 100)
        console.log(`Here is a list of all books over 100 pages: ${over100}`);
    }

}


let fahrenheit = new Books("Fahrenheit 451", "Ray Bradbury", 158)

fahrenheit.bookInfo();
fahrenheit.addBook();

let dune = new Books("Dune", "Frank Herbert", 412)

dune.bookInfo();
dune.addBook();

let it = new Books("It", "Stephen King", 1138)

it.bookInfo();
it.addBook();

let theHobbit = new Books("The Hobbit", "J.R.R. Tolkien", 310)

theHobbit.bookInfo();
theHobbit.addBook();




