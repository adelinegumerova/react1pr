import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import HomePage from "../pages/HomePage";
import React from "react";
import SinglePage from "../pages/SinglePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/article/:id",
                element: <SinglePage />
            },
        ]
    }
])

export default router;