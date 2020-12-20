import React from 'react';
import { IPost } from '../../../../../redux/reducers/comments/helpers';

import '../_post.css';

interface IPostComments{
  comments: IPost['comments'];
}
//NESSE CASO, O MAP É NECESSÁRIO PARA CARREGAR TODOS COMENTÁRIOS
function PostComments(props: IPostComments){
  return (
    <div className="post-comments">
      {props.comments.map ((comment) =>{
        return(
          <div key={`${comment.name}-${comment.comment}`}className="comment">
            <div className="comment-profile-image">
              <div className="comment-image-board">
                <img src={comment.image} alt={comment.name} title={comment.name} />
              </div>
            </div>
            <div className="comment-content">
              <div className="comment-profile-name">{comment.name}</div>
              <div className="comment-text">{comment.comment}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostComments;