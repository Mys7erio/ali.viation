import CardNeon from "./components/CardNeon"
import Badge from "./components/Badge"
import { CardColors } from "./components/util"
import {
    designSkills,
    frontendSkills,
    backendSkills,
    cyberSecSkills,
    utilitySkills,
    generalProgramming,
} from "./components/util"

// Destructure array into global variables
const {NeonBlue, SalmonPink, LettuceGreen} = CardColors


// Component styles
const pageStyle = {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}
const cardsSectionStyle = {
    display: 'flex',
    width: '80vw',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: '64px'
}
const headingStyle = {
    fontFamily: 'comfortaa',
    fontSize: 'clamp(0.8rem, 8vw, 3rem)',
}



export default function Skills() {

    const design = designSkills.map((skill) => <Badge text={skill} color={SalmonPink} />)
    const frontend = frontendSkills.map((skill) => <Badge text={skill} color={NeonBlue} />)
    const backend = backendSkills.map((skill) => <Badge text={skill} color={LettuceGreen} />)
    const cybersec = cyberSecSkills.map((skill) => <Badge text={skill} color={NeonBlue}/>)
    const utilities = utilitySkills.map((skill) => <Badge text={skill} color={SalmonPink} />)
    const programming = generalProgramming.map((skill) => <Badge text={skill} color={NeonBlue}/>)

    return(
        <div className="page" style={pageStyle}>

            <h1 align='center' style={headingStyle}> What are &nbsp;
                <span className="text-highlight">
                    My Skills?
                </span>
            </h1>

            <div style={cardsSectionStyle}>
                <CardNeon heading="UI / UX" badges={design} cardColor={SalmonPink}/>
                <CardNeon heading="Front-End" badges={frontend} cardColor={NeonBlue}/>
                <CardNeon heading="Back-End" badges={backend} cardColor={LettuceGreen}/>
                <CardNeon heading="Cyber Security" badges={cybersec} cardColor={NeonBlue}/>
                <CardNeon heading="Utilities" badges={utilities} cardColor={SalmonPink}/>
                <CardNeon heading="Programming Languages" badges={programming} cardColor={NeonBlue}/>
            </div>

        </div>
    )
}