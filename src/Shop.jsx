import React from "react";
import { useEffect } from "react";
import { updateMovies } from "./actions/actions";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";


export default function Shop(){
    const movies = useSelector(state=> state.updateMovies) //get what the state is for the movies array
    const dispatch = useDispatch();

    function fortNiteApi(){
        fetch("https://fortnite-api.com/v2/news/br")
        .then(response=> response.json())
        .then(result=> {
          const movieCollection = result.data.motds;
          movieCollection.forEach(collection=> console.log(collection.title))

        //   we set the movies state to array movieCollection...
          dispatch(updateMovies(movieCollection))
          movies.forEach(collection=> console.log(collection.title))
        });
    }
    
    useEffect(fortNiteApi, []);

    const style = {
        color: "black",
        textDecoration:"none",
        cursor: "pointer"
    }

    return(
        <>
            <h1 className="about">Shopping page</h1>
            {movies.map(movie=> <Link key={movie.id} style={style} to={`/shop/${movie.id}`}><p style={{fontSize: "bold"}} className="about" >{movie.title}</p></Link>)}
        </>
    )
}