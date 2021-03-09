import React, { Component } from "react"
import { Button } from "reactstrap"
import "./addForm.css"
export default class AddForm extends Component {

    state = {
        value: "",

    }


    changeValue = (event) => {
        this.setState({
            value: event.target.value,
        })
    }


    render() {
        const { value } = this.state

        return (
            <form onSubmit={this.offValue} className="addForm">
                <input onChange={this.changeValue} value={value} type="text" placeholder="new Todo" />
                <Button onClick={() => this.props.addItem(value)} color="warning">Add</Button>{' '}

            </form>
        )
    }
}

