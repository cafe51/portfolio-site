import {
    useEffect,
} from 'react';
import {
    useSelector,
} from 'react-redux';
import {
    CategoryPropsType,
    CategoryType,
} from './types';
import CreatableSelect from 'react-select/creatable';
import { ActionMeta } from 'react-select';
import { ReduxState } from './types';

type SelectFormProps = {
  categoriesForm: CategoryPropsType[],
  selectedCategories: CategoryPropsType[],
  setCategoriesForm: any;
  setSelectedCategories: any;
}

export default function SelectForm({
    categoriesForm,
    setCategoriesForm,
    selectedCategories,
    setSelectedCategories,
    // setRegisterValues,
}: SelectFormProps) {
    const { categoriesFromApi } = useSelector((state: ReduxState) => state.categoriesReducer);

    useEffect(() => {
        try {
            setCategoriesForm(categoriesFromApi.map(({ name }: CategoryType) => ({ label: name, value: name })));
        } catch(error) {
            console.log('Erro na linha 35 de SelectForm', error);
        }
    }, [categoriesFromApi]);


    function handleCreateOption(option: CategoryPropsType) {
        const newCategory = { label: option.label, value: option.value };
        setCategoriesForm((prevCategories: any) => [...prevCategories, newCategory]);
        setSelectedCategories((prevCategories: any) => [...prevCategories, newCategory]);
    }

    function handleRemoveOption(removedValue: CategoryPropsType) {
        setSelectedCategories((prevCategories: any[]) => (prevCategories.filter((category: CategoryPropsType) => category.value !== removedValue.value)));
        console.log('removou');
    }

    function handleClear() {
        setSelectedCategories([]);
    }

    function handleSelectDeselectOption(selected: readonly CategoryPropsType[] | null) {
        setSelectedCategories(selected ? Array.from(selected) : []);
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
                value={ selectedCategories }
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
