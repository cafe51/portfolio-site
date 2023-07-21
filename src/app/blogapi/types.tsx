import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export const UPDATE_CATEGORIES_FROM_API = 'UPDATE_CATEGORIES_FROM_API';
export const UPDATE_SELECTED_CATEGORIES = 'UPDATE_SELECTED_CATEGORIES';
export const UPDATE_POSTS_FROM_API = 'UPDATE_POSTS_FROM_API';

export type UserType = {
  id: number
  display_name: string
  email: string
  image?: string
};

export type CategoryType = {
  id?: number
  name: string
};

export type PostType = {
  id?: number
  title: string
  content: string
  user_id?: number
  published?: string
  updated?: string
  users?: UserType
  categories: CategoryType[]
};

export type NewPostType = {
  title: string
  content: string
  categoryIds: number[]
};


export type ReduxState = {
  categoriesReducer: {
    categoriesFromApi: CategoryType[],
  },
  selectedCategoriesReducer: {
    selectedCategories: CategoryPropsType[],
  },
  postsReducer: {
    postsFromApi: PostType[],
  }
};

export type CategoryPropsType = { label: string, value: string; };


export type Dispatch = ThunkDispatch<ReduxState, null, AnyAction>;

