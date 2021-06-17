import { Home } from './Home'
import { shallow } from 'enzyme';

test('should contain this text', () => {

    const wrapper = shallow(
        <Home />
    )

    expect(wrapper.text()).toMatch('Test App')
})
