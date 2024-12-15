import { ReactNode } from "react";
import { FaCodepen, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

const iconList : { [ key:string ]: ReactNode } = {
    "github": <FaGithub style={{transition: "all 0.2s"}} color="inherit"/>,
    "linkedin": <FaLinkedin style={{transition: "all 0.2s"}} color="inherit"/>,
    "instagram": <FaInstagram style={{transition: "all 0.2s"}} color="inherit"/>,
    "fiverr": <SiFiverr style={{transition: "all 0.2s"}} color="inherit"/>,
    "codepen": <FaCodepen style={{transition: "all 0.2s"}} color="inherit"/>,
    "youtube": <FaYoutube style={{transition: "all 0.2s"}} color="inherit"/>
}
function IconListe({ icons } : { icons: string[] }) {
    return (

        <ul className="icon-ul">
            { icons.map((icon) => (
                <li key={icon} className="icon-li">
                    <a className="icon-li-link" href="https://github.com/dmsosa">
                        {iconList[icon]}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default IconListe;