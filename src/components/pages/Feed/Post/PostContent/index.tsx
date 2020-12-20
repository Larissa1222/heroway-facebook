import React from 'react';
// import { IPost } from '../../../../../redux/reducers/comments/helpers';

import '../_post.css';

interface IPostContent{
  content: string;
  postImage: string;
}
function PostContent(props: IPostContent){
  return(
    <>
      <div className="post-content">
        {props.content}
      </div>
      <div className="post-image">
        <div className="post-image-board">
          <img src={props.postImage} alt="Imagem do post" title="Imagem do post"/>
        </div>
      </div>
    </>
  );
};

export default PostContent;