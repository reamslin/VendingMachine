import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Soda from "./Soda";
import Candy from "./Candy";
import Chips from "./Chips";
import Home from "./Home";

const VendingMachine = () => {
    return (
        <BrowserRouter>
            <Route exact path="/soda">
                <Soda />
            </Route>
            <Route exact path="/candy">
                <Candy />
            </Route>
            <Route exact path="/chips">
                <Chips />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
        </BrowserRouter>
    )
}

export default VendingMachine;