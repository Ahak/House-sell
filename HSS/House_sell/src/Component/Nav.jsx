import { Link } from "react-router-dom";
function Nav(){
    return(
        <>
            <div className="nav">
                <div className="head">
                    <h1>House Selling System</h1>
                </div>
                <div className="navbar">
                   <Link to="/user_home">Home</Link>
                   <Link to="/house">House</Link>
                    <Link to="/profile">Order</Link>
                </div>
            </div>
        </>
    );
}
export default Nav;