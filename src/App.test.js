import React from "react";
import { mount, shallow } from "enzyme";

import App from "./App";

it("Can Input Title Data  and  State  Change", () => {
  const wrapper = shallow(<App />);
  const value = "testtest";
  const e = { target: { value } };
  wrapper.instance().handleTitleChange(e);

  expect(wrapper.state().item).toBe(value);
});

it("Can Input Note Data  and  State  Change", () => {
  const wrapper = shallow(<App />);
  const value = "testtest";
  const e = { target: { value } };
  wrapper.instance().handleNoteChange(e);
  expect(wrapper.state().note).toBe(value);
});


it("Can Input Date and  State  Change", () => {
  const wrapper = shallow(<App />);
  var date = new Date();
  wrapper.instance().handleChangeTime(date);
  expect(wrapper.state().startDate).toBe(date);
});

it("Can Priority Date and  State  Change", () => {
  const wrapper = shallow(<App />);
  const priority = "1";
  const epriority = { value: priority, label: priority };
  wrapper.instance().handleChangePriority(epriority);
  expect(wrapper.state().priority).toBe(priority);
});




it("Can Save data to array", () => {
  const wrapper = shallow(<App />);
  const value = "testtest";
  const e = { target: { value } };
  wrapper.instance().handleTitleChange(e);
  expect(wrapper.state().item).toBe(value);
  var date = new Date();
  wrapper.instance().handleChangeTime(date);
  expect(wrapper.state().startDate).toBe(date);
  const priority = "1";
  const epriority = { value: priority, label: priority };
  wrapper.instance().handleChangePriority(epriority);
  expect(wrapper.state().priority).toBe(priority);

  const event = { preventDefault: () => {} };
  wrapper.instance().handleSubmit(event);
  expect(wrapper.state().items[0].title).toBe(value);
  expect(wrapper.state().items[0].deadline).toBe(date);
  expect(wrapper.state().items[0].priority).toBe(priority);
});

it("Input  1 data and change state done = true ", () => {
  const wrapper = shallow(<App />);
  const value = "testtest";
  const e = { target: { value } };
  wrapper.instance().handleTitleChange(e);
  expect(wrapper.state().item).toBe(value);
  var date = new Date();
  wrapper.instance().handleChangeTime(date);
  expect(wrapper.state().startDate).toBe(date);
  const priority = "1";
  const epriority = { value: priority, label: priority };
  wrapper.instance().handleChangePriority(epriority);
  expect(wrapper.state().priority).toBe(priority);

  const event = { preventDefault: () => {} };
  wrapper.instance().handleSubmit(event);
  expect(wrapper.state().items[0].title).toBe(value);
  expect(wrapper.state().items[0].deadline).toBe(date);
  expect(wrapper.state().items[0].priority).toBe(priority);
  wrapper.instance().handleDone('0');
  expect(wrapper.state().items[0].done).toBe(true);

});

it("Input 2 Data and  ClearList to blank", () => {
  //Add 2 Data and Clear   List to   blank
  // create 1 TODO
  const wrapper = shallow(<App />);
  let value = "testtest";
  let e = { target: { value } };
  wrapper.instance().handleTitleChange(e);
  expect(wrapper.state().item).toBe(value);
  var date = new Date();
  wrapper.instance().handleChangeTime(date);
  expect(wrapper.state().startDate).toBe(date);
  let priority = "1";
  let epriority = { value: priority, label: priority };
  wrapper.instance().handleChangePriority(epriority);
  expect(wrapper.state().priority).toBe(priority);

  let event = { preventDefault: () => {} };
  wrapper.instance().handleSubmit(event);
  expect(wrapper.state().items[0].title).toBe(value);
  expect(wrapper.state().items[0].deadline).toBe(date);
  expect(wrapper.state().items[0].priority).toBe(priority);

  // Create 2 TODO

  value = "test2";
  e = { target: { value } };
  wrapper.instance().handleTitleChange(e);
  expect(wrapper.state().item).toBe(value);
  date = new Date();
  wrapper.instance().handleChangeTime(date);
  expect(wrapper.state().startDate).toBe(date);
  priority = "1";
  epriority = { value: priority, label: priority };
  wrapper.instance().handleChangePriority(epriority);
  expect(wrapper.state().priority).toBe(priority);

  event = { preventDefault: () => {} };
  wrapper.instance().handleSubmit(event);
  expect(wrapper.state().items[1].title).toBe(value);
  expect(wrapper.state().items[1].deadline).toBe(date);
  expect(wrapper.state().items[1].priority).toBe(priority);

  wrapper.instance().clearList();
  expect(wrapper.state().items).toStrictEqual([]);
});

it("Input 2 Data and  Delete Array first Position and data second position will be first position", () => {

  // Add 2 Data and delete first data then second data will be first  data
  //    Create 1 Todo
  const wrapper = shallow(<App />);
  let value = "testtest";
  let e = { target: { value } };
  wrapper.instance().handleTitleChange(e);
  expect(wrapper.state().item).toBe(value);
  var date = new Date();
  wrapper.instance().handleChangeTime(date);
  expect(wrapper.state().startDate).toBe(date);
  let priority = "1";
  let epriority = { value: priority, label: priority };
  wrapper.instance().handleChangePriority(epriority);
  expect(wrapper.state().priority).toBe(priority);

  let event = { preventDefault: () => {} };
  wrapper.instance().handleSubmit(event);
  expect(wrapper.state().items[0].title).toBe(value);
  expect(wrapper.state().items[0].deadline).toBe(date);
  expect(wrapper.state().items[0].priority).toBe(priority);
  const uuid1 = wrapper.state().items[0].id;

  //   create 2  TODO
  value = "test2";
  e = { target: { value } };
  wrapper.instance().handleTitleChange(e);
  expect(wrapper.state().item).toBe(value);
  date = new Date();
  wrapper.instance().handleChangeTime(date);
  expect(wrapper.state().startDate).toBe(date);
  priority = "1";
  epriority = { value: priority, label: priority };
  wrapper.instance().handleChangePriority(epriority);
  expect(wrapper.state().priority).toBe(priority);

  event = { preventDefault: () => {} };
  wrapper.instance().handleSubmit(event);
  expect(wrapper.state().items[1].title).toBe(value);
  expect(wrapper.state().items[1].deadline).toBe(date);
  expect(wrapper.state().items[1].priority).toBe(priority);
  const uuid2 = wrapper.state().items[1].id;

  //delete test1 from uuid1
  wrapper.instance().handleDelete(uuid1);

  // value   test 2  will goto position 0
  expect(wrapper.state().items[0].title).toBe(value);
});

it("Input  Data and  Edit Data", () => {

  // add data and edit data after click   edit data old data  will save in state and  can click submit to add new data
  //    Create 1 Todo
  const wrapper = shallow(<App />);
  let value = "testtest";
  let e = { target: { value } };
  wrapper.instance().handleTitleChange(e);
  expect(wrapper.state().item).toBe(value);
  var date = new Date();
  wrapper.instance().handleChangeTime(date);
  expect(wrapper.state().startDate).toBe(date);
  let priority = "1";
  let epriority = { value: priority, label: priority };
  wrapper.instance().handleChangePriority(epriority);
  expect(wrapper.state().priority).toBe(priority);

  let event = { preventDefault: () => {} };
  wrapper.instance().handleSubmit(event);
  expect(wrapper.state().items[0].title).toBe(value);
  expect(wrapper.state().items[0].deadline).toBe(date);
  expect(wrapper.state().items[0].priority).toBe(priority);
  const uuid1 = wrapper.state().items[0].id;

  //delete test1 from uuid1 and bring title to state

  wrapper.instance().handleEdit(uuid1);

  //   create 2  TODO With Old state

  wrapper.instance().handleSubmit(event);
  expect(wrapper.state().items[0].title).toBe(value);
  expect(wrapper.state().items[0].deadline).toBe(date);
  expect(wrapper.state().items[0].priority).toBe(priority);
});

it("Input 2 Data and  Sort  By Create List", () => {
  //    Create 1 Todo
  const wrapper = shallow(<App />);
  let value = "testtest";
  let e = { target: { value } };
  wrapper.instance().handleTitleChange(e);
  expect(wrapper.state().item).toBe(value);
  var date = new Date();
  wrapper.instance().handleChangeTime(date);
  expect(wrapper.state().startDate).toBe(date);
  let priority = "1";
  let epriority = { value: priority, label: priority };
  wrapper.instance().handleChangePriority(epriority);
  expect(wrapper.state().priority).toBe(priority);

  let event = { preventDefault: () => {} };
  wrapper.instance().handleSubmit(event);
  expect(wrapper.state().items[0].title).toBe(value);
  expect(wrapper.state().items[0].deadline).toBe(date);
  expect(wrapper.state().items[0].priority).toBe(priority);
  const uuid1 = wrapper.state().items[0].id;

  //   create 2  TODO
  value = "test2";
  e = { target: { value } };
  wrapper.instance().handleTitleChange(e);
  expect(wrapper.state().item).toBe(value);
  date = new Date();
  wrapper.instance().handleChangeTime(date);
  expect(wrapper.state().startDate).toBe(date);
  priority = "2";
  epriority = { value: priority, label: priority };
  wrapper.instance().handleChangePriority(epriority);
  expect(wrapper.state().priority).toBe(priority);

  event = { preventDefault: () => {} };
  wrapper.instance().handleSubmit(event);
  expect(wrapper.state().items[1].title).toBe(value);
  expect(wrapper.state().items[1].deadline).toBe(date);
  expect(wrapper.state().items[1].priority).toBe(priority);
  const uuid2 = wrapper.state().items[1].id;

  // Sort By Create date  i will   stay  not change position because create todo first then create todo 2
  wrapper.instance().sortByCreateDate();

  // value 2  will stay
  expect(wrapper.state().items[1].title).toBe(value);
  expect(wrapper.state().items[1].deadline).toBe(date);
  expect(wrapper.state().items[1].priority).toBe(priority);
});

it("Input 2 Data and  Sort  By Descending Priority", () => {
  //    Create 1 Todo
  const wrapper = shallow(<App />);
  let value = "testtest";
  let e = { target: { value } };
  wrapper.instance().handleTitleChange(e);
  expect(wrapper.state().item).toBe(value);
  var date = new Date();
  wrapper.instance().handleChangeTime(date);
  expect(wrapper.state().startDate).toBe(date);
  let priority = "1";
  let epriority = { value: priority, label: priority };
  wrapper.instance().handleChangePriority(epriority);
  expect(wrapper.state().priority).toBe(priority);

  let event = { preventDefault: () => {} };
  wrapper.instance().handleSubmit(event);
  expect(wrapper.state().items[0].title).toBe(value);
  expect(wrapper.state().items[0].deadline).toBe(date);
  expect(wrapper.state().items[0].priority).toBe(priority);
  const uuid1 = wrapper.state().items[0].id;

  //   create 2  TODO
  value = "test2";
  e = { target: { value } };
  wrapper.instance().handleTitleChange(e);
  expect(wrapper.state().item).toBe(value);
  date = new Date();
  wrapper.instance().handleChangeTime(date);
  expect(wrapper.state().startDate).toBe(date);
  priority = "2";
  epriority = { value: priority, label: priority };
  wrapper.instance().handleChangePriority(epriority);
  expect(wrapper.state().priority).toBe(priority);

  event = { preventDefault: () => {} };
  wrapper.instance().handleSubmit(event);
  expect(wrapper.state().items[1].title).toBe(value);
  expect(wrapper.state().items[1].deadline).toBe(date);
  expect(wrapper.state().items[1].priority).toBe(priority);
  const uuid2 = wrapper.state().items[1].id;

  // Sort By Descending Priority  it will  change position because todo 1 state of priority = 1   but todo 2 state of priority = 2
  wrapper.instance().sortbyPriority();

  // value   test 2  will goto position 0
  expect(wrapper.state().items[0].title).toBe(value);
  expect(wrapper.state().items[0].deadline).toBe(date);
  expect(wrapper.state().items[0].priority).toBe(priority);
});

it("Input 2 Data and  Sort  By Ascending Deadline", () => {
  //    Create 1 Todo
  const wrapper = shallow(<App />);
  let value = "testtest";
  let e = { target: { value } };
  wrapper.instance().handleTitleChange(e);
  expect(wrapper.state().item).toBe(value);
  var date = new Date();
  var date2 = new Date();

  wrapper.instance().handleChangeTime(date2);
  expect(wrapper.state().startDate).toBe(date2);
  let priority = "1";
  let epriority = { value: priority, label: priority };
  wrapper.instance().handleChangePriority(epriority);
  expect(wrapper.state().priority).toBe(priority);

  let event = { preventDefault: () => {} };
  wrapper.instance().handleSubmit(event);
  expect(wrapper.state().items[0].title).toBe(value);
  expect(wrapper.state().items[0].deadline).toBe(date2);
  expect(wrapper.state().items[0].priority).toBe(priority);
  const uuid1 = wrapper.state().items[0].id;

  //   create 2  TODO
  value = "test2";
  e = { target: { value } };
  wrapper.instance().handleTitleChange(e);
  expect(wrapper.state().item).toBe(value);

  wrapper.instance().handleChangeTime(date);
  expect(wrapper.state().startDate).toBe(date);
  priority = "1";
  epriority = { value: priority, label: priority };
  wrapper.instance().handleChangePriority(epriority);
  expect(wrapper.state().priority).toBe(priority);

  event = { preventDefault: () => {} };
  wrapper.instance().handleSubmit(event);
  expect(wrapper.state().items[1].title).toBe(value);
  expect(wrapper.state().items[1].deadline).toBe(date);
  expect(wrapper.state().items[1].priority).toBe(priority);
  const uuid2 = wrapper.state().items[1].id;

  // Sort By Ascending Deadline  it will  stay
  wrapper.instance().sortbyPriority();

  // value   test 2  will stay because it deadline of date and date2  is same time
  expect(wrapper.state().items[1].title).toBe(value);
  expect(wrapper.state().items[1].deadline).toBe(date);
  expect(wrapper.state().items[1].priority).toBe(priority);
});
