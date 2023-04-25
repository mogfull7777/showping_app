import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const Router = createBrowserRouter([
    {
        path : "/",
        element : <Main />
    },
    {
        path : "/login",
        element : <Login />
    },
    {
        path : "/signup",
        element : <SignUp />
    }
])

export default Router;