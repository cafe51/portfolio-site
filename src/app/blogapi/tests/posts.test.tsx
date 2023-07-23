/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    fireEvent,
    render,
    screen,
    waitFor,
} from '@testing-library/react';
import selectEvent from 'react-select-event';
import '@testing-library/jest-dom';
import { AppRouterContextProviderMock } from './AppRouterContextProviderMockProps';
import Home from '../page';
import ReduxProvider from '../redux/provider';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useSelector } from 'react-redux';
import { mockAppState } from './mockState';

const queryByAttribute = (attr: string, container: Element, value: string) => 
    container.querySelector(`[${attr}='${value}']`);
    

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn().mockImplementation((selector) => selector(mockAppState)),
}));

describe('Test home screen after successful login', () => {
    beforeEach(() => {
        const mockUserData = {
            user: {
                display_name: 'Lewis Hamilton',
                email: 'lewishamilton@gmail.com',
            },
            token: 'fakeToken',
        };

        localStorage.setItem('userData', JSON.stringify(mockUserData));
    });

    afterEach(() => {
        localStorage.clear();
        jest.clearAllMocks();
    });

    it('should make a new post', async() => {
        const push = jest.fn();
        const { container } =  render(<AppRouterContextProviderMock router={ { push } }><ReduxProvider><Home /></ReduxProvider></AppRouterContextProviderMock>);

        const publishButton = screen.getByRole('button', { name: 'Publicar' });
        const titleInput = screen.getByPlaceholderText('Título');
        const postContentInput = screen.getByPlaceholderText('Escreva aqui sua postagem');
        const dropDownCategoriesList = container.querySelector('.select__dropdown-indicator') as HTMLElement;
        const selectCategoriesInput = container.querySelector('.select__input') as HTMLElement;
        const alertMessage = await screen.findByText('Preencha todos os campos');
        
        
        expect(publishButton).toBeInTheDocument();
        expect(publishButton).toBeDisabled;
        expect(publishButton).toBeEnabled;
        
        expect(titleInput).toBeInTheDocument();
        expect(postContentInput).toBeInTheDocument();
        expect(dropDownCategoriesList).toBeInTheDocument();
        expect(selectCategoriesInput).toBeInTheDocument();
        expect(alertMessage).toBeInTheDocument();
        
        fireEvent.change(titleInput, { target: { value: 'Novo Título' } });
        fireEvent.change(postContentInput, { target: { value: 'Novo conteúdo' } });
        fireEvent.change(selectCategoriesInput, { target: { value: 'Nova Categoria' } });
        fireEvent.keyDown(selectCategoriesInput, { key: 'Enter', code: 'Enter' });

        expect(alertMessage).not.toBeInTheDocument();
        expect(publishButton).toBeDisabled;
        expect(publishButton).toBeEnabled;

        fireEvent.click(publishButton);

    });
});
