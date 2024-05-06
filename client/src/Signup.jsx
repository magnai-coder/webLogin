import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios, { isAxiosError } from "axios";
function Signup() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3000/routes/register", { name, email, password })
            .then((result) => {
                console.log(result);
                navigate("/login");
            })
            .catch((err) => console.log(err));
    };
    return (
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={handleSubmit}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Register</h3>
                    <div className="form-group mt-3">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Register
                        </button>
                    </div>
                    <p className="forgot-password text-right mt-2">
                        Forgot <a href="#">password?</a>
                    </p>
                    <div
                        className="d-grid gap-2 mt-3"
                    >
                        <Link
                            to="/login"
                            className="btn btn-primary border w-100"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default Signup;
