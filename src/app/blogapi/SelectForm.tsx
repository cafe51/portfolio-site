import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CategoryPropsType, CategoryType, Dispatch, UPDATE_SELECTED_CATEGORIES } from './types';
import { updateCategories } from './redux/actions';
import CreatableSelect from 'react-select/creatable';
import { ActionMeta } from 'react-select';
import { ReduxState } from './types';

type SelectFormProps = {
  categories?: CategoryType[];
}


export default function SelectForm({ categories }: SelectFormProps) {
    const dispatch: Dispatch = useDispatch();
    const { categoriesFromApi } = useSelector((state: ReduxState) => state.categoriesReducer);
    const [ categoriesForm, setCategoriesForm ] = useState<CategoryPropsType[]>([]);
    const { selectedCategories } = useSelector((state: ReduxState) => state.selectedCategoriesReducer);

    useEffect(() => {
        try {
            setCategoriesForm(categoriesFromApi.map(({ name }: CategoryType) => ({ label: name, value: name })));
        } catch(error) {
            console.log('Erro na linha 26 de SelectForm', error);
        }
    }, [categoriesFromApi]);


    function handleCreateOption(option: CategoryPropsType) {
        const newCategory = { label: option.label, value: option.value };
        setCategoriesForm(prevCategories => [...prevCategories, newCategory]);
        dispatch(updateCategories([...selectedCategories, newCategory], UPDATE_SELECTED_CATEGORIES));
    }

    function handleRemoveOption(removedValue: CategoryPropsType) {
        dispatch(updateCategories(selectedCategories.filter((category: CategoryPropsType) => category.value !== removedValue.value), UPDATE_SELECTED_CATEGORIES));
    }

    function handleClear() {
        dispatch(updateCategories([], UPDATE_SELECTED_CATEGORIES));
    }

    function handleSelectDeselectOption(selected: readonly CategoryPropsType[] | null) {
        dispatch(updateCategories(selected ? Array.from(selected) : [], UPDATE_SELECTED_CATEGORIES));
    }

    function handleCategoryChange(selected: readonly CategoryPropsType[] | null, { action, option, removedValue }: ActionMeta<CategoryPropsType>) {
        switch (action) {
        case 'create-option':
            handleCreateOption(option);
            break;
        case 'remove-value':
            handleRemoveOption(removedValue);
            break;
        case 'clear':
            handleClear();
            break;
        case 'select-option':
        case 'deselect-option':
            handleSelectDeselectOption(selected);
            break;
        default:
            return;
        }
    }

    return (
        <label className='' htmlFor="categories">
            <CreatableSelect
                isMulti
                name="categories"
                options={ categoriesForm }
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder="Selecione as categorias"
                value={ categories ? categories.map(({ name }: CategoryType) => ({ label: name, value: name })) : selectedCategories }
                onChange={ handleCategoryChange }
                isSearchable
                isClearable
                onInputChange={ () => {'';} }
                onMenuClose={ () => {'';} }
                onMenuOpen={ () => {'';}
                }/>
        </label>
    );
}
