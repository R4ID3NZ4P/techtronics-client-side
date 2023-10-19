import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./components/AuthProvider.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login";
import Register from "./components/Register";
import AddProduct from "./components/AddProduct";
import Cart from "./components/Cart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
		children: [
			{
				path: "/",
				element: <Home></Home>
			},
			{
				path: "/login",
				element: <Login></Login>
			},
			{
				path: "/register",
				element: <Register></Register>
			},
			{
				path: "/addproduct",
				element: <AddProduct></AddProduct>
			},
			{
				path: "/cart",
				element: <Cart></Cart>
			}
		]
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
    </React.StrictMode>
);
