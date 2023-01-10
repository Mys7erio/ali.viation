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
        fontSize: 'var(--m)'
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

            <h1 align='center'>
                Hi there, I'm &nbsp;
                <span style={{color: "var(--desiderata)"}}>Shakir</span>
            </h1>

            <h1 style={{width: '60vw'}} align='center'>
                Welcome to my portfolio: A reflection of my work and experieces
            </h1>
        </div>
    )
}