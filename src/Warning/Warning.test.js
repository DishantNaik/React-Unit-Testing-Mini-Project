import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';

import Enzyme, { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Warning from './Warning';

afterEach(() => {
    cleanup();
  });


test('render warning', () => {
    render(<Warning />)
    const bt1 = screen.getByText(/update/i)
    const clickbt1 = fireEvent.click(bt1)

    expect(clickbt1).toBeTruthy()
})

// test('testing of onClose', () => {
//     render(<Warning {...this.props} />)

//     const bt1 = screen.getByText(/Close/i)
//     const clickbt1 = fireEvent.click(bt1)

//     expect(clickbt1).toBeTruthy()
// })

test('testing onUpdate', () => {

    const someProp = 'TCS'
    const wrapper = shallow(<Warning {...someProp} />)
    wrapper.instance().onUpdate()

})

// still working on this test case as its failing
// Able to cover onUpdate function but test case failing
test('testing onClose', () => {
    const foo = jest.fn();
    const {getByText} = render(<Warning onClick={foo} />);
    fireEvent.click(getByText(/Close/i));
    expect(foo).toHaveBeenCalled();

})
