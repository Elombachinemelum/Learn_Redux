import { combineReducers } from "redux";
import loggedIn from "./islogged";
import counter from "./counter";
import showMovies from "./showMovies";

// since we want to combine all reducers into just one thing so we can place it in the store

const combinedReducers = combineReducers({
    forLogIn : loggedIn,
    forCounting : counter,
    updateMovies :showMovies
});


export default combinedReducers;