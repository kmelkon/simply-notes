import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'; // <- needed if using firestore
import { createStore, combineReducers, compose } from 'redux';
import {
  ReactReduxFirebaseProvider,
  firebaseReducer,
} from 'react-redux-firebase';
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore';

import App from './App';
import * as serviceWorker from './serviceWorker';
import firebaseConfig from './config/firebaseConfig';
import rootReducer from './reducer';

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
  // enableClaims: true // Get custom claims along with the profile
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Initialize other services on firebase instance
firebase.firestore(); // <- needed if using firestore
const initialState = {};
const store = createStore(rootReducer, initialState);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
