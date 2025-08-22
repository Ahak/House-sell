import { Link, useNavigate } from "react-router-dom";
import "./login.css";

import { useState } from "react";

function Login() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ username: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const signupUsername = localStorage.getItem("signupUsername");
        const signupPassword = localStorage.getItem("signupPassword");
        if (form.username !== signupUsername) {
            setError("Username does not match the one used during signup.");
        } else if (form.password !== signupPassword) {
            setError("Password is incorrect.");
        } else {
            setError("");
            // Proceed with login logic
            navigate("/user_home");
        }
    };

    return (
        <> 
        <div className="login_header">
            <div className="login">
                <h1>Welcome HSS</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label><br />
                    <input type="text" name="username" id="username" placeholder="Username" value={form.username} onChange={handleChange} /><br />
                    <label htmlFor="password">Password</label><br />
                    <input type="password" name="password" id="password" placeholder="Password" value={form.password} onChange={handleChange} /><br />
                    <button type="submit" >Login</button>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <p>
                        Don't have an account? <Link to="/signup">SignUp</Link>
                    </p>
                </form>
            </div>
        </div>
        
        </>
    );
}

export default Login;