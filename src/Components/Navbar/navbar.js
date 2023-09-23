import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar()
{
    return (

        <div className="navbar">
            <h2 className="nav-brand">ReactJs</h2>
            <Link to="/About" className="nav-menu">About</Link>
            <Link to="/" className="nav-menu">Home</Link>
            <Link to="/Contact" className="nav-menu">Contact</Link>
        </div>
    )
}