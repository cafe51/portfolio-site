'use client';
import {
    useEffect,
    useState,
} from 'react';

import SelectForm from './SelectForm';
import { CategoryPropsType, CategoryType, Dispatch, PostType, ReduxState, UserType } from './types';
import { useDispatch, useSelector } from 'react-redux';
import { addNewCategoriesFromApiStateThunkAction, addNewPostFromApiStateThunkAction, updatePostOnDatabaseByIdThunkAction } from './redux/actions';

type PostFormProps = {
    postData?: PostType;
    editMode?: boolean;
    userData: {user: UserType, token: string};
    setEditMode?: (mode: boolean) => void;
}

export default function PostForm({ postData, userData, editMode, setEditMode }: PostFormProps) {
    const { user, token } = userData;
    const REGISTER_VALUES_INITIAL_STATE = {
        title: '',
        content: '',
        user_id: user.id,
        users: user,
        categories: [],
    };
    const dispatch: Dispatch = useDispatch();
    const [ categoriesForm, setCategoriesForm ] = useState<CategoryPropsType[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<CategoryPropsType[]>(postData?.categories ? Array.from(postData?.categories.map(({ name }: CategoryType) => ({ label: name, value: name }))) : []);
    const { categoriesFromApi } = useSelector((state: ReduxState) => state.categoriesReducer);
    const [registerValues, setRegisterValues] = useState<PostType>(postData || REGISTER_VALUES_INITIAL_STATE);

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

    const handleSubmit = async(e: any) => {
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
                setRegisterValues(REGISTER_VALUES_INITIAL_STATE);

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
                className='p-1 rounded shadow-sm bg-red-500 hover:bg-red-700 text-white self-end w-1/3'
                onClick={ () => setEditMode ? setEditMode(false) : {} }
            >
                Cancel
            </button>
            <button
                className='p-1 rounded shadow-sm bg-green-500 hover:bg-green-700 text-white self-end w-1/3'
                onClick={ handleUpdatePost }
            >
                Confirm
            </button>
        </div>
    );

    return (
        <section className="flex flex-col gap-2 bg-gray-200 p-4 rounded shadow text-center justify-center border-solid border border-gray-950">
            { postData && buttons }
            <form
                name={ editMode ? 'edit-post' :  'new-post' }
                method="post"
                onSubmit={ (e) => handleSubmit(e) }
                className='flex flex-col gap-2 '
            >
                <div className='flex flex-row items-center justify-between gap-4 w-full '>
                    <div className='flex flex-row items-center gap-4'>
                        <img
                            className='w-[50px] h-[50px]'
                            src={ user.image ? user.image : '' }
                            alt='profile-image'
                            width={ 50 }
                            height={ 50 }
                        />
                        <div className='flex flex-col'>
                            <h2>{ user.display_name ? user.display_name : 'sem nome' }</h2>
                            <p>{ user.email }</p>
                        </div>
                    </div>
                </div>
               
                <div className="px-4 flex flex-col gap-2">
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
                            className='w-1/2 text-center p-1 text-3xl'
                        />
                    </label>
                    <label className='' htmlFor="content">
                        <textarea

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
                            className='w-full p-2'
                        />
                    </label>
                    { isDisable() ? <p className='text-red-600 text-sm'>Preencha todos os campos</p> : '' }
                    
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
                                        className="bg-blue-900 text-white text-sm py-1 px-2 mr-2 mb-2 rounded"
                                    >
                                        { category.name }
                                    </div>
                                ))
                            }
                        </div>)
                }
                <div className="flex w-full justify-end">
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
