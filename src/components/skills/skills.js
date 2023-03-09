import Marquee from "react-fast-marquee";
import { skillsData } from '../../data/skillsData';
import { skillsImage } from '../../utils/skillsImage';
import './skills.css';

function Skills() {

    const skillBoxStyle = {
        backgroundColor: "transparent",
        boxShadow: `0px 0px 12px #15DB95`
    }

    return (
        <div className="skills" style={{ backgroundImage: "linear-gradient(to right, #18503c 0%, #1d2e4e 100%)" }}>
            <div className="skillsHeader">
                <h2 style={{ color: '#15DB95' }}>Skills</h2>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee
                        gradient={false}
                        speed={100}
                        pauseOnHover={true}
                        pauseOnClick={true}
                        delay={0}
                        play={true}
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 style={{ color: '#EFF3F4' }}>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Skills
