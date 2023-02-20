import '../../assets/styles/card-neon.css'


export default function CardNeon({heading, cardColor, badges}) {

    return(
        <div className="card-neon" style={{borderColor: cardColor}}>
            <h1 className='card-heading' style={{color: cardColor}} align='center'>
                {heading}
            </h1>

            <div className='skills'>
                {...badges}
            </div>
        </div>
    )
}