import * as Redux from 'redux';
import * as ReduxDevTools from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

import githubReducer from '../reducers/github';
import postsReducer from '../reducers/posts';
import commentsReducer from './comments';

//resp por agrupoar todos os reducers
const reducers = {
  github: githubReducer,
  posts: postsReducer,
  comments: commentsReducer,
};
//responsável por exec automaticamente a func githubReducer
const rootReducer = Redux.combineReducers(reducers);
export type IReducers = ReturnType<typeof rootReducer>;//p n encher o saco da tipagem


function configureStore(){
  //resp por complementar o redux com func extras
  const middlewares = Redux.applyMiddleware(ReduxThunk);
  const enhancers = ReduxDevTools.composeWithDevTools(middlewares);

  //resp por disponibilizar dados para aplicação
  const store = Redux.createStore(rootReducer, enhancers);
  return store;
};
export default configureStore

