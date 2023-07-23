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

        const push = jest.fn();
        render(<AppRouterContextProviderMock router={ { push } }><ReduxProvider><Home /></ReduxProvider></AppRouterContextProviderMock>);

    });

    afterEach(() => {
        localStorage.clear();
        jest.clearAllMocks();
    });

    it('should render screen elements', async() => {
        const logOutButton = screen.getByRole('button', { name: 'Sair' });
        expect(logOutButton).toBeInTheDocument();

        const newPostForm = queryByAttribute('name', document.body, 'new-post');
        expect(newPostForm).toBeInTheDocument();

        const userName = screen.getAllByRole('heading', { name: 'Lewis Hamilton' });
        expect(userName).toHaveLength(3);

        const userEmail = await screen.findAllByText('lewishamilton@gmail.com');
        expect(userEmail).toHaveLength(3);


    });

    it('should render new post form correctly', async() => {
        expect(screen.getByRole('button', { name: 'Publicar' })).toBeDisabled();

        expect(screen.getByPlaceholderText('Título')).toBeInTheDocument();

        expect(screen.getByPlaceholderText('Escreva aqui sua postagem')).toBeInTheDocument();

        expect(await screen.findByText('Preencha todos os campos')).toBeInTheDocument();

        const selectCategoriesInput = await screen.findByText('Selecione as categorias');
        expect(selectCategoriesInput).toBeInTheDocument();

        expect(await screen.findAllByText('Inovação')).toHaveLength(2);

    });


    it('should render list of posts correctly', async() => {
        const logOutButton = screen.getByRole('button', { name: 'Sair' });
        expect(logOutButton).toBeInTheDocument();

        const editButton = screen.getAllByRole('button', { name: 'Edit' });
        expect(editButton).toHaveLength(2);

        const deleteButton = screen.getAllByRole('button', { name: 'delete' });
        expect(deleteButton).toHaveLength(2);

        const userName = await screen.findAllByText('Lewis Hamilton');
        const userEmail = await screen.findAllByText('lewishamilton@gmail.com');
        const dataPost  = await screen.findAllByText('2011-08-01T19:58:00.000Z');
        const updateDataPost  = await screen.findAllByText('Atualizado pela última vez em: 2011-08-01T19:58:00.000Z');
        const inovacaoTag  = await screen.findAllByText('Inovação');
        const escolaTag  = await screen.findAllByText('Escola');
        const postTitle1  = await screen.findAllByText('Post do Ano');
        const postContent1  = await screen.findAllByText('Melhor post do ano');
        const postTitle2  = await screen.findAllByText('Vamos que vamos');
        const postContent2  = await screen.findAllByText('Foguete não tem ré');

        expect(userName).toHaveLength(3);
        expect(userEmail).toHaveLength(3);
        expect(dataPost).toHaveLength(2);
        expect(updateDataPost).toHaveLength(2);
        expect(inovacaoTag).toHaveLength(2);
        expect(escolaTag).toHaveLength(2);
        expect(postTitle1).toHaveLength(1);
        expect(postContent1).toHaveLength(1);
        expect(postTitle2).toHaveLength(1);
        expect(postContent2).toHaveLength(1);


    });
});
