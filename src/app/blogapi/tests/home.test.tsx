import {
    render,
    screen,
    waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { AppRouterContextProviderMock } from './AppRouterContextProviderMockProps';
import Home from '../page';
import ReduxProvider from '../redux/provider';


// describe('Test initial screen', () => {
//     it('should render the elements on the screen correctly', async() => {
//         const push = jest.fn();
//         render(<AppRouterContextProviderMock router={ { push } }><ReduxProvider><Home /></ReduxProvider></AppRouterContextProviderMock>);
//         const button = screen.getByRole('button', { name: 'Sair' });
//         expect(button).toBeInTheDocument();
//         await waitFor(() => expect(push).toHaveBeenCalledWith('blogapi/login'));
//     });

//     it('should render the elements on the screen correctly', async() => {

//         // const originalLocalStorage = Storage.prototype.getItem;
//         Storage.prototype.getItem = jest.fn(() => JSON.stringify({
//             userData: {
//                 user: {
//                     email: 'lewishamilton@gmail.com',
//                     password: '123456',
//                 },
//                 token: 'fakeToken',
//             },
//         }));

//         const push = jest.fn();
//         render(<AppRouterContextProviderMock router={ { push } }><ReduxProvider><Home /></ReduxProvider></AppRouterContextProviderMock>);

//         const logOutButton = screen.getByRole('button', { name: 'Sair' });
//         expect(logOutButton).toBeInTheDocument();

//         await waitFor(
//             () => {
//                 expect(screen.queryAllByText('Loading...')).toHaveLength(0);
//                 // expect(screen.queryAllByText('Loading...')).toBeInTheDocument();
//             },
//             { timeout: 3000 },
//         );

//         expect(screen.queryAllByText('Loading...')).toBeInTheDocument();
        
//         // Aqui você precisa substituir 'Nome da categoria', 'Nome do formulário' e 'Nome do post' 
//         // pelos textos ou elementos que indicam que o componente foi renderizado corretamente.


//         // expect(await screen.findByText('Nome da categoria')).toBeInTheDocument();
//         // expect(await screen.findByText('Nome do formulário')).toBeInTheDocument();
//         // expect(await screen.findByText('Nome do post')).toBeInTheDocument();

//         // Ou você pode verificar se um componente específico foi renderizado
//         // através de sua classe CSS ou algum outro identificador único.
//         // expect(await screen.findByTestId('componente-id')).toBeInTheDocument();
//     });

// }); 

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

        await waitFor(() => expect(screen.findByText('Lewis Hamilton')).toBeInTheDocument());

        expect(screen.findByText('Loading...')).toBeInTheDocument();
    });
});
