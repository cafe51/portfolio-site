import { NextPage } from 'next';
import skills from '../data/skills';
import SkillCard from '../subComponents/SkillCard';

const Skills: NextPage = () => {
    return (
        <section id='skills'>
            <div>
                <h2>Habilidades</h2>
                { skills.map((skill) => (
                    <SkillCard skillData={ skill } key={ skill.id } />
                )) }
            </div>
        </section>
    );
};

export default Skills;



