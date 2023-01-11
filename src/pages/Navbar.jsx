import { Link, NavLink } from 'react-router-dom'

import '../assets/styles/navbar.css'
import logo from '../assets/aliviation.svg'



export default function Navbar({ref}) {
    return(
        <nav>
            {/* Using Link here cuz NavLink adds an active class to the active element */}
            <Link to="/" className='nav-logo'>
                <NavLogo />
            </Link>

            <NavItem name="Home" url="/home/" active={true}/>
            <NavItem name="Skills" url="/skills/" />
            <NavItem name="Blogs" url="/blogs/" />
            <NavItem name="Contact" url="/contact/" />
        </nav>
    )
}


function NavItem({name, url, active=false}) {
    return(
        <NavLink to={url} className="nav-link">
            {name}
        </NavLink>
    )
}


function NavLogo() {
    return(
        <img src={logo} alt="website logo" />
    )
}