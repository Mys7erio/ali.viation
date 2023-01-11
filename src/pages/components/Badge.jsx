import '../../assets/styles/badge.css'

export default function Badge({text, color}) {

    return(
        <p className='badge' style={{borderColor: color}}>
            {text}
        </p>
    )
}