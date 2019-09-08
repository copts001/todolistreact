import React, { Component } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      id: uuid(),
      item: "",
      editItem: false,
      startDate: "",
      priority: "",
      sortBy: "Last data updated",
      note: "",
      status: false
    };
  }

  handleTitleChange = e => {
    this.setState({
      item: e.target.value
    });
  };
  handleNoteChange = e => {
    this.setState({
      note: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.item !== "" && this.state.startDate !== "") {
      let newItem = {};
      if (this.state.priority !== "") {
        newItem = {
          id: this.state.id,
          title: this.state.item,
          createTime: new Date(),
          deadline: this.state.startDate,
          priority: this.state.priority,
          note: this.state.note,
          done: this.state.status
        };
      } else if (this.state.priority === "") {
        newItem = {
          id: this.state.id,
          title: this.state.item,
          createTime: new Date(),
          deadline: this.state.startDate,
          priority: "0",
          note: this.state.note,
          done: this.state.status
        };
      }

      const updatedItems = [...this.state.items, newItem];

      this.setState({
        items: updatedItems,
        item: "",
        id: uuid(),
        editItem: false,
        startDate: "",
        priority: "",
        sortBy: "Last data updated",
        note: "",
        status: false
      });
    }
  };
  clearList = () => {
    this.setState({
      items: []
    });
    return true;
  };
  handleDelete = id => {
    const fliteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: fliteredItems
    });
  };
  handleEdit = id => {
    const fliteredItems = this.state.items.filter(item => item.id !== id);

    const selectedItem = this.state.items.find(item => item.id === id);

    this.setState({
      items: fliteredItems,
      item: selectedItem.title,
      startDate: selectedItem.deadline,
      priority: selectedItem.priority,
      note: selectedItem.note,
      status:selectedItem.done,
      id: id,
      editItem: true,
    });
  };

  handleDone = position => {
    this.state.items[position].done = !this.state.items[position].done;
    this.forceUpdate();
  };

  handleChangeTime = date => {
    this.setState({
      startDate: date
    });
  };
  handleChangePriority = data => {
    this.setState({
      priority: data.value
    });
  };

  sortBySetDate = () => {
    const { items } = this.state;
    items.sort(function(a, b) {
      return parseInt(a.deadline.getTime()) - parseInt(b.deadline.getTime());
    });
    this.setState({
      items: items
    });
  };
  sortByCreateDate = () => {
    const { items } = this.state;
    items.sort(function(a, b) {
      return (
        parseInt(a.createTime.getTime()) - parseInt(b.createTime.getTime())
      );
    });
    this.setState({
      items: items
    });
  };
  sortbyPriority = () => {
    const { items } = this.state;
    items.sort(function(a, b) {
      return parseInt(b.priority) - parseInt(a.priority);
    });
    this.setState({
      items: items
    });
  };
  ChooseSortBy = e => {
    this.setState({
      sortBy: e.value
    });
    if (e.value === "Descending Priority") {
      this.sortbyPriority();
    } else if (e.value === "Ascending Deadline") {
      this.sortBySetDate();
    } else if (e.value === "Last data updated") {
      this.sortByCreateDate();
    }
  };

  render() {
    const options = [
      "Last data updated",
      "Descending Priority",
      "Ascending Deadline"
    ];

    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h5 className="text-capitalize text-center">
              Web for Add-Edit-Delete TODO list
            </h5>
            <TodoInput
              item={this.state.item}
              time={this.state.startDate}
              note={this.state.note}
              priority={this.state.priority}
              handleTitleChange={this.handleTitleChange}
              handleNoteChange={this.handleNoteChange}
              handleSubmit={this.handleSubmit}
              handleChangeTime={this.handleChangeTime}
              handleChangePriority={this.handleChangePriority}
              editItem={this.state.editItem}
            />
            Sort Todo List By
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text bg-primary text-white">
                  <i className="fas fa-sort"></i>
                </div>
                <Dropdown
                  options={options}
                  onChange={this.ChooseSortBy}
                  value={this.state.sortBy}
                  placeholder="Select an option"
                />
              </div>
            </div>
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              handleDone={this.handleDone}
            />
          </div>
        </div>
      </div>
    );
  }
}
