import React from 'react';
import * as ReactRedux from 'react-redux';
import * as ReactRouterDOM from 'react-router-dom';


import './_login.css';
import { PATHS } from '../../../config/constants';
import { IReducers } from '../../../redux/reducers/ConfigureStore';
import { getGithubUser } from '../../../redux/reducers/github';
// import { ReactComponent as GithubLogo } from '../../img/github-logo.svg';

function Login(){
  const history = ReactRouterDOM.useHistory();
  const dispatch = ReactRedux.useDispatch();
  const [user, setUser] = React.useState("");

  //retornar os reducers
  const githubState = ReactRedux.useSelector((reducers: IReducers) => {
    return reducers.github;
  });
  React.useEffect(() =>{
    if(githubState.user){//se encontrar o user redireciona p/ feed
      history.push(PATHS.FEED);
    };
  },[githubState, history]);

  //manusear evento de change
  function handleChange(event){
    const value = event.currentTarget.value;//capturar valor do input
    setUser(value);
  }
  function handleOnEnter(event){
    if(event.key === 'Enter'){
      handleClick();
    }
  }
  function handleClick(){
    const action = getGithubUser(user);
    dispatch(action);
  }

  return (
    <div className="login">
      <div className="login-box">
        {/* <GithubLogo className="github-logo"/> */}

        <input 
          className="github-input" 
          type="text" 
          placeholder="Digite seu usuário do Github" 
          value={user}
          onChange={handleChange}
          onKeyDown={handleOnEnter}/>

        <span>{githubState.errorMessage}</span>
        
        <button className="github-button"
          onClick={handleClick}
          disabled={githubState.loading}>
          {githubState.loading ? 'Loading' : 'Enviar'}
          </button>
      </div>
    </div>
  );
}
export default Login;