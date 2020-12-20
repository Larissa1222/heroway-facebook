import React from 'react';
import { useHistory } from 'react-router-dom';
import * as ReactRedux from 'react-redux';

import { PATHS } from '../../../config/constants';
import { IReducers } from '../../../redux/reducers/ConfigureStore';

import Post from './Post';
import ProfileSideBar from './ProfileSideBar';
import { getPostsAction } from '../../../redux/reducers/posts';

function Feed(){
  const history = useHistory();
  const dispatch = ReactRedux.useDispatch();

  const githubState = ReactRedux.useSelector((reducers: IReducers) => {
    return reducers.github;
  });
  const postsState = ReactRedux.useSelector((reducers: IReducers) => {
    return reducers.posts;
  });

  React.useEffect(() =>{    //do github
    if(!githubState.user){
      history.push(PATHS.LOGIN);
    }
  },[githubState, history]);

  React.useEffect(() =>{    //do posts
    if (githubState.user){//pra so ir pro posts quando tiver usuario logado
      const actionResult = getPostsAction();
      dispatch(actionResult);
    }
    const actionResult = getPostsAction();
    dispatch(actionResult);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[dispatch]);

  if (!githubState.user){
    return null;
  }

  if(postsState.loading){
    return <h1>LOADING...</h1>
  }
  if(postsState.error){
    return <h1>ERROR...</h1>
  }

  return(
    <>
      <div className="feed">
        <div className="container">
          <Post posts={postsState.posts}/>
        </div>
      </div>
        <ProfileSideBar user={githubState.user}/>
    </>
  );
};

export default Feed;