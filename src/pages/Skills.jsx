import CardNeon from "./components/CardNeon"
import Badge from "./components/Badge"
import { CardColors } from "./components/util"
import {
    designSkills,
    frontendSkills,
    backendSkills
} from "./components/util"

// Destructure array into global variables
const {NeonBlue, SalmonPink, LettuceGreen} = CardColors


// Component styles
const pageStyle = {
    flexDirection: 'column',
    justifyContent: 'center'
}
const cardsSectionStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
}
const headingStyle = {
    fontFamily: 'comfortaa',
    fontSize: 'clamp(0.8rem, 8vw, 3rem)',
}



export default function Skills() {

    const design = designSkills.map((skill) => <Badge text={skill} color={SalmonPink} />)
    const frontend = frontendSkills.map((skill) => <Badge text={skill} color={NeonBlue} />)
    const backend = backendSkills.map((skill) => <Badge text={skill} color={LettuceGreen} />)

    return(
        <div className="page" style={pageStyle}>

            <h1 align='center' style={headingStyle}> What are &nbsp;
                <span className="text-highlight">
                    My Skills?
                </span>
            </h1>

            <div style={cardsSectionStyle}>
                <CardNeon heading="UI / UX Designer" badges={design} cardColor={SalmonPink}/>
                <CardNeon heading="Front-End Development" badges={frontend} cardColor={NeonBlue}/>
                <CardNeon heading="Back-End Development" badges={backend} cardColor={LettuceGreen}/>
                {/* <CardNeon heading="UI / UX Designer" badges={designSkills} cardColor={CardColors.NeonBlue}/> */}
                {/* <CardNeon heading="Back-End Development" badges={frontendSkills} cardColor={CardColors.LettuceGreen}/> */}
            </div>

        </div>
    )
}