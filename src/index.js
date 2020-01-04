import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import PostProvider from './Context/postProvider';
import UserProvider from './Context/userProvider';

// import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './reducers/rootReducer';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import fbConfig from './FireStore/fbConfig';
// import { reduxFirestore, getFirestore } from 'redux-firestore';
// import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';

// const y = reactReduxFirebase(fbConfig);
// const x = reduxFirestore(fbConfig);

// const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  // <Provider store={store}>
  <UserProvider>
    <PostProvider>
      <App />
    </PostProvider>
  </UserProvider>,
  // </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
