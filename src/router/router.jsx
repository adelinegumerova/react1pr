import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import HomePage from "../pages/HomePage";
import React from "react";
import SinglePage from "../pages/SinglePage";
import FormPage from "../pages/FormPage";

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
            {
                path: "/form",
                element: <FormPage />
            }
        ]
    }
])

export default router;