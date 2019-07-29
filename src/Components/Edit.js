import { statement } from "@babel/template";

import React, {Component} from 'react'

export default class Edit extends Component {
    constructor() {
        super()

        this.state = {
            title: '', 
            img: '' ,
            description: ''
        }
    }

    render() {
        return (
            <div>
                Edit Component
            </div>
        )
    }
}