import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AppRouterContextProviderMock } from './AppRouterContextProviderMockProps';
import Home from '../page';
import ReduxProvider from '../redux/provider';


describe('Test login screen', () => {
    it('should render the elements on the screen correctly', async() => {
        const push = jest.fn();
        render(<AppRouterContextProviderMock router={ { push } }><ReduxProvider><Home /></ReduxProvider></AppRouterContextProviderMock>);
        const button = screen.getByRole('button', { name: 'Sair' });
        expect(button).toBeInTheDocument();
        await waitFor(() => expect(push).toHaveBeenCalledWith('blogapi/login'));
    });

    
}); 