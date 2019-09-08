import React, { Component } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import * as moment from "moment";

export default class TodoItemModal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  convertToNow(date) {
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
  }

  render() {
    const { title, deadline, note, done, priority, onHide, show } = this.props;
    return (
      <div>
        <Modal
          show={show}
          onHide={onHide}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {done ? (
                  <font color="green">
                  Complete : {title}
                </font>
              ):  (
                <font color="blue">
                 {title}
              </font>
            ) } <br />


            <small> Priority Level: {" "} </small>  
              <font color="red">
               <small> <b>{priority}</b> </small> 
              </font>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <small className="text-muted">
              <font color="red">
                <b>{this.convertToNow(deadline) + "  "}</b>
              </font>
              to deadline : {deadline.toString()}
            </small>
            <p>{note}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
