function bookLending() {
  (this.name = "Peter Okerulu"),
    (this.menu = [
      "View Books",
      "Borrow A Book",
      "View Borrowed Books",
      "Return A Book",
      "Exit",
    ]),
    (this.books = [
      "Percy Jackson",
      "The Great Ponds",
      "Shaka Zulu",
      "King Solomon's Mines",
      "Alan Quatermain",
      "A Song of Fire and Ice",
    ]),
    (this.borrowedBook = []);
}

bookLending.prototype = {
  viewMenu: function () {
    console.log(`-------------------------------------------------------\n`);
    for (let i = 0; i < this.menu.length; i++) {
      console.log(`${i + 1}. ${this.menu[i]} \n`);
    }
    return this.menu;
  },
  displayBook: function () {
    console.log(`-------------------------------------------------------\n`);
    console.log(`Books in the library are:`);
    for (let i = 0; i < this.books.length; i++) {
      console.log(`${i + 1}. ${this.books[i].toUpperCase()} \n`);
    }
    return this.books;
  },
  borrowBook: function () {
    let borrow = this.books.splice(0, 1);
    this.borrowedBook.push(borrow);
    console.log(`Dear ${this.name}, you have borrowed ${borrow}\n`);
    return this.borrowedBook;
  },
  displayBorrowed: function () {
    if (this.borrowedBook.length == 0) {
      console.log(`Dear ${this.name} you have not borrowed any book!\n`);
    } else {
      console.log(`-------------------------------------------------------\n`);
      console.log(`Dear ${this.name}, you borrowed:`);
      for (let i = 0; i < this.borrowedBook.length; i++) {
        console.log(`${i + 1}. ${this.borrowedBook[i]} \n`);
      }
    }
    return this.borrowedBook;
  },
  returnBook: function () {
    this.displayBorrowed();
    let returned = this.borrowedBook.splice(0, 1);
    this.books.push(returned);
    console.log(`Dear ${this.name}, you have returned ${returned}\n`);
    return this.borrowedBook;
  },
};

let library = new bookLending();

module.exports = library;
