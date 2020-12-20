import React from 'react';
import * as ReactRedux from 'react-redux';
import { sendComment, setTypingAction } from '../../../../../redux/reducers/comments';
import { IPost } from '../../../../../redux/reducers/comments/helpers';
import { IReducers } from '../../../../../redux/reducers/ConfigureStore';

import '../_post.css';

interface IPostSendCommentForm{ //FOI PRECISO CRIAR INTERFACE POIS NO INDEX.TSX DO POST
  postId:  IPost['id']; //É PASSADO UM POST ID, POIS O SENDCOMMENT PRECISA DESSE POSTID
}

let TIMEOUT_ID = null;  //pra nao ficar rodando toda vez o settimeout

function PostSendCommentForm(props: IPostSendCommentForm){
  const dispatch = ReactRedux.useDispatch();

  const commentsState = ReactRedux.useSelector((reducers: IReducers) =>{
    return reducers.comments;
  });

  function handleChange(event){
    const value = event.currentTarget.value;  //PEGAR O VALOR DO INPUT
    //APAGADO O IF PRA FICAR SINCRONIZADO
    dispatch(setTypingAction(true, value)); //PRA MANDAR O VALOR DO INPUT PRO SET 
    

    //PRA OS TRÊS PONTOS NAO FICAREM CONSTANTES:
    clearTimeout(TIMEOUT_ID);//pra limpar o timeout
    TIMEOUT_ID = setTimeout(() =>{
      dispatch(setTypingAction(false, value));//td isso pra só executar o dispatch uma unica vez
    }, 1000);

  }
  function handleKeyDown(event){
    const value = event.currentTarget.value;
    if(event.key === 'Enter'){
      dispatch(sendComment(props.postId, value));//PASSANDO O ID NO INDEX.TSX DO POST, PRA ISSO A INTERFACE
    }
  }

  return(
    <div className="post-send-comment">
      <div className="post-send-form">
        <input 
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={commentsState.text}
          type="text" 
          placeholder="Write your comment" />
      </div>
    </div>
  );
};

export default PostSendCommentForm;