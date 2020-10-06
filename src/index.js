import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {createFirestoreInstance, getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import fbConfig from './config/fbConfig'
import firebase from 'firebase/app'

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase, fbConfig) // redux bindings for firestore
  )
);

const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};


ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
  <ReactReduxFirebaseProvider {...rrfProps}>
    <App />
  </ReactReduxFirebaseProvider>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
