import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import App from "./App";
import Exer from "./Exer";

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={App} path="/" exact />
            <Route component={Exer} path="/exer" />
        </BrowserRouter>
    )
}

export default Routes;