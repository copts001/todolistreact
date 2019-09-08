import React, { Component } from "react";
import TodoItem from "./TodoItem";
import FlipMove from "react-flip-move";

export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit ,handleDone} = this.props;

    return (
      <ul className="list-group my-5">
        <FlipMove duration={250} easing="ease-out">
          <h3 className="text-capitalize text-center"> TODO list : {items.length} Task</h3>

          {items.map((item,i) => {
            return (
              <TodoItem
                key={item.id}
                title={item.title}
                deadline={item.deadline}
                priority={item.priority}
                note ={item.note}
                done = {item.done}
                handleDelete={() => handleDelete(item.id)}
                handleEdit={() => handleEdit(item.id)}
                handleDone={() => handleDone(i)}
 
              />
            );
          })}
          <button
            id="btn-test-clearall"
            type="button"
            className="btn btn-danger btn-block text-capitalize mt-5"
            onClick={clearList}
          >
            Clear TODO list
          </button>
        </FlipMove>
      </ul>
    );
  }
}
