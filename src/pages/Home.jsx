import TypeWriter from "./components/TypeWriter"


export default function Home() {
    const greetings = [
        'Hello',
        'Bonjour',
        'Hola',
        'नमस्ते',
    ]

    return(
        <div className="page home-style">

            <TypeWriter
                wordList={greetings}
                textClass='greetings-typewriter-text'
                cursorClass='greetings-typewriter-cursor'
            />

            <h1 style={{fontSize: 'clamp(0.8rem, 8vw, 4rem)'}}>
                I'm <span className="text-highlight">Shakir</span>
            </h1>

            <h1 align="center" style={{fontSize: 'clamp(0.5rem, 4vw, 2rem)'}}>
                I'm <span className="text-highlight">Passionate</span> About Technology, Programming And CyberSecurity
            </h1>

            <h1 align="center" style={{fontSize: 'clamp(0.5rem, 4vw, 2rem)'}}>
                I'm an <span className="text-highlight">avid learner</span> and I like to boast about my learning capabilities, aptitude & my awesome music taste
            </h1>
        </div>
    )
}