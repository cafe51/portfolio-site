'use client';
import { NextPage } from 'next';
import { useState } from 'react';
import projects from '../data/projects';
import ScrollDownButton from '../subComponents/ScrollDownButton';
import ExpandButton from '../subComponents/ExpandButton';
import ProjectCard from '../subComponents/ProjectCard';


const Projects: NextPage = () => {
    const [expanded, setExpanded] = useState(false);

    const showMore = () => {
        setExpanded(true);
    };

    const showLess = () => {
        setExpanded(false);
    };

    return (
        <section id="projects">
            <div>
                <h2>Projetos</h2>
                <div className={ `${expanded ? 'max-h-[1000px]' : 'max-h-[500px]'} grid grid-cols-1 overflow-hidden transition-all duration-500` }>
                    { projects.map((project, index) => (
                        <div 
                            className={ `transition-opacity duration-500 ${expanded || index < 3 ? 'opacity-100' : 'opacity-0'}` }
                            key={ project.id }
                        >
                            <ProjectCard projectData={ project } />
                        </div>
                    )) }
                </div>
                { projects.length > 3 && (
                    <ExpandButton
                        expanded={ expanded }
                        onExpand={ showMore }
                        onCollapse={ showLess }
                    />
                ) }
            </div>
            <ScrollDownButton href="#certificates" />
        </section>
    );
};

export default Projects;
