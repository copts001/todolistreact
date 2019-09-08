import React, { Component } from "react";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Textarea from 'react-textarea-autosize';
export default class TodoInput extends Component {
  state = {
    startDate: new Date(),
    open: false
  };

 
  render() {
    const options = ["0", "1", "2", "3"];

    const {
      item,
      note,
      time,
      priority,
      handleTitleChange,
      handleSubmit,
      editItem,
      handleChangeTime,
      handleChangePriority,
      handleNoteChange
    } = this.props;
    return (
      <div className="card card-body my-3">
        Please Input 4 Fields
        <form onSubmit={handleSubmit}>
          <Container>
            <Row>
              <Col>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div
                      className={
                        editItem
                          ? " input-group-text bg-success text-white"
                          : "input-group-text bg-primary text-white"
                      }
                    >
                      <i
                        className={
                          editItem ? "fas fa-pencil-alt" : "fas fa-book"
                        }
                      ></i>
                    </div>
                  </div>
                  <input
                    id="form-test-input"
                    type="text"
                    className="form-control text-capitalize"
                    placeholder="Add a task"
                    value={item}
                    onFocus={() => this.setState({ open: true })}
                    onChange={handleTitleChange}
                  ></input>
                </div>
    
                <br />
              </Col>
            </Row>
         
            <Row>
              <Col>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div
                      className={
                        editItem
                          ? " input-group-text bg-success text-white"
                          : "input-group-text bg-primary text-white"
                      }
                    >
                      <i
                        className={
                          editItem ? "far fa-sticky-note" : "far fa-sticky-note"
                        }
                      ></i>
                    </div>
                  </div>
                  <Textarea   id="form-test-textarea"  minRows={1} className="form-control text-capitalize"    placeholder="Add a Note of Task" value={note} onChange={handleNoteChange} />
        
                </div>
           
                <br />
              </Col>
            </Row>

            

              <Row>
                <div className="input-group">
                  <Col sm={7}>
                    <div className="input-group-prepend">
                      <div
                        className={
                          editItem
                            ? " input-group-text bg-success text-white"
                            : "input-group-text bg-primary text-white"
                        }
                      >
                        <i
                          className={editItem ? "far fa-clock" : "far fa-clock"}
                        ></i>
                      </div>
                      <DatePicker
                        id="form-test-date"
                        selected={time}
                        onChange={handleChangeTime}
                        minDate={new Date()}
                        className="form-control text-capitalize"
                        placeholderText="Select Deadline"
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        timeCaption="time"
                        dateFormat="d/MM/yyyy H:mm   "
                      />
                    </div>
                  </Col>
                  <Col sm={5}>
                    <div className="input-group-prepend">
                      <div
                        className={
                          editItem
                            ? " input-group-text bg-success text-white"
                            : "input-group-text bg-primary text-white"
                        }
                      >
                        <i
                          className={editItem ? "fas fa-star" : "fas fa-star"}
                        ></i>
                      </div>
                      <Dropdown
                        id="form-test-priority"
                        options={options}
                        onChange={handleChangePriority}
                        value={priority}
                        placeholder="Select Priority"
                      />
                    </div>
                  </Col>
                </div>
              </Row>
   
          </Container>

          <button
            id="btn-test-add"
            type="submit"
            className={
              editItem
                ? "btn btn-block btn-success mt-3"
                : "btn btn-block btn-primary mt-3"
            }
          >
            {editItem ? "Edit TODO list" : "Add TODO list"}
          </button>
        </form>
      </div>
    );
  }
}
