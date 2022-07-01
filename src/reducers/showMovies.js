function showMovies(state = [], action){
    switch(action.type){
        case "update":
            return action.data // the fetched data...
        default: return state
    }
}

export default showMovies;