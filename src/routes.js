import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import { Jep, Exercicios } from "./jep";

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Jep} path="/" exact />
            <Route component={Exercicios} path="/exer" />
        </BrowserRouter>
    )
}

export default Routes;