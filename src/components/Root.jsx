import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Root = () => {
    return (
        <div className="px-5 lg:px-32">
            <Header></Header>
            <ToastContainer />
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;