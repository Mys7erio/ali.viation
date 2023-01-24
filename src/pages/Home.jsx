import TypeWriter from "./Components/TypeWriter"


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
        fontFamily: 'Comfortaa',
        // fontSize: 'clamp(0.8rem, 1vw, 6rem)'
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
                Welcome to my portfolio: A reflection of my work and experieces
            </h1>
        </div>
    )
}