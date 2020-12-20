import React from 'react';
import { IUser } from '../../../../redux/reducers/github';

import ProfileInfo from './ProfileInfo';

import './_profile.css';

interface IProfileSidebar{
  user: IUser;
}

function ProfileSideBar(props: IProfileSidebar){
  return(
    <div className="profile">
      <ProfileInfo user={props.user}/>
    </div>
  );
};

export default ProfileSideBar;