import React from 'react';
import ReactDOM from 'react-dom';
import { createStore} from 'redux';
//  note --> we keep all package import at top and file import at bottom
// 

import './index.css';
import App from './components/App';
import movies from './reducers';

// import reportWebVitals from './reportWebVitals';



// createStore method --->  which creates a store that holds the state-tree
//  the only way to change the data in store is call dispatch() on it.
 
// this createStore excepts an arrugument which is reducer --> in this we crete movie-reducer in Reducers file

const store=createStore(movies); // movies=reducer func
console.log('store:' , store);
// console.log("BEFORE-storeState:" , store.getState()); // before we send a action

// inside store we have dispatch function --> is used to basicaaly "send action "
// dispatch takes "Action-obj" as an arrument
// store.dispath({
//   type:'ADD_MOVIES',
//   movies:[{name:'superman'}]
// })
// console.log("After-storeState:" , store.getState()); // after we send a action


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <App store={store} /> 
  </React.StrictMode>
);

// here we pass store as props so our App takes movies from store

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

