
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";

function Navbar (){
    const {navActive, setNavActive} = useState(false);
    const toggleNav = () => {
        setNavActive(!navActive)
    }

     const closeMenu = () => {
        setNavActive(false)
     }

     useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu;
        }
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener ("resize", handleResize);
        };
     }, []);

     useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu;
        }
     }, [] )
     return (
        <nav className={`navBar ${navActive ? "activate" : ""}`}>
            <div>
                <img src="public\logo.svg" alt="logo"></img>
            </div>
        </nav>
    )
}

export default Navbar;