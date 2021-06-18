import { Home } from './Home'
import { Table } from '../Table/Table'
import { shallow, render, mount } from 'enzyme';
const home = jest.mock('./Home');

describe('Home', () => {

    test('should contain this text', () => {
        const wrapper = shallow(<Home />)
        expect(wrapper.text()).toMatch('Test App')
    })

    test('should call getRedditData function', () => {
        const getRedditdata = jest.fn();
        const wrapper = shallow(<Home onClick={getRedditdata} />)
        wrapper.find('button').simulate('click');
        expect(wrapper.find('button').length).toEqual(1);
    })

    test('should render Table component(child)', () => {
        const wrapper = mount(<Home />)
        expect(wrapper.find('Home').children().length).toEqual(1);
    })

});