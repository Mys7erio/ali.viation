import iconGithub from '../assets/icon-github.png'
import iconLinkedin from '../assets/icon-linkedin.png'
import iconInstagram from '../assets/icon-instagram.png'
import iconStackoverflow from '../assets/icon-stackoverflow.png'

import IconLink from './components/IconLink'

export default function Contact() {
    const pageStyle = {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Comfortaa'
    }

    const socialsSectionStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: '40vh',
        width: '60vw',
        padding: '4vh',
        borderRadius: '2%',
        backgroundColor: '#171E46',
    }

    const socialLinksSection = {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'space-around'
    }

    return(
        <div className="page" style={pageStyle}>
            <h1 align="center" style={{fontSize: 'clamp(0.8rem, 8vw, 3rem)',}}>Wanna stay in the loop?</h1>
            <h1 className="text-highlight" style={{fontSize: 'clamp(0.8rem, 8vw, 3rem)',}}>Let's Connect</h1>

            <div style={socialsSectionStyle}>
                <p align='center'>Got some queries? Feel free to reach out at: </p>
                <div style={{display: 'flex', width: '100%', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
                    <p>Email: &nbsp;
                        <a className="text-highlight" style={{textDecoration: 'none'}} href="mailto:me@aliviation.online">
                            me@aliviation.online
                        </a>
                    </p>
                    <p>Telegram: &nbsp;
                        <a className="text-highlight" style={{textDecoration: 'none'}} href="https://t.me/aliviation">
                            https://t.me/aliviation
                        </a>
                    </p>
                </div>
                <div style={socialLinksSection}>
                    <IconLink icon={iconLinkedin} link="https://www.linkedin.com/in/shakirali2002" alt="LinkedIn Profile Link" />
                    <IconLink icon={iconInstagram} link="https://instagram.com/ali.viation" alt="Instagram Profile Link" />
                    <IconLink icon={iconGithub} link="https://github.com/Mys7erio" alt="Github Profile Link" />
                    <IconLink icon={iconStackoverflow} link="https://stackoverflow.com/users/15144596/shakir" alt="StackOverflow Profile Link" />
                </div>
            </div>

        </div>
    )
}
