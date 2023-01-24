import CardNeon from "./components/CardNeon"
import Badge from "./components/Badge"
import { CardColors } from "./components/CardNeon"


// Destructure array into global variables
const {NeonBlue, SalmonPink, LettuceGreen} = CardColors


export default function Skills() {

    const designSkills = [
        'Figma',
        'Wireframing',
        'Prototyping',
        'Logo Designing',
    ].map((skill) => 
        <Badge text={skill} color={SalmonPink} />
    )

    const frontendSkills = [
        'HTML',
        'CSS',
        'Javascript',
        'React.js',
        'Svelte.js',
        'Bootstrap'
    ].map(
        (skill) => <Badge text={skill} color={NeonBlue} />
    )

    const backendSkills = [
        'Python',
        'FastAPI',
        'Starlette',
        'Django',
        'REST API Developent',
    ].map(
        (skill) => <Badge text={skill} color={LettuceGreen} />
    )

    const pageStyle = {
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
    const cardsSectionStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-around',
    }
    const headingStyle = {
        fontFamily: 'comfortaa',
        fontSize: 'clamp(0.8rem, 8vw, 3rem)',
    }

    return(
        <div className="page" style={pageStyle}>

            <h1 align='center' style={headingStyle}> What are &nbsp;
                <span className="text-highlight">
                    My Skills?
                </span>
            </h1>

            <div style={cardsSectionStyle}>
                <CardNeon heading="UI / UX Designer" badges={designSkills} cardColor={SalmonPink}/>
                <CardNeon heading="Front-End Development" badges={frontendSkills} cardColor={NeonBlue}/>
                <CardNeon heading="Back-End Development" badges={backendSkills} cardColor={LettuceGreen}/>
                {/* <CardNeon heading="UI / UX Designer" badges={badges} cardColor={CardColors.NeonBlue}/>
                <CardNeon heading="Back-End Development" badges={badges} cardColor={CardColors.LettuceGreen}/> */}
            </div>

        </div>
    )
}