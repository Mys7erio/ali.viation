


// Will experiment with more colors in the future, haha :)
export const CardColors = {
    NeonBlue: '#0080FF',
    SalmonPink: '#E87575',
    LettuceGreen: '#77D68C',
}


export default function CardNeon({heading, cardColor, badges}) {
    // Make NeonBlue default color

    const cardStyle = {
        display: 'flex',
        flexDirection: 'column',

        height: '512px',
        width: '378px', 

        borderStyle: 'solid',
        borderColor: cardColor,
        borderRadius: '12px',

        borderTopWidth: '1px',
        borderRightWidth: '3px',
        borderBottomWidth: '2px ',
        borderLeftWidth: '0px',

        margin: '2rem',
        padding: '1rem',
    }
    const headingStyle = {
        color: cardColor,
        marginBottom: 'auto',
    }

    const skillsStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: 'auto'
    }

    return(
        <div style={cardStyle}>
            <h1 style={headingStyle} align='center'>
                {heading}
            </h1>

            <div style={skillsStyle}>
                {...badges}
            </div>
        </div>
    )
}