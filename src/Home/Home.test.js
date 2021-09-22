import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';

import Enzyme, { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import mockedAxios from 'axios';
import Home from './Home';
import Warning from '../Warning/Warning.js';

afterEach(() => {
    cleanup();
});

test('render Home', () => {
    const res = {
        data :{
            first_name : 'Dishant'
        }
    }
    mockedAxios.get.mockResolvedValue({data:res})

    render(<Home />);
    const bt1 = screen.getByText(/get name/i);
    fireEvent.click(bt1)

    expect(mockedAxios.get).toBeCalled()
})

test('render home click Me', () => {
    render(<Home />)
    const bt1 = screen.getByText(/click me/i)
    const clickbt1 = fireEvent.click(bt1)

    expect(clickbt1).toBe(true)
})

test('mocking reset function', () => {
    const wrap = shallow(<Home />);
    wrap.instance().reset();
})


test('mocking err part', () => {

    mockedAxios.get.mockRejectedValueOnce(new Error('not available'))

    render(<Home />);
    const bt1 = screen.getByText(/get name/i);
    fireEvent.click(bt1)

    expect(mockedAxios.get).toBeCalled()
})