import { Link } from "react-router-dom";
import "./login.css";

function Login() {
    return (

        <> 
        <div className="login_header">
            
            <div className="login">
                <h1>Welcome</h1>
                <form action="">
                    <label htmlFor="username">Username</label><br />
                    <input type="text" name="username" id="username" placeholder="Username" /><br />
                    <label htmlFor="password">Password</label><br />
                    <input type="password" name="password" id="password" placeholder="Password" /><br />
                    <button type="submit">Login</button>
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