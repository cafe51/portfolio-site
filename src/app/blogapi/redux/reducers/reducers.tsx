
import { combineReducers } from 'redux';
import { CategoryType, PostType, UPDATE_CATEGORIES_FROM_API, UPDATE_POSTS_FROM_API } from '../../types';

type ActionType<T> = {
  type: string;
  payload: T[];
}

const INITIAL_STATE_CATEGORIES = {
    categoriesFromApi: [],
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

const postsReducer = (state: {postsFromApi: PostType[]} = INITIAL_STATE_POSTS, action: ActionType<PostType>) => {
    switch(action.type) {
    case UPDATE_POSTS_FROM_API: {
        return { postsFromApi: action.payload };
      
    }
    default: return state;
    }
};


const rootReducer = combineReducers({ categoriesReducer, postsReducer });

export default rootReducer;