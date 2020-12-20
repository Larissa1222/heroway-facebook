import React from 'react';
import { IPost } from '../../../../../redux/reducers/comments/helpers';

import '../_post.css';


//COM A INTERFACE, O POSTHEADER ACEITA AS INFORMAÇÕES
//QUE SAO ENVIADAS PRA ELE, ESSAS INFO, SAO DERIVADAS 
//DA INTERFACE IPOST, E COM AS [] PODEMOS ACESSA-LAS
interface IPostHeader{
  image: IPost['image'];
  name: IPost['name'];
  date: IPost['date'];
}

function PostHeader(props: IPostHeader){
  return(
    <div className="post-header">
      <div className="post-header-profile-image">
        <div className="post-header-image-board">
          <img src={props.image} alt={`${props.name}`} title={`${props.name}`}/>
        </div>
      </div>
      <div className="post-header-profile-name">
        <div className="profile-name">{props.name}</div>
        <div className="post-date">{props.date}</div>
      </div>
    </div>
  );
};

export default PostHeader;