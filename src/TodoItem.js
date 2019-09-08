import React, { Component } from "react";

import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import * as moment from "moment";

import TodoItemModal from "./TodoItemModal";
import styles from "./TodoItem.css";


export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false
    };
  }

  convertToNow = date => {

    var now = new Date();
    var nowd = now.getDate();
    var nowm = now.getMonth();
    var nowy = now.getFullYear();
    var nowHour = now.getHours();
    var nowMinute = now.getMinutes();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var Hour = date.getHours();
    var Minutes = date.getMinutes();
    var timenow = moment([nowy, nowm, nowd, nowHour, nowMinute]);
    var timewant = moment([year, month, day, Hour, Minutes]);

    var inago = timenow.to(timewant);

    return inago;
  };

  render() {
    const {
      title,
      deadline,
      note,
      done,
      priority,
      handleDelete,
      handleEdit,handleDone
    } = this.props;
    let openModalClose = () => this.setState({ openModal: false });
    return (
      <div id="item">
        <TodoItemModal
          show={this.state.openModal}
          onHide={openModalClose}
          title={title}
          deadline={deadline}
          note={note}
          done= {done}
          priority={priority}
        />

        <Card border={done ? 'success':'primary'}  text={done ? 'success':'primary'}className={styles.container}>
          <Card.Body  onClick={() => this.setState({ openModal: true })}>
            <h6>
          
              <i className="fas fa-eye"></i>{" "}
              {done ? (
                  <font color="green">
                  <del>{title}</del>
                </font>
              ) : (
                title
              )}{" "}
             
            </h6>
          </Card.Body>
          <Card.Footer>
            {}
            <small className="text-muted">
              {" "}
              Priority Level:{" "}

              
             <Badge variant="primary">{priority}</Badge>
           
             {"   "}  Deadline : {" "}
            
              <Badge variant="warning">{this.convertToNow(deadline)}</Badge>  
             
            </small>
            <input
              id="btn-test-checkbox"
              className="justify-content-center  mx-2"
              type="checkbox"
              value={done}
              checked={done}
              onClick={handleDone} 
            ></input>

            <span
              id="btn-test-edit"
              className="mx-2 text-success"
              onClick={handleEdit}
            >
              <i className="fas fa-pen-square"></i>{" "}
            </span>
            <span
              id="btn-test-delete"
              className="mx-2 text-danger"
              onClick={handleDelete}
            >
              <i className="fas fa-trash"></i>{" "}
            </span>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}
