'use client';
import { useEffect, useState } from 'react';
import { PostType, UserType } from './interfaces';
import Select, { ActionMeta } from 'react-select';



type PostFormProps = {
    postData?: PostType;
    userData: UserType
}

type CategoryType = { label: string, value: string, __isNew__?: boolean; };


export default function PostForm({ postData, userData }: PostFormProps) {

    const [selectedCategories, setSelectedCategories] = useState<CategoryType[]>([]);
    const [categories, setCategories] = useState([
        { value: 'categoria1', label: 'Categoria 1' },
        { value: 'categoria2', label: 'Categoria 2' },
    ]);
    const [registerValues, setRegisterValues] = useState(postData || {
        title: '',
        content: '',
        user_id: userData.id,
        published: '',
        updated: '',
        users: userData,
        categories: [{ name: '' }],
    });

    function handleCategoryChange(selected: readonly CategoryType[] | null, { action, option }: ActionMeta<CategoryType>) {
        if (action === 'create-option') {
            if (option) {
                setCategories(oldCategories => [...oldCategories, option]);
            }
        }
    
        setSelectedCategories(selected ? Array.from(selected) : []);
    }



    useEffect(() => {
        setRegisterValues({
            ...registerValues,
            categories: selectedCategories.map((category) => ({ name: category.value })),
        });
    }, [selectedCategories]);
    

    const isDisable = () => {
        const title = registerValues.title.length > 0;
        const content = registerValues.content.length > 0;
        const categories = registerValues.categories.length > 0;

        const properties = [title, content, categories];
        return !properties.every(property => property);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setRegisterValues({ ...registerValues, [name]: value });
    };

    // const closeForm = () => {
    //     // setShowForm(false);
    // };

    const handleSubmit = async(e: any) => {
        e.preventDefault();
        // if (postData && postData.id) {
        //     await updateVehicle('cars', registerValues, carData.id);
        // } else {
        //     await registerVehicle('cars', registerValues);
        // }
        // setShowForm && setShowForm(false);
        // updateVehicleState('cars');
    };

    return (
        <section className="flex flex-col items-center justify-center">
            <form
                method="post"
                onSubmit={ (e) => handleSubmit(e) }
                className='flex flex-col bg-gray-200 p-4 md:w-3/5 gap-2 rounded shadow text-center'
            >
                <div className='flex flex-row items-center justify-between gap-4 w-full '>
                    <div className='flex flex-row items-center gap-4'>
                        <img
                            className='w-[50px] h-[50px]'
                            src={ userData.image ? userData.image : '' }
                            alt='profile-image'
                            width={ 50 }
                            height={ 50 }
                        />
                        <div className='flex flex-col'>
                            <h2>{ userData.display_name }</h2>
                            <p>{ userData.email }</p>
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
                <label className='' htmlFor="categories">
                    <Select
                        isMulti
                        name="categories"
                        options={ categories }
                        className="basic-multi-select"
                        classNamePrefix="select"
                        placeholder="Selecione ou digite para criar uma categoria..."
                        value={ selectedCategories }
                        onChange={ handleCategoryChange }
                        isSearchable
                        isClearable
                    />
                </label>
                <div>
                    {
                        registerValues.categories.map((selectedCategory, index) => (<div key={ index }>{ selectedCategory.name }</div>))
                    }
                </div>
                <div className="flex w-full justify-end">
                    <button 
                        type="submit"
                        className={ `${ isDisable() ? 'bg-gray-300 ' : 'bg-green-700 ' }p-3 text-white rounded` }
                        disabled={ isDisable() }
                    >
                        Publicar
                    </button>
                </div>
            </form>
        </section>
    );
}
