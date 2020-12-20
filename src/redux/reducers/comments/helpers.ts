export const SEND_COMMENT_LOADING = '@comments/SEND_COMMENT_LOADING';
export const SEND_COMMENT_SUCCESS = '@comments/SEND_COMMENT_SUCCESS';
export const SEND_COMMENT_ERROR = '@comments/SEND_COMMENT_ERROR';

export const TYPING = '@comments/TYPING';

// O @comments É O NAMESPACE, PORQUE FAZ PARTE DA PASTA posts



export interface ICommentsInitialState {
  typing: boolean;
  text: string;
  loading: boolean; 
  error: boolean;
}

export const INITIAL_STATE_COMMENTS: ICommentsInitialState = {
  typing: false,
  text: '',
  loading: false,
  error: false,
}

//PARTE DO ACTION/REDUCER DE POSTS

export const GET_POSTS_LOADING = '@posts/POSTS_LOADING';
export const GET_POSTS_SUCCESS = '@posts/POSTS_SUCCESS';
export const GET_POSTS_FAIL = '@posts/POSTS_FAIL';
// O @posts É O NAMESPACE, PORQUE FAZ PARTE DA PASTA posts

export const UPDATE_POST_COMMENT = '@posts/UPDATE_POST_COMMENT';

export interface IPost{
  id: string;
  content: string;
  image: string;
  date: string;
  name: string;
  postImage: string;
  likes: number;
  comments: Array <{
    comment: string;
    image: string;
    name: string;
  }>
}

export interface IPostsInitialState {
  loading: boolean;
  error: boolean;
  posts: IPost[];
}

export const INITIAL_STATE_POSTS: IPostsInitialState = {
  loading: false,
  error: false,
  posts: []
}