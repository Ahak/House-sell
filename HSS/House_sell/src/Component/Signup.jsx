import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function SignUp(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fname: "",
        mname: "",
        lname: "",
        username: "",
        email: "",
        adress: "",
        nida: "",
        phone: "",
        user: "buyer",
        password: "",
        cpassword: ""
    });
    const {fname, mname, lname, username, email, adress, nida, phone, user, password, cpassword} = formData;
    const [error, setError] = useState("");
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (nida.length !== 20) {
            setError("NIDA number must be exactly 16 characters long");
        } else {
            setError("");
            localStorage.setItem("signupnida", nida);
            
        }

        if (password === cpassword) { 
            console.log("Form submitted:", formData);
            localStorage.setItem("signupUsername", username);
            localStorage.setItem("signupPassword", password);
            navigate("/login");
        } else {
            setError("Passwords do not match");
        } 
    };

    return(
        <>
        <div className="signup">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="fname">Fist name</label><br />
            <input type="text" name="fname" id="fname" value={fname} onChange={handleChange} required/><br />
            <label htmlFor="mname">Midle name</label><br />
            <input type="text" name="mname" id="mname" value={mname} onChange={handleChange} required /><br />
            <label htmlFor="lname">Last name</label><br />
            <input type="text" name="lname" id="lname" value={lname} onChange={handleChange} required /><br />
            <label htmlFor="username">User name</label><br />
            <input type="text" name="username" id="username" value={username} onChange={handleChange} required/><br />
            <label htmlFor="email">Email</label><br />
            <input type="email" name="email" id="email" value={email} onChange={handleChange} required/><br />
            <label htmlFor="adress">Adress</label><br />
            <input type="text" name="adress" id="adress" value={adress} onChange={handleChange} required/><br />
            <label htmlFor="nida">Nida number</label><br />
            <input type="text" name="nida" id="nida" value={nida} onChange={handleChange} required/><br />
            <label htmlFor="phone">Phone number</label><br />
            <input type="tel" name="phone" id="phone" value={phone} onChange={handleChange} required/><br />
            <label htmlFor="user">Choose your role</label><br />
            <select name="user" id="user" value={user} onChange={handleChange} required>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
            </select>
            <label htmlFor="password">Password</label><br />
            <input type="password" name="password" id="password" value={password} onChange={handleChange} required/><br />
            <label htmlFor="cpassword">Confirm Password</label><br />
            <input type="password" name="cpassword" id="cpassword" value={cpassword} onChange={handleChange} required/><br />
            <button type="submit">Sign Up</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <p>
                Already have account <Link to="/login">Login</Link>
            </p>
        </form>
        </div>
     
        </>
    );
}
export default SignUp;