let inputElem = document.querySelector("#username");
let submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", submit);
let tableElem = document.querySelector("#bookLibrary");
let userLoggedIn;
let bookList = [];
const tableHeaders = ["Id", "Title", "Author", "Lender", "Borrower", "Action"];

function init() {
    userLoggedIn = localStorage.getItem("loggedInUser");
    if (userLoggedIn) {
        inputElem.value = userLoggedIn;
    }

    let booklist = BOOK_LIST.map((bookInfo) => new Book(bookInfo))
}

function submit() {
    if (inputElem.value) localStorage.setItem("loggedInUser", inputElem.value);
}

function generateTableRow(info) {

}

function generateTable() {
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    tableElem.innerHTML = thead.outerHTML + tbody.outerHTML;
}

init();