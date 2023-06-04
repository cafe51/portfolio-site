'use client';
import { NextPage } from 'next';
import { useState } from 'react';
// import { motion } from 'framer-motion';
import skills from '../data/skills';
import SkillCard from '../subComponents/SkillCard';
import ExpandButton from '../subComponents/ExpandButton';

const Skills: NextPage = () => {
    const [expanded, setExpanded] = useState(false);

    const showMore = () => {
        setExpanded(true);
    };

    const showLess = () => {
        setExpanded(false);
    };

    return (
        <section id='skills' className="bg-gray-200 p-8 relative shadow-xl rounded-md">
            <div className="bg-white mx-auto p-8 rounded-xl">
                <h2 className="mb-6">Habilidades</h2>
                <div className={ `${expanded ? 'max-h-[1000px]' : 'max-h-[160px]'} grid grid-cols-2 sm:grid-cols-4 gap-6 overflow-hidden transition-all duration-500` }>
                    { skills.map((skill, index) => (
                        <div 
                            className={ `transition-opacity duration-500 ${expanded || index < 4 ? 'opacity-100' : 'opacity-0'}` }
                            key={ skill.id }
                        >
                            <SkillCard skillData={ skill } />
                        </div>
                    )) }
                </div>
                { skills.length > 4 && (
                    <ExpandButton
                        expanded={ expanded }
                        onExpand={ showMore }
                        onCollapse={ showLess }
                    />
                ) }
            </div>
        </section>
    );
};



export default Skills;


