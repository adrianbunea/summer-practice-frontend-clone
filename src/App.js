import { Layout } from "./components/layout";
import { All } from "./pages/all";
import { ThemeStylesheetSwitch } from "./theme-context";
import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {Details} from "./pages/details";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/freaks",
            element: <All/>
        },
        {
            path: "freaks/:freakId",
            element: <Details/>
        }
    ]);

    return (
        <Layout>
            <ThemeStylesheetSwitch/>
            <RouterProvider router={router} />
        </Layout>
    );
}

export default App;
