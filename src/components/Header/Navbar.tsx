import Logo from "./Logo";
import NavbarContent from "./NavbarContent";

function Navbar() {
    return (
        <nav className="navbar navbar-expand w-100">
            <div className="container-fluid">
                <Logo />
                <NavbarContent />
            </div>
        </nav>
        
    )
}

export default Navbar;