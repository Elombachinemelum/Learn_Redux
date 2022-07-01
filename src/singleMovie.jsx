import React from "react";
import {useSelector} from "react-redux"
import {useParams} from "react-router-dom"; //for reading a particular param defined by me



function SingleMovie(){
    // with the id selected we can filter the state of movies and get the particular one to display...
    let {id} = useParams();
    const movies = useSelector(state=> state.updateMovies) //returns the movie array...
    const movie = movies.filter(movie=> movie.id === id);
    
    return(
        <div className="about card">
            <h1>{movie[0].title}</h1>
            <img src={movie[0].image} alt={movie[0].title}/>
            {/* <video controls src={movie[0].videoString}></video> */}
        </div>
    )
}

export default SingleMovie;