/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    render,
    screen,
    waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { AppRouterContextProviderMock } from './AppRouterContextProviderMockProps';
import Home from '../page';
import ReduxProvider from '../redux/provider';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useSelector } from 'react-redux';
import { mockAppState } from './mockState';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn().mockImplementation((selector) => selector(mockAppState)),
}));


describe('Test home screen after successful login', () => {
    beforeEach(() => {
        const mockUserData = {
            user: {
                email: 'lewishamilton@gmail.com',
                password: '123456',
            },
            token: 'fakeToken',
        };

        localStorage.setItem('userData', JSON.stringify(mockUserData));

    });

    afterEach(() => {
        localStorage.clear();
        jest.clearAllMocks();
    });

    it('should render the CategoriesList, PostForm and Posts components', async() => {
        const push = jest.fn();
        render(<AppRouterContextProviderMock router={ { push } }><ReduxProvider><Home /></ReduxProvider></AppRouterContextProviderMock>);

        const logOutButton = screen.getByRole('button', { name: 'Sair' });
        expect(logOutButton).toBeInTheDocument();

        const editButton = screen.getAllByRole('button', { name: 'Edit' });
        expect(editButton).toHaveLength(2);


        // await waitFor(() => {
        //     const lewisHamiltonText = screen.getByText('Lewis Hamilton');
        //     expect(lewisHamiltonText).toBeInTheDocument();
        // });
    });
});
