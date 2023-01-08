import './assets/styles/typewriter.css'
import Typewriter from 'typewriter-effect'


export default function TypeWriter({words}) {
    return(
        <Typewriter
            options={{
                strings: words,
                loop: true,
                delay: 200,
                deleteSpeed: 200,
                autoStart: true,
                wrapperClassName: 'typewriter-text',
                cursorClassName: 'typewriter-cursor'
            }}
        />
    )
}

