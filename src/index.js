import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"
// import { createStore, applyMiddleware } from 'redux';
import { createStore} from 'redux';
import {Provider} from "react-redux";
import combinedReducers from "./reducers/combinedReducers";
import { BrowserRouter as Router } from "react-router-dom";
// import { composeWithDevTools } from 'redux-devtools-extension';


// create store
// make action
// make reducer
// make the dispatch

// actions
// const increment = ()=>{
//     return {
//         type: "INCREMENT"
//     }
// };

// const decrement = ()=>{
//     return {
//         type: "DECREMENT"
//     }
// };

// reducer
// function counter( state=0, action){
//     switch (action.type) {
//         case "INCREMENT":
//             return state + 1;
        
//         case "DECREMENT":
//             return state - 1;
    
//         default:
//             break;
//     }
// }

//  create store and store states there
// const store = createStore(combinedReducers, composeWithDevTools(
//     applyMiddleware(composeWithDevTools)
// ));

const store = createStore(combinedReducers);

// from store print out data...
// store.subscribe(()=> console.log(store.getState()));

// store.dispatch(increment());
// store.dispatch(decrement());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // by doing this our App and all components in it have acces to the store which has access to all the states
    <Provider store={store}>
       <Router>
        <App />
       </Router>
    </Provider>
)
