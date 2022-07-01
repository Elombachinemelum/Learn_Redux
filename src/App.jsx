import React from "react"
import { useSelector, useDispatch } from "react-redux"; //these hooks allow us to read anystate value and dispatch any action
import { increment, decrement } from "./actions/actions";
import About from "./About";
import Nav from "./Nav";
import Shop from "./Shop";
import "./App.css";
// to add routing to all the components..
// we have to import these three components....
import {Routes, Route} from "react-router-dom";
import SingleMovie from "./singleMovie";

export default function App(){
   
    const loginStatus = useSelector(state=> state.forLogIn);
    const count = useSelector(state=> state.forCounting);
    const dispatch = useDispatch(); //use this to actually make the reducer work and change state...

    return(
        <>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                {loginStatus && <Route path="/shop/:id" element={<SingleMovie/>}/>}
                {/* only render this route when logged in */}
                {loginStatus && <Route path="/shopping" element={<Shop/>}/>}
            </Routes>
            <h1 onClick={()=> dispatch(increment(2))}>Hello {count}</h1>
            <button onClick={()=> dispatch(decrement(5))}>Decrease count</button>
            <button onClick={()=> dispatch({type: "YES"})}>Login</button>
            <button onClick={()=> dispatch({type: "NO"})}>Logout</button>
            {
                loginStatus ? 
                <h1>Your are logged in my nigga!</h1> :
                <h1>Now you are logged out! Login to see shopping page</h1>
            }
        </>
    )
}

const Home = ()=> <h1 className="about">Home page</h1>