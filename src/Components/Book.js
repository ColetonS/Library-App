import React, {Component} from 'react'
import Edit from './Edit'

export default class Book extends Component {
    constructor() {
        super()

        this.state = {
            edit: false
        }
    }

    render() {
        return (
            <div>
                Here's a book!
                <Edit />
            </div>
        )
    }
}