import React from 'react';
import { IPost } from '../../../../redux/reducers/comments/helpers';

import './_post.css';

import PostAction from './PostAction';
import PostComments from './PostComments';
import PostContent from './PostContent'
import PostHeader from './PostHeader';
import PostSendCommentForm from './PostSendCommentForm';

interface IPosts{
  posts: IPost[];
}

function Post(props: IPosts){ //pra q post aceite o posts do backend

  if(props.posts.length === 0){//se nao existir nada no array, retorna null
    return null;
  }
  //NO CASO, PRECISA TRANSFORMAR O POSTS EM ALGO QUE SEJA
  //COMPREENSÍVEL PRO POSTHEADER/CONTENT/ACTION/COMMENTS
  //ENTAO, É FEITO MAP DO POSTS
  //EM SEGUIDA, PRECISA DE UMA KEY PRO REACT
  //PORÉM, NÃO PODERIAMOS PASSAR <KEY={}> DESSA FORMA
  //ENTAO É USADO O REACT.FRAGMENT, Q É ACEITO.
  //EM SEGUIDA, PODEMOS PASSAR AS INFORMAÇÕES DOS POSTS
  return (
    <div className="post">
      {props.posts.map((post) => {
        return (
          <React.Fragment key={post.id}>
            <PostHeader
              image={post.image}
              name={post.name}
              date={post.date}
            />
            <PostContent 
              content={post.content} 
              postImage={post.image}/>
            <PostAction 
              likes={post.likes}
              comments={post.comments}/>
            <PostComments 
              comments={post.comments}
            />
            <PostSendCommentForm postId={post.id}/>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Post;