import React, {Component} from 'react'

export default class Library extends Component {
    constructor() {
        super()

        this.state = {
            books: [],
            title: '',
            img: '', 
            description: '', 
            userInput: ''
        }
    }

    render() {
        return (
            <div>
                <h2>My Books</h2>
            </div>
        )
    }
}