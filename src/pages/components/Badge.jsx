export default function Badge({text, color}) {
    console.log(color, text)
    const badgeStyle = {
        fontSize: '1.25rem',
        fontFamily: 'Comfortaa',
        margin: '1rem',
        padding: '4px 1rem 4px 1rem',

        borderColor: color,
        borderStyle: 'solid',
        borderRadius: '4px',
        borderTopWidth: '1px',
        borderRightWidth: '3px',
        borderBottomWidth: '0.5px',
        borderLeftWidth: '0.5px',
    }
    return(
        <p style={badgeStyle}>
            {text}
        </p>
    )
}