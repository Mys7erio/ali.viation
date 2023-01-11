import '../../assets/styles/card-neon.css'


// Will experiment with more colors in the future, haha :)
export const CardColors = {
    NeonBlue: '#0080FF',
    SalmonPink: '#E87575',
    LettuceGreen: '#77D68C',
}


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