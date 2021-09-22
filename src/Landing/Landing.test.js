import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';

import Enzyme, { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Landing from './Landing';

afterEach(() => {
    cleanup();
  });

test('testing lending page', ()=> {
    render(<MemoryRouter><Landing /></MemoryRouter>);
    const btn = screen.getByText(/Go Home/i);
    const clickBtn = fireEvent.click(btn)

    expect(clickBtn).toBeTruthy();
})

test('testing of callPropsFunc', () => {
    const history = [];
    const mocfun = jest.fn();
    const wrap = shallow(<Landing.WrappedComponent history={history} sharedFunc={mocfun} />);
    wrap.instance().callPropsFunc();

    expect(mocfun).toBeCalled();
})