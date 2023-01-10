import CardNeon from "./components/CardNeon"
import { CardColors } from "./components/CardNeon"

export default function Skills() {
    const badges = [
        <p>Logo</p>,
        <p>Developer</p>,
        <p>UI / UX Designer</p>,
        <p>Graphic Designer</p>,
        <p>Logo</p>,
        <p>Developer</p>,
        <p>UI / UX Designer</p>,
        <p>Graphic Designer</p>,
    ]

    const pageStyle = {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-around',
    }
    return(
        <div className="page" style={pageStyle}>
            {/* <h1>Skills</h1> */}
            <CardNeon heading="Front-End Development" cardColor={CardColors.SalmonPink} badges={badges}/>
            <CardNeon heading="UI / UX Designer" badges={badges} cardColor={CardColors.NeonBlue}/>
            <CardNeon heading="Back-End Development" badges={badges} cardColor={CardColors.LettuceGreen}/>
        </div>
    )
}