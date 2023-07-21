import { createCategoryApi, createPostApi, getCategoriesApi, getPostsApi } from '../api';
import { CategoryPropsType, CategoryType, NewPostType, PostType, UPDATE_CATEGORIES_FROM_API, UPDATE_POSTS_FROM_API, UPDATE_SELECTED_CATEGORIES } from '../types';
import { Dispatch } from '../types';

function identifyNewCategories(newCategories: CategoryType[], oldCategories: CategoryType[]) {
    return newCategories.filter((newItem) => 
        !oldCategories.some((oldItem) => 
            oldItem.name === newItem.name,
        ),
    );
}

export const updateCategories = (categories: CategoryType[] | CategoryPropsType[], type: string) => ({
    type: type,
    payload: categories,
});

export const updatePosts = (posts: PostType[], type: string) => ({
    type: type,
    payload: posts,
});

export const updatePostsFromApiStateThunkAction = (token: string) => {
    return async(dispatch: Dispatch) => {
        const postsFromApi = await getPostsApi(token);
        dispatch(updatePosts(postsFromApi, UPDATE_POSTS_FROM_API));
    };
};

export const addNewPostFromApiStateThunkAction = (token: string, newPost: NewPostType) => {
    return async(dispatch: Dispatch) => {
        try {
            await createPostApi(token, newPost);
            const posts = await getPostsApi(token);
            dispatch(updatePosts(posts, UPDATE_POSTS_FROM_API));
        } catch (error) {
            console.log(error);

        }
    };
};

export const updateCategoriesFromApiStateThunkAction = (token: string) => {
    return async(dispatch: Dispatch) => {
        const categoriesFromApi = await getCategoriesApi(token);
        dispatch(updateCategories(categoriesFromApi, UPDATE_CATEGORIES_FROM_API));
        dispatch(updateCategories([], UPDATE_SELECTED_CATEGORIES));
    };
};

export const addNewCategoriesFromApiStateThunkAction = (token: string, selectedCategoriesRaw: CategoryPropsType[], categoriesFromApi: CategoryType[]) => {
    return async(dispatch: Dispatch) => {
        try {
  
            const selectedCategories = selectedCategoriesRaw
                .map((selectedCategoryRaw) => ({ name: selectedCategoryRaw.value }));
  
            const newCategories = identifyNewCategories(selectedCategories, categoriesFromApi);
  
            const newCategoriesCreated = await Promise.all(newCategories.map(newCategory => createCategoryApi(token, newCategory)));
  
  
            await dispatch(updateCategoriesFromApiStateThunkAction(token));
  
            return newCategoriesCreated;
  
        } catch (error) {
            console.log(error);
  
        }
    };
};
  

