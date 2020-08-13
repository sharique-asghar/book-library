class Book{
    constructor(bookInfo) {
        if (bookInfo) {

        }

        Object.assign(this, {
            title: "",
            author: "",
            lender: "",
            borrower: "",
            requestedNextBy: ""
        });
    }
}