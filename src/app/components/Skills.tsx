import { NextPage } from 'next';
import skills from '../data/skills';
import Image from 'next/image';

const Skills: NextPage = () => {
    return (
        <section id='skills'>
            <div>
                <h2>Habilidades</h2>
                { skills.map((skill) => (
                    <div key={ skill.id }>
                        <Image
                            src={ skill.skillsImage }
                            alt={ skill.skillsImageAlt }
                            width={ 80 }
                            height={ 80 }
                            className="hover:animate-spin"
                        />
                        <h3>{ skill.skillsName }</h3>
                    </div>
                )) }
            </div>
        </section>
    );
};

export default Skills;


