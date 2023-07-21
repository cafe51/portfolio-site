
import { combineReducers } from 'redux';
import { CategoryPropsType, CategoryType, PostType, UPDATE_CATEGORIES_FROM_API, UPDATE_POSTS_FROM_API, UPDATE_SELECTED_CATEGORIES } from '../../types';

type ActionType<T> = {
  type: string;
  payload: T[];
}

const INITIAL_STATE_CATEGORIES = {
    categoriesFromApi: [],
};

const INITIAL_STATE_SELECTED_CATEGORIES = {
    selectedCategories: [],
};

const INITIAL_STATE_POSTS = {
    postsFromApi: [],
};

const categoriesReducer = (state: {categoriesFromApi: CategoryType[]} = INITIAL_STATE_CATEGORIES, action: ActionType<CategoryType>) => {
    switch(action.type) {
    case UPDATE_CATEGORIES_FROM_API: {
        return { categoriesFromApi: action.payload };
      
    }
    default: return state;
    }
};

const selectedCategoriesReducer = (state: { selectedCategories: CategoryPropsType[]} = INITIAL_STATE_SELECTED_CATEGORIES, action: ActionType<CategoryType>) => {
    switch(action.type) {
    case UPDATE_SELECTED_CATEGORIES: {
        return { selectedCategories: action.payload };
        
    }
    default: return state;
    }
};
  


const postsReducer = (state: {postsFromApi: PostType[]} = INITIAL_STATE_POSTS, action: ActionType<PostType>) => {
    switch(action.type) {
    case UPDATE_POSTS_FROM_API: {
        return { postsFromApi: action.payload };
      
    }
    default: return state;
    }
};


const rootReducer = combineReducers({ categoriesReducer, postsReducer, selectedCategoriesReducer });

export default rootReducer;