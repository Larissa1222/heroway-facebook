import { IReducers } from "../ConfigureStore";
import { updatePostComment } from "../posts";
import { ICommentsInitialState, INITIAL_STATE_COMMENTS, SEND_COMMENT_ERROR, SEND_COMMENT_LOADING, SEND_COMMENT_SUCCESS, TYPING } from "./helpers";

export default function commentsReducer(state = INITIAL_STATE_COMMENTS, action): ICommentsInitialState{
  switch (action.type){
    case TYPING:
      return {
        ...INITIAL_STATE_COMMENTS,
        typing: action.payload.typing,
        text: action.payload.text,
      }
    case SEND_COMMENT_LOADING:
      return {
        ...INITIAL_STATE_COMMENTS,
        loading: true,
      }
    case SEND_COMMENT_SUCCESS:
      return {
        ...INITIAL_STATE_COMMENTS,
    
      }
    case SEND_COMMENT_ERROR:
      return {
        ...INITIAL_STATE_COMMENTS,
        error: true,
      }
    default:
      return state; 
  }
}

export function sendComment(postId: string, comment: string){
  return async (dispatch, getState) =>{ //O REDUX THUNK TAMBÉM PODE PASSAR O GETSTATE, O IREDUCERS PRA PODER COMPLETAR
    const state: IReducers = getState();  //PRA MANDAR MAIS INFORMAÇÕES DO USUÁRIO
    const user = state.github.user;

    dispatch({type: SEND_COMMENT_LOADING});

    try{
      const commentBody = {  //MUDAR DE JSON P STRING
        login: user.login,            //DADOS NECESSÁRIOS PARA POSTAR
        name: user.login,             //PRA APARECER O NOME DA PESSOA

        avatar_url: user.avatar_url,  //ASSIM É POSSIVEL TER OS DADOS DO USUÁRIO
        image: user.avatar_url, //PRA APARECER A FOTO DA PESSOA
        comment: comment
      }
      const url = `https://us-central1-heroway-react-facebook.cloudfunctions.net/app/posts/${postId}/comment`
      
      const options = {   //POR ESTAR POSTANDO OS COMENTARIOS, E NÃO RECEBENDO,
        method: 'POST',   //PRECISA MUDAR O METODO DE GET PARA POST,
        headers: {        
          'Accept': 'application/json', //AVISAR PRO BACK Q ACEITA Q RETORNE DADOS EM JSON
          'Content-type': 'application/json'  //MANDANDO OS DADOS EM  FORMATO JSON
        },
        body: JSON.stringify(commentBody),
      }
      const response = await fetch(url, options);
      const json = await response.json();

      dispatch({type: SEND_COMMENT_SUCCESS, json: json});
      dispatch(updatePostComment(postId, comment)); //UM REDUCER PODE ALTERAR OUTRO, NESSE CASO
        //A FUNÇÃO POST DO REDUCER POST ATUALIZA O COMENTÁRIO ENVIADO AUTOMATICAMENTE, SEM PRECISAR RECARREGAR A PAG
    }catch(e){
      console.error(e);
      dispatch({type: SEND_COMMENT_ERROR});
    }
  }
}

export function setTypingAction(typing: boolean, text: string){
  return{
    type: TYPING,
    payload: {
      typing,
      text
    }
  }
}
