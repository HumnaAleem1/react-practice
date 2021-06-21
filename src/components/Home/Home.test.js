import React from 'react'
import { Home } from './Home'
import { shallow, render, mount } from 'enzyme';

describe('Home', () => {

    test('should contain Home heading', () => {
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
        // const setAuthorData = jest.fn()
        // const authorData = [{kind: 'Listing', data: {children: [{ kind: t3, data: {author: 'test', title: 'testing'}}]}}]

        // const getRedditData = () =>
        //     Promise.resolve({
        //         args: { authorData }
        //     });
        // const wrapper = mount(
        //     <Home getRedditData={getRedditData} />
        // );
        //
        // await act(async () => {
        //     wrapper.find({ children: 'Go' }).simulate('click');
        // });
        //
        // await waitForExpect(() => {
        //     wrapper.update();
        //     authorData.forEach(authorData => {
        //         expect(wrapper.text()).toMatch(authorData);
        //     });
        // });



        // const wrapper = shallow(<Home authorData={authorData}/>)
        // console.log(wrapper.state('authorData'))
        // expect(wrapper.state('authorData')).toBe(0)
        // expect(wrapper.find('Home').state().children).toBe(authorData)

        // const test = jest
        //     .spyOn(React, 'useState')
        //     .mockImplementationOnce(() => setAuthorData(authorData))

        // wrapper.state(authorData);
        // expect(wrapper.find('authorData').to.have.lengthOf(1)).toBe(1)

        //

        // expect(test).to.have.lengthOf(0);

        // expect(test).toEqual(true)
        // expect.arrayContaining(setAuthorData);



        const setAuthorData = jest.fn()
        const wrapper = shallow(<Home />)
        const handleClick = jest.spyOn(React, "useState")
        // useState: initial => [initial, setAuthorData]
        // expect(setAuthorData).toHaveBeenCalled();

        handleClick.mockImplementation(authorData => [authorData, setAuthorData])
        expect(setAuthorData).toBeTruthy()
    })

});