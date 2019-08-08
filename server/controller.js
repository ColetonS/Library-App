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
    },
    deleteBook: (req, res) => {
        const {id} = req.params
        const db = req.app.get('db')
        db.delete_book([id]).then(result => {
            res.status(200).send(result)
        }).catch(err => {
            console.log(err)
            res.status(400).send('Failed to delete book!')
        })
    }
}