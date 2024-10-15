
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";

function Navbar (){
    const {navActive, setNavActive} = useState(false);
    const toggleNav = () => {
        setNavActive(!navActive)
    }
}