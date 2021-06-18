import React from 'react'
import { Home } from './Home'
import { shallow, render, mount } from 'enzyme';

describe('Home', () => {

    test('should contain this text', () => {
        const wrapper = render(<Home />)
        expect(wrapper.text()).toMatch('Test App')
    })

    test('should call getRedditData function', () => {
        const getRedditdata = jest.fn();
        const wrapper = shallow(<Home />)
        wrapper.find('button').simulate('click')
        expect(wrapper.find('button').length).toEqual(1)
    })

    test('should render Table component(child)', () => {
        const wrapper = mount(<Home />)
        expect(wrapper.children().exists()).toEqual(true)
    })

    test('Should return count of child elements', () => {
        const wrapper = mount(<Home />)
        expect(wrapper.children().length).toEqual(1)
    })

    test('Should set state of authorData', () => {
        const setAuthorData = jest.fn()
        const wrapper = shallow(<Home />)
        const handleClick = jest.spyOn(React, "useState")
        handleClick.mockImplementation(authorData => [authorData, setAuthorData])
        expect(setAuthorData).toBeTruthy()
    })

});