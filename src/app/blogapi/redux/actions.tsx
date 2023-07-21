import { createPostApi, getCategoriesApi, getPostsApi } from '../api';
import { CategoryType, NewPostType, PostType, UPDATE_CATEGORIES_FROM_API, UPDATE_POSTS_FROM_API, UPDATE_SELECTED_CATEGORIES } from '../types';
import { Dispatch } from '../types';

export const updateCategories = (categories: CategoryType[], type: string) => ({
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
  

