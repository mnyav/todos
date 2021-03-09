import React, { Component } from "react";
import Header from "../header";
import AddForm from "../addForm";
import ListItem from "../listItem/index";

import "./app.css";

export default class App extends Component {
  itemId = 10;

  state = {
    data: [
      { name: "hello1", importand: false, check: false, id: 1 },
      { name: "xxxx2", importand: false, check: false, id: 2 },
      { name: "bobi3", importand: false, check: false, id: 4 },
      { name: "bobi4", importand: false, check: false, id: 5 },
      { name: "bob5", importand: false, check: false, id: 6 },
    ],
  };
  onDelete = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((item) => item.id === id);
      const bef = data.slice(0, index);
      const aft = data.slice(index + 1);

      const end = [...bef, ...aft];
      return {
        data: end,
      };
    });
  };

  addForm = (text) => {
    const newData = {
      name: text,
      importand: false,
      id: this.itemId++,
    };
    this.setState(({ data }) => {
      console.log(data);

      const newData2 = [...data, newData];
      console.log(newData2);

      return { data: newData2 };
    });
  };

  // calcult = (id,item) => {
  //   this.setState(({ data }) => {
  //     const index = data.findIndex((item) => item.id === id);

  //     const oldItem = data[index];
  //     const newItem = { ...oldItem, check: !item };

  //     const checkDone = [
  //       ...data.slice(0, index),
  //       newItem,
  //       ...data.slice(index + 1),
  //     ];
  //     return {
  //       data: checkDone,
  //     };
  //   });
  // };
  onDone = (id) => {
    console.log("done", id);
    this.setState(({ data }) => {
      const index = data.findIndex((item) => item.id === id);

      const oldItem = data[index];
      const newItem = { ...oldItem, check: !oldItem.check };
      const checkDone = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];
      return {
        data: checkDone,
      };
    });
  };
  onImportand = (id) => {
    console.log("importand", id);
    this.setState(({ data }) => {
      const index = data.findIndex((item) => item.id === id);

      const oldItem = data[index];
      const newItem = { ...oldItem, importand: !oldItem.importand };
      const checkDone = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];
      return {
        data: checkDone,
      };
    });
  };

  render() {
    const { data } = this.state;

    return (
      <>
        <Header data={data} />
        <ListItem
          onImportandItem={this.onImportand}
          onDoneItem={this.onDone}
          del={this.onDelete}
          data={data}
        />
        <AddForm addItem={this.addForm} />
      </>
    );
  }
}
