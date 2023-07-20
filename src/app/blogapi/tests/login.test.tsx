import { render, screen } from '@testing-library/react';
import Login from '../login/page';
import '@testing-library/jest-dom';
import { AppRouterContextProviderMock } from './AppRouterContextProviderMockProps';


describe('Testa a aplicação', () => {
    it('Renderiza o login', () => {
        const push = jest.fn();
        render(<AppRouterContextProviderMock router={ { push } }><Login /></AppRouterContextProviderMock>);
    
        const button = screen.getByRole('button', { name: 'Login' });

        expect(button).toBeInTheDocument();
    });
}); 