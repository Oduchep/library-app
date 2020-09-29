const bookLending = require("./BookLendingApp");

test("displays the menu", () => {
  expect(bookLending.viewMenu()).toEqual([
    "View Books",
    "Borrow A Book",
    "View Borrowed Books",
    "Return A Book",
    "Exit",
  ]);
});

test("displays the array of library books", () => {
  expect(bookLending.displayBook()).toEqual([
    "Percy Jackson",
    "The Great Ponds",
    "Shaka Zulu",
    "King Solomon's Mines",
    "Alan Quatermain",
    "A Song of Fire and Ice",
  ]);
});

test("adds a library book to the array of borrowed books", () => {
  expect(bookLending.borrowBook()).toEqual([["Percy Jackson"]]);
});

test("displays the array of borrowed books", () => {
  expect(bookLending.displayBorrowed()).toEqual([["Percy Jackson"]]);
});

test("removes a book from the array of borrowed books and returns it to array of library books", () => {
  expect(bookLending.returnBook()).toEqual([]);
});
