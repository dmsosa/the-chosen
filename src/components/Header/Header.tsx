import MarqueeBtn from "../Widgets/MarqueeBtn";
import Navbar from "./Navbar";
import ProgressBar from "./ProgressBar";

function Header() {
    return (
            <div className="nav-wrapper">
                <Navbar />
                <ProgressBar />
            </div>        
    )
}

export default Header;