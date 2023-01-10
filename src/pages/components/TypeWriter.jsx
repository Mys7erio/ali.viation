import '../../assets/styles/typewriter.css'
import Typewriter from 'typewriter-effect'


export default function TypeWriter({wordList, textClass, cursorClass}) {
    const myStyle = {
        fontSize: 24,
        fontFamily: "Comfortaa"
    }
    return(
        <Typewriter style={myStyle}
            options={{
                strings: wordList,
                loop: true,
                delay: 200,
                deleteSpeed: 200,
                pauseFor: 1000,
                autoStart: true,
                wrapperClassName: textClass,
                cursorClassName: cursorClass,
            }}
        />
    )
}

