import './assets/styles/navbar.css'
import logo from './assets/aliviation.svg'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


export default function Navbar() {
    const h = {color: "white", marginRight: "auto"}
    return(
        <nav>
            {/* <h1 style={h}> Hello world once again</h1> */}
            <a href="/" className='nav-logo'>
                <NavLogo height="96" width="96"/>
            </a>
            <NavItem name="Home" url="/home/" />
            <NavItem name="Skills" url="/skills/" />
            <NavItem name="Blogs" url="/blogs/" />
            <NavItem name="Contact" url="/contact/" />
        </nav>
    )
}


function NavItem({name, url}) {
    const navigateTo = useNavigate()
    const handleClick = () => {
        navigateTo(url)
    }
    return(
        <div className="nav-item" onClick={handleClick}>
            {/* <a className="nav-link" href={url}>{name}</a> */}
            <Link className="nav-link" to={url}>{name}</Link>
        </div>
    )
}


function NavLogo({height=512, width=512}) {
    return(
        <img
            src={logo}
            height={height}
            width={width}
            alt="website logo"
        />
    )
}