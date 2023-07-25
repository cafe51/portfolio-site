'use client';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SelectForm from './SelectForm';
import { 
    CategoryPropsType, 
    CategoryType, 
    Dispatch, 
    PostType, 
    ReduxState, 
    UserType,
} from './types';
import { 
    addNewCategoriesFromApiStateThunkAction, 
    addNewPostFromApiStateThunkAction, 
    updatePostOnDatabaseByIdThunkAction,
} from './redux/actions';

interface PostFormProps {
    postData?: PostType;
    editMode?: boolean;
    userData: {user: UserType, token: string};
    setEditMode?: (mode: boolean) => void;
}

export default function PostForm({ postData, userData, editMode, setEditMode }: PostFormProps) {
    const { user, token } = userData;
    const dispatch: Dispatch = useDispatch();

    const initialRegisterValues = {
        title: '',
        content: '',
        user_id: user.id,
        users: user,
        categories: [],
    };
    const [ categoriesForm, setCategoriesForm ] = useState<CategoryPropsType[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<CategoryPropsType[]>(postData?.categories ? Array.from(postData?.categories.map(({ name }: CategoryType) => ({ label: name, value: name }))) : []);
    const { categoriesFromApi } = useSelector((state: ReduxState) => state.categoriesReducer);
    const [registerValues, setRegisterValues] = useState<PostType>(postData || initialRegisterValues);

    const filterCategoriesFromApi = (categoriesFromApi: CategoryType[], selectedCategories: CategoryPropsType[]) => {
        return categoriesFromApi.filter((categoryFromApi) =>
            selectedCategories.some(
                (selectedCategory) => selectedCategory.value === categoryFromApi.name,
            ),
        );
    };

    const isDisable = () => {
        const title = registerValues.title.length > 0;
        const content = registerValues.content.length > 0;
        const categories = selectedCategories.length > 0;

        const properties = [title, content, categories];
        return !properties.every(property => property);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setRegisterValues({ ...registerValues, [name]: value });
    };

    useEffect(() => {
        setRegisterValues((registerValues) => ({ ...registerValues, categories: filterCategoriesFromApi(categoriesFromApi, selectedCategories) }));

    }, [categoriesFromApi, selectedCategories, dispatch]);

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (userData && token) {
                const newCategoriesCreated = await dispatch(addNewCategoriesFromApiStateThunkAction(token, selectedCategories, categoriesFromApi));

                const postData = {
                    title: registerValues.title,
                    content: registerValues.content,
                    categoryIds: newCategoriesCreated ? [...registerValues.categories, ...newCategoriesCreated].map(category => category.id) : registerValues.categories.map(category => category.id),
                };

                dispatch(addNewPostFromApiStateThunkAction(token, postData));
                setSelectedCategories([]);
                setRegisterValues(initialRegisterValues);

            }
    
        } catch(error) {
            console.log(error);
        }
    };

    const handleUpdatePost = () => {
        setEditMode ? setEditMode(false) : '';
        if(postData?.id) {
            const postUpdating = {
                title: registerValues.title,
                content: registerValues.content,
            };
            dispatch(updatePostOnDatabaseByIdThunkAction(token, postUpdating, postData?.id));
        }

    };

    const buttons = (
        <div className='flex justify-between'>
            <button
                className='self-end w-1/3 p-1 text-white bg-red-500 rounded shadow-sm hover:bg-red-700'
                onClick={ () => setEditMode ? setEditMode(false) : {} }
            >
                Cancel
            </button>
            <button
                className='self-end w-1/3 p-1 text-white bg-green-500 rounded shadow-sm hover:bg-green-700'
                onClick={ handleUpdatePost }
            >
                Confirm
            </button>
        </div>
    );

    return (
        <section className="flex flex-col gap-2 p-4 text-center bg-gray-200 border border-solid rounded shadow border-gray-950">
            { postData && buttons }
            <form
                className='flex flex-col gap-2 '
                name={ editMode ? 'edit-post' :  'new-post' }
                method="post"
                onSubmit={ (e) => handleSubmit(e) }
            >
                <div className="flex flex-col gap-2 px-4">
                    <label className='' htmlFor="title">
                        <input
                            type="text"
                            name="title"
                            placeholder="Título"
                            minLength={ 6 }
                            maxLength={ 18 }
                            onInvalid={ event => {
                                const target = event.target as HTMLInputElement;
                                target.setCustomValidity('Por favor, insira ao menos 6 caracteres.');
                            } }
                            onInput={ event => {
                                const target = event.target as HTMLInputElement;
                                target.setCustomValidity('');
                            } }
                            value={ registerValues.title }
                            onChange={ handleChange }
                            className='w-1/2 p-1 text-3xl text-center'
                        />
                    </label>
                    <label className='' htmlFor="content">
                        <textarea
                            className='w-full p-2'
                            name="content"
                            minLength={ 1 }
                            maxLength={ 300 }
                            rows={ 5 }
                            onInvalid={ event => {
                                const target = event.target as HTMLInputElement;
                                target.setCustomValidity('Por favor, escreva alguma coisa para poder postar.');
                            } }
                            onInput={ event => {
                                const target = event.target as HTMLInputElement;
                                target.setCustomValidity('');
                            } }
                            placeholder="Escreva aqui sua postagem"
                            value={ registerValues.content }
                            onChange={ handleChange }
                        />
                    </label>
                    { isDisable() ? <p className='text-sm text-red-600'>Preencha todos os campos</p> : '' }
                    
                </div>
                {
                    !editMode
                        ? 
                        (<SelectForm
                            categoriesForm={ categoriesForm }
                            selectedCategories={ selectedCategories }
                            setCategoriesForm={ setCategoriesForm }
                            setSelectedCategories={ setSelectedCategories }
                        />)
                        : 
                        (<div className='flex items-center justify-center'>
                            {
                                registerValues.categories.map((category) => (
                                    <div
                                        key={ category.id }
                                        className="px-2 py-1 mb-2 mr-2 text-sm text-white bg-blue-900 rounded"
                                    >
                                        { category.name }
                                    </div>
                                ))
                            }
                        </div>)
                }
                <div className="flex justify-end w-full">
                    { !postData && (
                        <button 
                            type="submit"
                            className={ `${ isDisable() ? 'bg-gray-300 ' : 'bg-green-700 ' }p-3 text-white rounded` }
                            disabled={ isDisable() }
                        >
                        Publicar
                        </button>
                    ) }
                </div>
            </form>
        </section>
    );
}
