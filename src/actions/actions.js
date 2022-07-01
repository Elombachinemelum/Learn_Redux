// import { useSelector, useDispatch } from "react-redux";

const increment = (nr)=> ({
    type: "INCREMENT",
    payload : nr //lets an additional payload of a factor to be used or returned ...
})

const decrement = (nr)=> ({
    type: "DECREMENT",
    payload: nr
})

const updateMovies = (someData)=>{
    return {
        type: "update",
        data: someData
    }
}

export {increment, decrement, updateMovies};