const navLinks: { [key:string]: string } = {
    "projekte":"",
    "uber":"",
    "kontakt":"",
};
const navItems = [ "projekte", "uber", "kontakt" ];

function NavbarContent() {
    
    return (
        <div className="nav-content" role="navigation">
            <ul className="navbar-nav">
                {navItems.map((item) => (
                    <li key={item} className="nav-item">
                        <a href={navLinks[item]} className="navbar-link text-decoration-none fw-bold px-3 py-1">{item}</a>
                    </li>
                ))}
            </ul>
        </div>        
    )
}

export default NavbarContent;