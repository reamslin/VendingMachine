import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="Home">
            <h1>Vending Machine</h1>
            <Link to="/chips">
                Chips
            </Link>
            <Link to="/candy">
                Candy
            </Link>
            <Link to="/soda">
                Soda
            </Link>
        </div>
    )
}

export default Home;