import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from '../login/page';
import '@testing-library/jest-dom';
import { AppRouterContextProviderMock } from './AppRouterContextProviderMockProps';


describe('Test login screen', () => {
    it('should render the elements on the screen correctly', () => {
        const push = jest.fn();
        render(<AppRouterContextProviderMock router={ { push } }><Login /></AppRouterContextProviderMock>);
    
        const button = screen.getByRole('button', { name: 'Login' });
        const emailInput = screen.getByPlaceholderText('insira seu email');
        const passwordInput = screen.getByPlaceholderText('insira sua senha');


        expect(button).toBeInTheDocument();
        expect(button).toBeDisabled();
        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(emailInput).toHaveValue('');
        expect(passwordInput).toHaveValue('');
    });

    it('should render the alert message after attempt to submit incorrect inputs', async() => {
        const push = jest.fn();
        render(<AppRouterContextProviderMock router={ { push } }><Login /></AppRouterContextProviderMock>);

        const button = screen.getByRole('button', { name: 'Login' });
        const emailInput = screen.getByPlaceholderText('insira seu email');
        const passwordInput = screen.getByPlaceholderText('insira sua senha');

        fireEvent.change(emailInput, { target: { value: 'invalidemail@hotmail.com' } });
        expect(button).toBeDisabled();
        fireEvent.change(passwordInput, { target: { value: 'invalidPassword' } });
        expect(button).toBeEnabled();
        fireEvent.submit(button);
        expect(await screen.findByText('Usuário ou senha inválidos')).toBeInTheDocument();
    });

    it('should redirect to /blogapi after successful login', async() => {
        const push = jest.fn();
        render(<AppRouterContextProviderMock router={ { push } }><Login /></AppRouterContextProviderMock>);
        
        const button = screen.getByRole('button', { name: 'Login' });
        const emailInput = screen.getByPlaceholderText('insira seu email');
        const passwordInput = screen.getByPlaceholderText('insira sua senha');
        
        fireEvent.change(emailInput, { target: { value: 'lewishamilton@gmail.com' } });
        fireEvent.change(passwordInput, { target: { value: '123456' } });
        fireEvent.click(button);
    
        // Aguarde um tempo até que o redirecionamento aconteça
        await waitFor(() => expect(push).toHaveBeenCalledWith('/blogapi'));
    });
    
}); 