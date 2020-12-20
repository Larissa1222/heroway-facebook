const GET_GITHUB_USER_LOADING = '@github/GET_GITHUB_USER_LOADING';
const GET_GITHUB_USER_SUCESS = '@github/GET_GITHUB_USER_SUCESS';
const GET_GITHUB_USER_FAIL = '@github/GET_GITHUB_USER_FAIL';

interface IGithubInitialState {
  loading: boolean,
  error: boolean,
  errorMessage: string,
  user: IUser,
}

export interface IUser{
  login: string,
  avatar_url: string,
}

const GITHUB_INITIAL_STATE: IGithubInitialState  = {
  loading: false,
  error: false,
  errorMessage: null,
  user: null,
}

export default function githubReducer(state = GITHUB_INITIAL_STATE, action: any): IGithubInitialState{
  switch(action.type){
    case GET_GITHUB_USER_LOADING:
      return{
        ...GITHUB_INITIAL_STATE,//pq ai n precisa alterar tudo sempre
        loading: true,
      };

    case GET_GITHUB_USER_SUCESS:
      return{
        ...GITHUB_INITIAL_STATE,
        user: action.payload.user,
        errorMessage: action.payload.errorMessage,
      };

    case GET_GITHUB_USER_FAIL:
      return{
        ...GITHUB_INITIAL_STATE,
        error: true,
      };

    default:
      return state;
  }
};

export function getGithubUser(query: string){
  return async (dispatch) => {
    dispatch(getGithubUserLoading());

    try {
      const response = await fetch(`https://api.github.com/search/users?q=${query}`);
      const json = await response.json();

      const user = json.items[0];
      
      console.log(user);
  
      dispatch(getGithubUserSucess(user));
    } catch (e) {
        console.error(e);
        dispatch(getGithubUserFail());
    }
  }
}  

function getGithubUserLoading(){
  return{
    type: GET_GITHUB_USER_LOADING,
  }
}
function getGithubUserSucess(user){
  return{
    type: GET_GITHUB_USER_SUCESS, 
    payload: {
      user: user,
      errorMessage: !user ?'Usuário não encontrado': null
    }
  }
}
function getGithubUserFail(){
  return{
    type: GET_GITHUB_USER_FAIL,
  }
}