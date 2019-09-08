
import React from 'react'
import { mount,shallow } from 'enzyme'


import TodoInput from './TodoInput'

it('Check render input  text and button in TodoInput ', () => {

    const wrapper = shallow(<TodoInput />);
    expect(wrapper.find('#form-test-input')).toHaveLength(1)
    expect(wrapper.find('#btn-test-add')).toHaveLength(1)
    expect(wrapper.find('#form-test-date')).toHaveLength(1)
    expect(wrapper.find('#form-test-textarea')).toHaveLength(1)
    expect(wrapper.find('#form-test-priority')).toHaveLength(1)

  })
