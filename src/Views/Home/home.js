import "./home.css";
import Navbar from "./../../Components/Navbar/navbar";
import Footer from "./../../Components/Footer/footer";

export default function Home()
{
    return(
        <div className="home-container">
            <Navbar/>
            <h1 className="home-head">Home</h1>

            <p className="home-head">
                This is the Home Page.
            </p>

            <Footer/>
        </div>
    );
}