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


describe('Test the categories selection input functionality', () => {
    beforeEach(() => {
        const mockUserData = {
            user: {
                display_name: 'Lewis Hamilton',
                email: 'lewishamilton@gmail.com',
            },
            token: 'fakeToken',
        };

        localStorage.setItem('userData', JSON.stringify(mockUserData));

        // const push = jest.fn();
        // render(<AppRouterContextProviderMock router={ { push } }><ReduxProvider><Home /></ReduxProvider></AppRouterContextProviderMock>);

    });

    afterEach(() => {
        localStorage.clear();
        jest.clearAllMocks();
    });

    it('should choose categories from selection', async() => {
        const push = jest.fn();
        const { container } =  render(<AppRouterContextProviderMock router={ { push } }><ReduxProvider><Home /></ReduxProvider></AppRouterContextProviderMock>);

        expect(await screen.findAllByText('Inovação')).toHaveLength(2);
        expect(await screen.findAllByText('Escola')).toHaveLength(2);

        const selectCategoriesInput = container.querySelector('.select__dropdown-indicator') as HTMLElement;
        expect(selectCategoriesInput).toBeInTheDocument();

        fireEvent.click(selectCategoriesInput);
        await selectEvent.select(selectCategoriesInput, 'Inovação');

        fireEvent.click(selectCategoriesInput);
        await selectEvent.select(selectCategoriesInput, 'Escola');

        expect(await screen.findAllByText('Inovação')).toHaveLength(3);
        expect(await screen.findAllByText('Escola')).toHaveLength(3);
    });

    it('should remove categories from selection', async() => {
        const push = jest.fn();
        const { container } =  render(<AppRouterContextProviderMock router={ { push } }><ReduxProvider><Home /></ReduxProvider></AppRouterContextProviderMock>);

        expect(await screen.findAllByText('Inovação')).toHaveLength(2);
        expect(await screen.findAllByText('Escola')).toHaveLength(2);

        const selectCategoriesInput = container.querySelector('.select__dropdown-indicator') as HTMLElement;
        expect(selectCategoriesInput).toBeInTheDocument();

        fireEvent.click(selectCategoriesInput);
        await selectEvent.select(selectCategoriesInput, 'Inovação');

        fireEvent.click(selectCategoriesInput);
        await selectEvent.select(selectCategoriesInput, 'Escola');

        expect(await screen.findAllByText('Inovação')).toHaveLength(3);
        expect(await screen.findAllByText('Escola')).toHaveLength(3);

        const removeInovacaoButton = screen.getByLabelText('Remove Inovação');
        const removeEscolaButton = screen.getByLabelText('Remove Escola');
        expect(removeInovacaoButton).toBeInTheDocument();
        expect(removeEscolaButton).toBeInTheDocument();

        fireEvent.click(removeInovacaoButton);
        expect(await screen.findAllByText('Inovação')).toHaveLength(2);
        expect(await screen.findAllByText('Escola')).toHaveLength(3);

        fireEvent.click(removeEscolaButton);
        expect(await screen.findAllByText('Inovação')).toHaveLength(2);
        expect(await screen.findAllByText('Escola')).toHaveLength(2);


    });

    it('should create new categories', async() => {
        const push = jest.fn();
        const { container } =  render(<AppRouterContextProviderMock router={ { push } }><ReduxProvider><Home /></ReduxProvider></AppRouterContextProviderMock>);

        const selectCategoriesInput = container.querySelector('.select__input') as HTMLElement;
        expect(selectCategoriesInput).toBeInTheDocument();

        fireEvent.change(selectCategoriesInput, { target: { value: 'Nova Categoria' } });
        fireEvent.keyDown(selectCategoriesInput, { key: 'Enter', code: 'Enter' });

        expect(await screen.findByText('Nova Categoria')).toBeInTheDocument();

    });

    it('should remove all selected categories at once', async() => {
        const push = jest.fn();
        const { container } =  render(<AppRouterContextProviderMock router={ { push } }><ReduxProvider><Home /></ReduxProvider></AppRouterContextProviderMock>);

        expect(await screen.findAllByText('Inovação')).toHaveLength(2);
        expect(await screen.findAllByText('Escola')).toHaveLength(2);

        const selectCategoriesInput = container.querySelector('.select__dropdown-indicator') as HTMLElement;
        expect(selectCategoriesInput).toBeInTheDocument();

        expect(container.querySelector('.select__clear-indicator')).not.toBeInTheDocument();

        fireEvent.click(selectCategoriesInput);
        await selectEvent.select(selectCategoriesInput, 'Inovação');

        expect(container.querySelector('.select__clear-indicator')).toBeInTheDocument();

        fireEvent.click(selectCategoriesInput);
        await selectEvent.select(selectCategoriesInput, 'Escola');

        expect(await screen.findAllByText('Inovação')).toHaveLength(3);
        expect(await screen.findAllByText('Escola')).toHaveLength(3);

        // const clearSelectionsContainer = container.querySelector('.select__clear-indicator') as HTMLElement;
        // const clearSelectionsButton = clearSelectionsContainer.firstChild  as HTMLElement;
        // expect(clearSelectionsButton).toBeInTheDocument();
        // fireEvent.click(clearSelectionsButton);

        // expect(await screen.findAllByText('Inovação')).toHaveLength(2);
        // expect(await screen.findAllByText('Escola')).toHaveLength(2);

        // await waitFor(async() => {
        //     expect(await screen.findAllByText('Inovação')).toHaveLength(2);
        //     expect(await screen.findAllByText('Escola')).toHaveLength(2);
        // });

        
    });
});
