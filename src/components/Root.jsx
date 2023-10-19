import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";


const Root = () => {

    const [theme, setTheme] = useState("light");

    return (
        <div data-theme={theme}>
            <Header theme={theme} setTheme={setTheme}></Header>
            <ToastContainer />
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;