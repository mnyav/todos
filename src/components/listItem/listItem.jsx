import React, { Component } from "react"
import "./listItem.css"
import PostList from "../postList"

const listItem = ({ data, del, onDoneItem, onImportandItem }) => {

    const elem = data.map((items) => {

        const { id, name, importand, check} = items

        return (

            <>

                <li key={id} className="list-group-item  ">
                    <PostList importand={importand} check={check}  delet={del} label={name} onDoneItem={onDoneItem} onImportandItem={onImportandItem} id={id} />
                </li>
            </>
        )

    })
    return (
        <ul className="list-group">
            {elem}


        </ul>
    )


};

export default listItem;