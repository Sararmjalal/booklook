import "./Header.css"
import { useLocation } from "react-router-dom"
import logo from "../Uploads/Logo.png"
import { GetContext } from '../Database';
import { useNavigate } from "react-router-dom";

function Header() {
const currentLocation = useLocation();
const {database, logoutFunction} = GetContext()
const navigate = useNavigate()

    return(
        <div className="headerContainer">
            <div className="logoContainer">
                <a href="/">
                <img src={logo} width="130px"></img>
                </a>
            </div>
                <div className="menuContainer">
                <ul>
                <li className={currentLocation.pathname ==="/" ? "active": "liMenu"} ><a href="/">Home</a></li>
                <li className={currentLocation.pathname ==="/books" ? "active": "liMenu"} ><a href="/books">Books</a></li>
                <li className={currentLocation.pathname ==="/about" ? "active": "liMenu"} ><a href="/about">About</a></li>
                <li className={currentLocation.pathname ==="/contact" ? "active": "liMenu"} ><a href="/contact">Contact</a></li>
                    <li className="liMenuButton"> {!database.db.current_user ? <a href="/loginSignUp">Login/Sign up</a> : <span onClick={() => logoutFunction(navigate("/"))}>Logout</span>}</li>
                </ul>
                </div>
        </div>
    )
}

export default Header