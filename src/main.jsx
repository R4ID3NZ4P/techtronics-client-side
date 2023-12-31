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
import PrivateRoute from "./components/PrivateRoute";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Update from "./components/Update";
import Error from "./components/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
		errorElement: <Error></Error>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
				loader: () => fetch("/data.json")
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
				element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
			},
			{
				path: "/cart",
				element: <PrivateRoute><Cart></Cart></PrivateRoute>
			},
			{
				path: "/brands/:brand",
				element: <Products></Products>,
				loader: ({params}) => fetch(`https://b8a10-brandshop-server-side-olive.vercel.app/brands/${params.brand}`)
			},
			{
				path: "/brands/:brand/:_id",
				element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>
			},
			{
				path: "/brands/:brand/:_id/update",
				element: <PrivateRoute><Update></Update></PrivateRoute>,
				loader: ({params}) => fetch(`https://b8a10-brandshop-server-side-olive.vercel.app/brands/${params.brand}/${params._id}`)
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
