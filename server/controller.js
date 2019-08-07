module.exports = {
    getBooks: (req, res) => {
        const db = req.app.get('db')
        db.get_all_books().then(books => {
            res.status(200).send(books)
        })
    },
    addBook: async (req, res) => {
        const {title, author, description, img} = req.body
        const db = req.app.get('db')
        const newBook = await db.add_book(
            {title, author, description, img}
        )
        res.status(201).send(newBook)
    }
}