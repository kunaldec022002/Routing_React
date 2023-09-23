
import "./about.css";
import Navbar from "../../Components/Navbar/navbar";
import Footer from "../../Components/Footer/footer";
export default function About()
{
    return(
        <div className="footer-container">

            <Navbar/>
            <h1 className="about-head">About</h1>
            <p className="about-head">This is About Page</p>

            <Footer/>
        </div>
    )
}