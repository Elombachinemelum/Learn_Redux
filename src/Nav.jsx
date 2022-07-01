import React from "react";
import {Link} from "react-router-dom"; //this component lets us point to a particular route


function Nav(){
    const style = {
        color: "white",
        textDecoration:"none"
    }

    return(
        <nav>
            <h3>Logo</h3>
            <ul>
                {/* the link component lets us point to a particular route */}
                <Link to="/" style={style}><li>Home</li></Link>
                <Link style={style} to="/about"><li>About</li></Link>
                <Link style={style} to="/shopping"><li>Shop</li></Link>
            </ul>
        </nav>
    )
}

export default Nav;