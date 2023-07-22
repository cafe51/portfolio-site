import { createCategoryApi, createPostApi, getCategoriesApi, getPostsApi, updatePostApi } from '../api';
import { CategoryPropsType, CategoryType, NewPostType, PostType, UPDATE_CATEGORIES_FROM_API, UPDATE_POSTS_FROM_API } from '../types';
import { Dispatch } from '../types';

function identifyNewCategories(newCategories: CategoryType[], oldCategories: CategoryType[]) {
    return newCategories.filter((newItem) => 
        !oldCategories.some((oldItem) => 
            oldItem.name === newItem.name,
        ),
    );
}

export const updateCategoriesState = (categories: CategoryType[] | CategoryPropsType[], type: string) => ({
    type: type,
    payload: categories,
});

export const updatePostsState = (posts: PostType[], type: string) => ({
    type: type,
    payload: posts,
});

export const updatePostsStateFromApiStateThunkAction = (token: string) => {
    return async(dispatch: Dispatch) => {
        const postsFromApi = await getPostsApi(token);
        dispatch(updatePostsState(postsFromApi, UPDATE_POSTS_FROM_API));
    };
};

export const updatePostOnDatabaseByIdThunkAction = (token: string, body: {title: string, content: string}, id: string) => {
    return async(dispatch: Dispatch) => {
        await updatePostApi(token, body, id);
        console.log('Atualizou', body);
        const postsFromApi = await getPostsApi(token);
        dispatch(updatePostsState(postsFromApi, UPDATE_POSTS_FROM_API));
    };
};

export const addNewPostFromApiStateThunkAction = (token: string, newPost: NewPostType) => {
    return async(dispatch: Dispatch) => {
        try {
            await createPostApi(token, newPost);
            const posts = await getPostsApi(token);
            dispatch(updatePostsState(posts, UPDATE_POSTS_FROM_API));
        } catch (error) {
            console.log(error);

        }
    };
};

export const updateCategoriesStateFromApiStateThunkAction = (token: string) => {
    return async(dispatch: Dispatch) => {
        const categoriesFromApi = await getCategoriesApi(token);
        dispatch(updateCategoriesState(categoriesFromApi, UPDATE_CATEGORIES_FROM_API));
    };
};

export const addNewCategoriesFromApiStateThunkAction = (token: string, selectedCategoriesRaw: CategoryPropsType[], categoriesFromApi: CategoryType[]) => {
    return async(dispatch: Dispatch) => {
        try {
  
            const selectedCategories = selectedCategoriesRaw
                .map((selectedCategoryRaw) => ({ name: selectedCategoryRaw.value }));
  
            const newCategories = identifyNewCategories(selectedCategories, categoriesFromApi);
  
            const newCategoriesCreated = await Promise.all(newCategories.map(newCategory => createCategoryApi(token, newCategory)));
  
  
            await dispatch(updateCategoriesStateFromApiStateThunkAction(token));
  
            return newCategoriesCreated;
  
        } catch (error) {
            console.log(error);
  
        }
    };
};
  

