import { INITIAL_STATE_POSTS, GET_POSTS_LOADING, GET_POSTS_SUCCESS, GET_POSTS_FAIL, UPDATE_POST_COMMENT, IPostsInitialState} from "../comments/helpers";

export default function postsReducer(state = INITIAL_STATE_POSTS, action: any): IPostsInitialState{
  switch (action.type){
    case GET_POSTS_LOADING:
      return {
        ...INITIAL_STATE_POSTS,
        loading: true,
      }

    case GET_POSTS_SUCCESS:
      return {
        ...INITIAL_STATE_POSTS,
        posts: action.posts,
      }

    case GET_POSTS_FAIL:
      return {
        ...INITIAL_STATE_POSTS,
        error: true,
      }
    case UPDATE_POST_COMMENT:{
      const newPosts = state.posts.map((post) =>  {
        const isEquals = post.id === action.payload.postId;
        if(isEquals){
          const newComments = post.comments.concat(action.payload.comment);
          return{
            ...post,
            comments: newComments
          }
        }
        return post;
      });

      return {
        ...state,
        posts: newPosts
      };
    }
    default:
      return state; 
  }
}

export function getPostsAction(){//vai no backend buscar dados
  return async (dispatch) =>{
    dispatch({type: GET_POSTS_LOADING});

    try{
      const url = 'https://us-central1-heroway-react-facebook.cloudfunctions.net/app/posts'
      const response = await fetch(url);
      const postsJson = await response.json();

      dispatch({type: GET_POSTS_SUCCESS, posts: postsJson.posts});
    }
    catch (e){
      console.error(e);
      dispatch({type: GET_POSTS_FAIL });
    }
  }
}

export function updatePostComment(postId: string, comment: any){
  return{     //CRIADO AQUI PRA ATUALIZAR OS COMENTARIOS DO POST
    type: UPDATE_POST_COMMENT,
    payload: {
      postId,
      comment
    }
  }
}