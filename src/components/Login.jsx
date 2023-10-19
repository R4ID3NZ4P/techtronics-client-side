import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const { login, googleLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(() => {
                toast("Signed in successfully");
                if(location.state) navigate(location.state)
                else navigate("/");
            })
            .catch(error => {
                if(error.code === "auth/invalid-login-credentials") toast("Invalid email or password!");
            });
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                toast("Successfully logged in!");
                if(location.state) navigate(location.state)
                else navigate("/");
            });
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                className="input input-bordered"
                                required
                            />
                            <label className="label">
                                <a
                                    href="#"
                                    className="label-text-alt link link-hover"
                                >
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-cyan-500">Login</button>
                        </div>
                        <h3 className="text-center my-2 text-sm">Or</h3>
                        <a className="btn btn-neutral" onClick={handleGoogleLogin}>Login with Google</a>
                        <p className="text-xs">Don&apos;t have an account? <Link state={location.state} to={"/register"} className="text-cyan-500">Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
