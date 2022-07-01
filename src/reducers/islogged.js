function isLoggedIn(state = false, action){
    switch (action.type){
        case "YES":
            return true;

        case "NO":
            return false;

        default: return state
    }
}

export default isLoggedIn;