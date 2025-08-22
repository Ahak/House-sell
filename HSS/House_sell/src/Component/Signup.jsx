import { Link } from "react-router-dom";

function SignUp(){
    return(
        <>
        <div className="signup">
        <h1>Sign Up</h1>
        <form action="">
            <label htmlFor="fname">Fist name</label><br />
            <input type="text" name="fname" id="fname" /><br />
            <label htmlFor="mname">Midle name</label><br />
            <input type="text" name="mname" id="mname" /><br />
            <label htmlFor="lname">Last name</label><br />
            <input type="text" name="lname" id="lname" /><br />
            <label htmlFor="username">User name</label><br />
            <input type="text" name="username" id="username" /><br />
            <label htmlFor="email">Email</label><br />
            <input type="email" name="email" id="email" /><br />
            <label htmlFor="adress">Adress</label><br />
            <input type="text" name="adress" id="adress" /><br />
            <label htmlFor="nida">Nida number</label><br />
            <input type="text" name="nida" id="nida" /><br />
            <label htmlFor="phone">Phone number</label><br />
            <input type="tel" name="phone" id="phone" /><br />
            <label htmlFor="user">Choose your role</label><br />
            <select name="user" id="user">
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
            </select>
            <label htmlFor="password">Password</label><br />
            <input type="password" name="password" id="password" /><br />
            <label htmlFor="cpassword">Confirm Password</label><br />
            <input type="password" name="cpassword" id="cpassword" /><br />
            <button type="submit">Sign Up</button>
                    <p>
                        Already have account <Link to="/login">Login</Link>
                    </p>
        </form>
        </div>
     
        </>
    );
}
export default SignUp;