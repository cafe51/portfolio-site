'use client';
import { useSelector } from 'react-redux';
import { CategoryType, ReduxState } from './types';

export default function CategoriesList() {
    const { categoriesFromApi } = useSelector((state: ReduxState) => state.categoriesReducer);

    return (
        <section className='flex gap-2 p-4 flex-wrap'>
            {
                categoriesFromApi && typeof categoriesFromApi !== 'string'
                    ? categoriesFromApi.map((category: CategoryType) => {
                        return (<p className='bg-gray-500 p-2 text-white rounded shadow-md' key={ category.id }>{ category.name }</p>);
                    })
                    : 'Loading...'
            }
        </section>
    );
}