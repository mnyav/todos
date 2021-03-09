import React, { Component } from "react"
import listItem from "../listItem"
import done from "./done.png";
import dele from "./dele.png"
import "./postList.css"


export default class PostList extends Component {


    render() {
        const { label, id, onImportandItem, onDoneItem, importand, check } = this.props

        let className = "";
        if (check) {
            className += "-done"
        }
        if (importand) {
            className += "-importand"
        }

        return (
            <>
                <span onClick={() => onImportandItem(id)} className={`label${className}`}>{label}</span>
                <img onClick={() => onDoneItem(id)} className={`img${className}`} src={done} alt="img"></img>
                <img onClick={() => this.props.delet(id)} className="img" src={dele} alt="img"></img>

            </>
        )

    }



}

