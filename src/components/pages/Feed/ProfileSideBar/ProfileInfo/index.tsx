import React from 'react';
import * as ReactRedux from 'react-redux';

import '../../ProfileSideBar/_profile.css';
import Typing from './Typing';
import { IUser } from '../../../../../redux/reducers/github';
import { IReducers } from '../../../../../redux/reducers/ConfigureStore';

interface IProfileInfo{
  user: IUser;
}

function ProfileInfo(props: IProfileInfo){
  const commentsState = ReactRedux.useSelector((reducers: IReducers) =>{
    return reducers.comments;
  })
  return(
    <>
      <div className="profile-image">
        {commentsState && <Typing/>}

        <div className="image-board">
          <img src={props.user.avatar_url} alt="Profile Image" title="Profile Image" />
        </div>
      </div>

      <div className="profile-name">
        <span>{props.user.login}</span>
      </div>
      <div className="profile-info">
        <div>
          <span>347</span>
          <span>Followers</span>
        </div>
        <div>
          <span>94</span>
          <span>Following</span>
        </div>
      </div> 
    </>
  );
};

export default ProfileInfo;