//================================ Trying something new ================================

import { useRef } from 'react'

const IconLink = ({icon, link, alt='None'}) => {
    const iconRef = useRef(null)
    const linkStyle = {filter: "grayscale(100%)", transition: '250ms'}
    const iconStyle = {height: '10vh',  width: '10vh', margin: '2vw'}

    // Harry Potter fans unite :)
    const lumos = () => {
        // iconRef.current.style.border = "2px solid var(--desiderata)"
        iconRef.current.style.filter = "grayscale(0%)"
        iconRef.current.style.transform = "scale(150%)"
    }
    const nox = () => {
        // iconRef.current.style.border = "none"
        iconRef.current.style.filter = "grayscale(100%)"
        iconRef.current.style.transform = "scale(100%)"
    }
    

    return(
        <a style={linkStyle} href={link} target="_blank" ref={iconRef} onMouseEnter={lumos} onMouseLeave={nox}>
            <img src={icon} alt={alt} style={iconStyle} />
        </a>
    )
}

export default IconLink
