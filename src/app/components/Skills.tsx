'use client';
import { NextPage } from 'next';
import { useState } from 'react';
import skills from '../data/skills';
import SkillCard from '../subComponents/SkillCard';
import ExpandButton from '../subComponents/ExpandButton';

const Skills: NextPage = () => {
    const [itemsToShow, setItemsToShow] = useState(4);
    const [expanded, setExpanded] = useState(false);

    const showMore = () => {
        setItemsToShow(skills.length);
        setExpanded(true);
    };

    const showLess = () => {
        setItemsToShow(4);
        setExpanded(false);
    };

    return (
        <section id='skills' className="bg-gray-200 p-8 relative shadow-xl rounded-md">
            <div className="bg-white mx-auto p-8 rounded-xl">
                <h2 className="mb-6">Habilidades</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    { skills.slice(0, itemsToShow).map((skill) => (
                        <SkillCard skillData={ skill } key={ skill.id } />
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


