import TypeWriter from "./components/TypeWriter"


export default function Home() {
    const greetings = [
        'Hello',
        'Bonjour',
        'Hola',
        'Ciao',
        'नमस्ते',
    ]

    const homeStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        wordSpacing: '8px',
        fontFamily: 'Comfortaa',
        padding: '0px 12vw 0px 12vw',
    }

    return(
        <div className="page" style={homeStyle}>

            <div style={{display: 'block'}}>
                <TypeWriter
                    wordList={greetings}
                    textClass='greetings-typewriter-text'
                    cursorClass='greetings-typewriter-cursor'
                />
            </div>

            <h1 align='center' style={{fontSize: 'clamp(0.8rem, 8vw, 4rem)'}}>
                I'm &nbsp;
                <span className="text-highlight">Shakir</span>
            </h1>

            <h1 align='center' style={{fontSize: 'clamp(0.8rem, 8vw, 3rem)'}}>
                I'm <span className="text-highlight">Passionate</span> About Technology, Programming And CyberSecurity
            </h1>

            <h1 align='center' style={{fontSize: 'clamp(0.8rem, 6vw, 2rem)'}}>
                I'm an <span className="text-highlight">avid learner</span> and I like to boast about my learning capabilities, aptitude & my awesome music taste
            </h1>
        </div>
    )
}