export type UserType = {
  id?: number
  display_name: string
  email: string
  image?: string
};

export type CategoryType = {
  id?: number
  name: string
};

export type PostType = {
  id: number
  title: string
  content: string
  user_id: number
  published: Date
  updated: Date
  users: UserType
  categories: CategoryType[]
};
