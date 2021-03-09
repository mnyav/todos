import React, { Component } from "react";
import "./header.css";

export default class Header extends Component {
  render() {
    const { data } = this.props;
    const filte = data.filter((item) => item.check);
    const donePost = filte.length;
    const all = data.map((item) => item.length);
    const allPost = all.length;
    const impor = data.filter((item) => item.importand);
    const newImpor = impor.length;
    return (
      <div className="header">
        <h1>Hello am TodoList</h1>
        <span>
          {" "}
          {allPost} all post, {newImpor} importand, {donePost} done post
        </span>
      </div>
    );
  }
}
